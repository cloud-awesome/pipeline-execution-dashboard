import type { DashboardData } from '../types/dashboard';
import {SummaryCards} from "./SummaryCards";

export interface PipelineDashboardProps {
  data: DashboardData;
  className?: string;
}

export function PipelineDashboard({ data, className }: PipelineDashboardProps) {
  const rootClassName = ['ped-dashboard', className].filter(Boolean).join(' ');
  const hasDashboardData =
      data.repositories.length > 0 || data.pipelines.length > 0 || data.executions.length > 0;

  return (
      <section className={rootClassName} aria-label="Pipeline execution dashboard">
        <header className="ped-dashboard__header">
          <div>
            <h2 className="ped-dashboard__title">Pipeline execution dashboard</h2>
            <p className="ped-dashboard__generated-at">
              Generated at{' '}
              <time dateTime={data.generatedAt}>{formatGeneratedAt(data.generatedAt)}</time>
            </p>
          </div>
        </header>

        {!hasDashboardData ? (
            <div className="ped-dashboard__empty" role="status">
              <h3 className="ped-dashboard__empty-title">No pipeline execution data available</h3>
              <p className="ped-dashboard__empty-message">
                Provide repositories, pipelines, and executions to populate the dashboard.
              </p>
            </div>
        ) : (
            <div className="ped-dashboard__content">
              <p className="ped-dashboard__intro">
                Showing {data.repositories.length} repositories, {data.pipelines.length} pipelines, and{' '}
                {data.executions.length} executions.
              </p>

              <SummaryCards executions={data.executions} />
            </div>
        )}
      </section>
  );
}

function formatGeneratedAt(value: string): string {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(date);
}
