import { render, screen, within } from '@testing-library/react';

import { dashboardDataFixture, PipelineStatusTable, type DashboardData } from '../../src';

const emptyDashboardData: DashboardData = {
  generatedAt: '2026-04-29T12:00:00.000Z',
  repositories: [],
  pipelines: [],
  executions: [],
};

describe('PipelineStatusTable', () => {
  it('renders an empty table state', () => {
    render(<PipelineStatusTable data={emptyDashboardData} />);

    expect(
        screen.getByRole('heading', {
          name: 'Latest pipeline executions',
        }),
    ).toBeInTheDocument();

    expect(screen.getByText('No pipelines to display.')).toBeInTheDocument();
  });

  it('renders table headers', () => {
    render(<PipelineStatusTable data={dashboardDataFixture} />);

    expect(screen.getByRole('columnheader', { name: 'Repository' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Pipeline' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Category' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Last status' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Started' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Completed' })).toBeInTheDocument();
    expect(screen.getByRole('columnheader', { name: 'Duration' })).toBeInTheDocument();
  });

  it('renders repositories pipelines categories and statuses', () => {
    render(<PipelineStatusTable data={dashboardDataFixture} />);

    expect(screen.getAllByRole('link', { name: 'Web Application' }).length).toBeGreaterThan(0);
    expect(screen.getAllByText('Build').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Release').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Success').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Warning').length).toBeGreaterThan(0);
  });

  it('renders accessible links where URLs are provided', () => {
    render(<PipelineStatusTable data={dashboardDataFixture} />);

    const webApplicationLinks = screen.getAllByRole('link', { name: 'Web Application' });

    expect(webApplicationLinks.length).toBeGreaterThan(0);
    expect(webApplicationLinks[0]).toHaveAttribute(
        'href',
        'https://example.com/repositories/web-app',
    );

    expect(screen.getByRole('link', { name: 'Release' })).toHaveAttribute(
        'href',
        'https://example.com/repositories/web-app/pipelines/release',
    );
  });

  it('renders no-execution rows safely', () => {
    const data: DashboardData = {
      generatedAt: '2026-04-29T12:00:00.000Z',
      repositories: [
        {
          id: 'repository',
          name: 'repository',
        },
      ],
      pipelines: [
        {
          id: 'pipeline',
          repositoryId: 'repository',
          name: 'Pipeline',
          category: 'other',
        },
      ],
      executions: [],
    };

    render(<PipelineStatusTable data={data} />);

    const row = screen.getByRole('row', {
      name: /repository pipeline other no executions/i,
    });

    expect(within(row).getByText('No executions')).toBeInTheDocument();
    expect(within(row).getAllByText('—')).toHaveLength(3);
  });
});
