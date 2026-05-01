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

describe('PipelineExecutionTrends', () => {
  it('renders an empty trend state', () => {
    render(<PipelineExecutionTrends data={emptyDashboardData} />);

    expect(
      screen.getByRole('heading', {
        name: 'Pipeline execution trends',
      }),
    ).toBeInTheDocument();

    expect(screen.getByText('No pipeline trends to display.')).toBeInTheDocument();
  });

  it('renders a titled mini chart per pipeline', () => {
    render(<PipelineExecutionTrends data={data} />);

    expect(screen.getByRole('heading', { name: 'Web App: Build' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Web App: Deploy' })).toBeInTheDocument();
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
