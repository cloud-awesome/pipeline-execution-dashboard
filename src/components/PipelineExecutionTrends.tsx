import type { DashboardData, DashboardExecution, PipelineCategory } from '../types/dashboard';
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

const trendCategoryOrder = ['release', 'build', 'deploy', 'test', 'other'] as const satisfies
  readonly PipelineCategory[];

export function PipelineExecutionTrends({
  data,
  maxExecutionsPerPipeline,
}: PipelineExecutionTrendsProps) {
  const trends = getPipelineExecutionTrends(
    data,
    maxExecutionsPerPipeline === undefined ? {} : { maxExecutionsPerPipeline },
  );
  const groupedTrends = getTrendCategoryGroups(trends);

  return (
    <section className="ped-trends" aria-labelledby="ped-trends-heading">

      {trends.length === 0 ? (
        <p className="ped-trends__empty">No pipeline trends to display.</p>
      ) : (
        groupedTrends.map(({ category, trends: categoryTrends }) => {
          const categoryLabel = formatStatusLabel(category);

          return (
            <div key={category} className="ped-trends__category">
              <h3 className="ped-trends__category-heading">{categoryLabel}</h3>
              <ul
                className="ped-trends__list"
                aria-label={`${categoryLabel} pipeline execution trends`}
              >
                {categoryTrends.map((trend) => (
                  <PipelineExecutionTrendCard key={trend.pipeline.id} trend={trend} />
                ))}
              </ul>
            </div>
          );
        })
      )}
    </section>
  );
}

function getTrendCategoryGroups(trends: PipelineExecutionTrend[]) {
  return trendCategoryOrder
    .map((category) => ({
      category,
      trends: trends.filter((trend) => getTrendCategory(trend) === category),
    }))
    .filter((group) => group.trends.length > 0);
}

function getTrendCategory(trend: PipelineExecutionTrend): PipelineCategory {
  const category = trend.pipeline.category.toLowerCase();

  return trendCategoryOrder.includes(category as PipelineCategory)
    ? (category as PipelineCategory)
    : 'other';
}

function PipelineExecutionTrendCard({ trend }: { trend: PipelineExecutionTrend }) {
  const repositoryName = getRepositoryDisplayName(trend.repository);
  const title = `${repositoryName}: ${trend.pipeline.name}`;
  const latestStatus = trend.latestExecution
    ? formatStatusLabel(trend.latestExecution.status)
    : 'No executions';
  const latestExecutionTime = formatDateTime(trend.latestExecution?.startedAt) ?? 'N/A';

  return (
    <li className="ped-trends__card">
      <div className="ped-trends__card-header">
        <div>
          <h4 className="ped-trends__title">{title}</h4>
          <p className="ped-trends__meta">
            Last run: {latestExecutionTime}
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
