import { render, screen } from '@testing-library/react';

import { dashboardDataFixture, PipelineDashboard, type DashboardData } from '../../src';

const emptyDashboardData: DashboardData = {
  generatedAt: '2026-04-29T12:00:00.000Z',
  repositories: [],
  pipelines: [],
  executions: [],
};

describe('PipelineDashboard', () => {
  it('renders the dashboard landmark', () => {
    render(<PipelineDashboard data={dashboardDataFixture} />);

    expect(
      screen.getByRole('region', {
        name: 'Pipeline execution dashboard',
      }),
    ).toBeInTheDocument();
  });

  it('applies a custom class name', () => {
    render(<PipelineDashboard data={dashboardDataFixture} className="custom-dashboard" />);

    expect(
      screen.getByRole('region', {
        name: 'Pipeline execution dashboard',
      }),
    ).toHaveClass('ped-dashboard', 'custom-dashboard');
  });

  it('renders dashboard data counts when data is available', () => {
    render(<PipelineDashboard data={dashboardDataFixture} />);

    expect(
      screen.getByText('Showing 3 repositories, 6 pipelines, and 6 executions.'),
    ).toBeInTheDocument();
  });

/*  Removed as deprecated

    it('renders execution summary cards when data is available', () => {
    render(<PipelineDashboard data={dashboardDataFixture} />);

    expect(
      screen.getByRole('heading', {
        name: 'Execution summary',
      }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText('Success: 1 execution')).toBeInTheDocument();
    expect(screen.getByLabelText('Warning: 1 execution')).toBeInTheDocument();
  });
*/

  it('renders the latest pipeline executions table when data is available', () => {
    render(<PipelineDashboard data={dashboardDataFixture} />);

    expect(
      screen.getByRole('heading', {
        name: 'Latest pipeline executions',
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('table', {
        name: 'Latest execution status for each pipeline',
      }),
    ).toBeInTheDocument();
  });

  it('renders pipeline execution trends when data is available', () => {
    render(<PipelineDashboard data={dashboardDataFixture} />);

    expect(
      screen.getByRole('heading', {
        name: 'Pipeline execution trends',
      }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('list', {
        name: 'Release pipeline execution trends',
      }),
    ).toBeInTheDocument();
  });

  it('renders a useful empty state when no dashboard data is available', () => {
    render(<PipelineDashboard data={emptyDashboardData} />);

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText('No pipeline execution data available')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Provide repositories, pipelines, and executions to populate the dashboard.',
      ),
    ).toBeInTheDocument();
  });

  it('renders the generated timestamp as a time element', () => {
    render(<PipelineDashboard data={dashboardDataFixture} />);

    const timeElement = document.querySelector('time');

    expect(timeElement).toBeInTheDocument();
    expect(timeElement).toHaveAttribute('dateTime', dashboardDataFixture.generatedAt);
  });

  it('does not throw if generatedAt is not parseable', () => {
    const dataWithInvalidGeneratedAt: DashboardData = {
      ...emptyDashboardData,
      generatedAt: 'not-a-date',
    };

    render(<PipelineDashboard data={dataWithInvalidGeneratedAt} />);

    expect(screen.getByText('not-a-date')).toBeInTheDocument();
  });
});
