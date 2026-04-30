import type { DashboardData, DashboardExecution } from '../types/dashboard';
import { formatDateTime, formatDuration } from '../utils/formatting';
import {
  getPipelineExecutionTrends,
  type PipelineExecutionTrend,
} from '../utils/pipelineExecutionTrends';
import { getRepositoryDisplayName } from '../utils/pipelineStatusRows';
import { formatStatusLabel } from '../utils/statusSummary';

export interface PipelineExecutionTrendsProps {
  data: DashboardData;
  maxExecutionsPerPipeline?: number;
}

export function PipelineExecutionTrends({
  data,
  maxExecutionsPerPipeline,
}: PipelineExecutionTrendsProps) {
  const trends = getPipelineExecutionTrends(
    data,
    maxExecutionsPerPipeline === undefined ? {} : { maxExecutionsPerPipeline },
  );

  return (
    <section className="ped-trends" aria-labelledby="ped-trends-heading">
      <h3 id="ped-trends-heading" className="ped-trends__heading">
        Pipeline execution trends
      </h3>

      {trends.length === 0 ? (
        <p className="ped-trends__empty">No pipeline trends to display.</p>
      ) : (
        <ul className="ped-trends__list" aria-label="Recent execution trends by pipeline">
          {trends.map((trend) => (
            <PipelineExecutionTrendCard key={trend.pipeline.id} trend={trend} />
          ))}
        </ul>
      )}
    </section>
  );
}

function PipelineExecutionTrendCard({ trend }: { trend: PipelineExecutionTrend }) {
  const repositoryName = getRepositoryDisplayName(trend.repository);
  const title = `${repositoryName}: ${trend.pipeline.name}`;
  const latestStatus = trend.latestExecution
    ? formatStatusLabel(trend.latestExecution.status)
    : 'No executions';
  const category = trend.pipeline.category ?? 'other';

  return (
    <li className="ped-trends__card">
      <div className="ped-trends__card-header">
        <div>
          <h4 className="ped-trends__title">{title}</h4>
          <p className="ped-trends__meta">
            {formatStatusLabel(category)} - {trend.totalExecutions} execution
            {trend.totalExecutions === 1 ? '' : 's'}
          </p>
        </div>
        <span
          className="ped-trends__latest-status"
          data-status={trend.latestExecution?.status ?? 'none'}
        >
          {latestStatus}
        </span>
      </div>

      {trend.executions.length === 0 ? (
        <p className="ped-trends__no-executions">No recent executions.</p>
      ) : (
        <ol className="ped-trends__bars" aria-label={`Recent executions for ${title}`}>
          {trend.executions.map((execution) => (
            <li key={execution.id} className="ped-trends__bar-item">
              <span
                className="ped-trends__bar"
                data-status={execution.status}
                aria-label={getExecutionLabel(execution)}
                title={getExecutionLabel(execution)}
              />
            </li>
          ))}
        </ol>
      )}
    </li>
  );
}

function getExecutionLabel(execution: DashboardExecution): string {
  const status = formatStatusLabel(execution.status);
  const startedAt = formatDateTime(execution.startedAt);
  const duration = formatDuration(execution.durationMs);

  return `${status}, started ${startedAt}, duration ${duration}`;
}
