import { render, screen } from '@testing-library/react';

import { dashboardDataFixture, ExecutionHistoryChart, type DashboardData } from '../../src';

const emptyDashboardData: DashboardData = {
  generatedAt: '2026-04-29T12:00:00.000Z',
  repositories: [],
  pipelines: [],
  executions: [],
};

describe('ExecutionHistoryChart', () => {
  /*
    Recharts can be noisy in JSDOM because it depends on layout measurements.
    The stable way is to test:
      - Heading renders.
      - Empty state renders.
      - Chart region renders.
      - Accessible image label exists.
    See comment below if issues are thrown later...
  */

  it('renders an empty chart state', () => {
    render(<ExecutionHistoryChart data={emptyDashboardData} />);

    expect(
        screen.getByRole('heading', {
          name: 'Execution history',
        }),
    ).toBeInTheDocument();

    expect(screen.getByText('No execution history to display.')).toBeInTheDocument();
  });

  it('renders an accessible chart container when data exists', () => {
    render(<ExecutionHistoryChart data={dashboardDataFixture} />);

    expect(
        screen.getByRole('heading', {
          name: 'Execution history',
        }),
    ).toBeInTheDocument();

    expect(
        screen.getByRole('img', {
          name: 'Stacked bar chart showing execution counts by repository, date, and status',
        }),
    ).toBeInTheDocument();
  });
});



/*

If Recharts throws ResizeObserver is not defined, add a small test polyfill.
Update tests/setup.ts:

```
import '@testing-library/jest-dom/vitest';

class ResizeObserverMock {
  observe() {
    // No-op for JSDOM.
  }

  unobserve() {
    // No-op for JSDOM.
  }

  disconnect() {
    // No-op for JSDOM.
  }
}

globalThis.ResizeObserver = ResizeObserverMock;
```

If TypeScript complains about the exact `ResizeObserver` shape, use:

```
import '@testing-library/jest-dom/vitest';

class ResizeObserverMock {
  observe() {
    // No-op for JSDOM.
  }

  unobserve() {
    // No-op for JSDOM.
  }

  disconnect() {
    // No-op for JSDOM.
  }
}

globalThis.ResizeObserver = ResizeObserverMock as unknown as typeof ResizeObserver;
```

 */
