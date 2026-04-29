import { render, screen } from '@testing-library/react';

import { SummaryCards, type DashboardExecution } from '../../src';

function createExecution(id: string, status: string): DashboardExecution {
  return {
    id,
    repositoryId: 'repository',
    pipelineId: 'pipeline',
    status,
    startedAt: '2026-04-29T12:00:00.000Z',
  };
}

describe('SummaryCards', () => {
  it('renders an empty summary state', () => {
    render(<SummaryCards executions={[]} />);

    expect(
        screen.getByRole('heading', {
          name: 'Execution summary',
        }),
    ).toBeInTheDocument();

    expect(screen.getByText('No executions to summarise.')).toBeInTheDocument();
  });

  it('renders counts by status', () => {
    render(
        <SummaryCards
            executions={[
              createExecution('1', 'success'),
              createExecution('2', 'success'),
              createExecution('3', 'failure'),
            ]}
        />,
    );

    expect(
        screen.getByLabelText('Success: 2 executions'),
    ).toBeInTheDocument();

    expect(
        screen.getByLabelText('Failure: 1 execution'),
    ).toBeInTheDocument();
  });

  it('renders custom statuses safely', () => {
    render(
        <SummaryCards
            executions={[
              createExecution('1', 'warning'),
              createExecution('2', 'warning'),
            ]}
        />,
    );

    expect(screen.getByLabelText('Warning: 2 executions')).toBeInTheDocument();
    expect(screen.getByText('Warning')).toBeInTheDocument();
  });
});