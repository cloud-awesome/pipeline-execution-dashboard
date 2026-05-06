import { render, screen, within } from '@testing-library/react';

import { PipelineExecutionTrends, type DashboardData } from '../../src';

const data: DashboardData = {
  generatedAt: '2026-04-29T12:00:00.000Z',
  repositories: [
    {
      id: 'web-app',
      name: 'web-app',
      displayName: 'Web App',
    },
  ],
  pipelines: [
    {
      id: 'web-build',
      repositoryId: 'web-app',
      name: 'Build',
      category: 'build',
    },
    {
      id: 'web-deploy',
      repositoryId: 'web-app',
      name: 'Deploy',
      category: 'deploy',
    },
  ],
  executions: [
    {
      id: '1',
      repositoryId: 'web-app',
      pipelineId: 'web-build',
      status: 'success',
      startedAt: '2026-04-29T08:00:00.000Z',
      durationMs: 120000,
    },
    {
      id: '2',
      repositoryId: 'web-app',
      pipelineId: 'web-build',
      status: 'failure',
      startedAt: '2026-04-29T09:00:00.000Z',
      durationMs: 180000,
    },
  ],
};

const emptyDashboardData: DashboardData = {
  generatedAt: '2026-04-29T12:00:00.000Z',
  repositories: [],
  pipelines: [],
  executions: [],
};

const categoryData: DashboardData = {
  ...data,
  pipelines: [
    {
      id: 'web-quality',
      repositoryId: 'web-app',
      name: 'Quality',
      category: 'quality',
    },
    {
      id: 'web-test',
      repositoryId: 'web-app',
      name: 'Test',
      category: 'test',
    },
    {
      id: 'web-deploy',
      repositoryId: 'web-app',
      name: 'Deploy',
      category: 'deploy',
    },
    {
      id: 'web-build',
      repositoryId: 'web-app',
      name: 'Build',
      category: 'build',
    },
    {
      id: 'web-release',
      repositoryId: 'web-app',
      name: 'Release',
      category: 'release',
    },
  ],
};

describe('PipelineExecutionTrends', () => {
  it('renders an empty trend state', () => {
    render(<PipelineExecutionTrends data={emptyDashboardData} />);

    expect(screen.getByText('No pipeline trends to display.')).toBeInTheDocument();
  });

  it('renders a titled mini chart per pipeline', () => {
    render(<PipelineExecutionTrends data={data} />);

    expect(screen.getByRole('heading', { name: 'Web App: Build' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Web App: Deploy' })).toBeInTheDocument();
  });

  it('groups trends into separate category lists in display order', () => {
    render(<PipelineExecutionTrends data={categoryData} />);

    const categoryNames = ['Release', 'Build', 'Deploy', 'Test', 'Other'] as const;

    expect(screen.getAllByRole('list', { name: /pipeline execution trends$/i })).toHaveLength(5);
    expect(
      categoryNames.map((name) => screen.getByRole('heading', { name }).textContent),
    ).toEqual(categoryNames);

    for (const [previousName, currentName] of [
      ['Release', 'Build'],
      ['Build', 'Deploy'],
      ['Deploy', 'Test'],
      ['Test', 'Other'],
    ] as const) {
      const previousHeading = screen.getByRole('heading', { name: previousName });
      const currentHeading = screen.getByRole('heading', { name: currentName });

      expect(
        previousHeading.compareDocumentPosition(currentHeading) &
          Node.DOCUMENT_POSITION_FOLLOWING,
      ).toBeTruthy();
    }

    expect(
      within(screen.getByRole('list', { name: 'Other pipeline execution trends' })).getByRole(
        'heading',
        { name: 'Web App: Quality' },
      ),
    ).toBeInTheDocument();
  });

  it('shows the latest status for the pipeline', () => {
    render(<PipelineExecutionTrends data={data} />);

    const buildCard = screen.getByRole('heading', { name: 'Web App: Build' }).closest('li');

    expect(buildCard).not.toBeNull();
    expect(within(buildCard as HTMLElement).getByText('Failure')).toBeInTheDocument();
  });

  it('renders accessible execution bars in chronological order', () => {
    render(<PipelineExecutionTrends data={data} />);

    const chart = screen.getByRole('list', {
      name: 'Recent executions for Web App: Build',
    });

    expect(within(chart).getByLabelText(/Success, started/)).toBeInTheDocument();
    expect(within(chart).getByLabelText(/Failure, started/)).toBeInTheDocument();
  });

  it('renders a no-executions state for pipelines without executions', () => {
    render(<PipelineExecutionTrends data={data} />);

    expect(screen.getByText('No recent executions.')).toBeInTheDocument();
  });
});
