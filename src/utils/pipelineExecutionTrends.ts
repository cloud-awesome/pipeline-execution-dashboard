import type {
  DashboardData,
  DashboardExecution,
  DashboardPipeline,
  DashboardRepository,
} from '../types/dashboard';
import { getRepositoryDisplayName } from './pipelineStatusRows';

export interface PipelineExecutionTrend {
  repository: DashboardRepository;
  pipeline: DashboardPipeline;
  executions: DashboardExecution[];
  latestExecution?: DashboardExecution;
  totalExecutions: number;
}

export interface PipelineExecutionTrendOptions {
  maxExecutionsPerPipeline?: number;
}

export function getPipelineExecutionTrends(
  data: DashboardData,
  options: PipelineExecutionTrendOptions = {},
): PipelineExecutionTrend[] {
  const maxExecutionsPerPipeline = options.maxExecutionsPerPipeline ?? 20;
  const repositoriesById = new Map(
    data.repositories.map((repository) => [repository.id, repository]),
  );

  return data.pipelines
    .flatMap((pipeline) => {
      const repository = repositoriesById.get(pipeline.repositoryId);

      if (!repository) {
        return [];
      }

      const orderedExecutions = getOrderedExecutions(data.executions, pipeline.id);
      const visibleExecutions =
        maxExecutionsPerPipeline > 0
          ? orderedExecutions.slice(-maxExecutionsPerPipeline)
          : orderedExecutions;
      const latestExecution = orderedExecutions.at(-1);

      const trend: PipelineExecutionTrend = {
        repository,
        pipeline,
        executions: visibleExecutions,
        totalExecutions: orderedExecutions.length,
      };

      if (latestExecution) {
        trend.latestExecution = latestExecution;
      }

      return [trend];
    })
    .sort((left, right) => {
      const repositoryComparison = getRepositoryDisplayName(left.repository).localeCompare(
        getRepositoryDisplayName(right.repository),
      );

      if (repositoryComparison !== 0) {
        return repositoryComparison;
      }

      return left.pipeline.name.localeCompare(right.pipeline.name);
    });
}

function getOrderedExecutions(
  executions: DashboardExecution[],
  pipelineId: string,
): DashboardExecution[] {
  return executions
    .filter((execution) => execution.pipelineId === pipelineId)
    .sort((left, right) => {
      const leftTime = Date.parse(left.startedAt);
      const rightTime = Date.parse(right.startedAt);

      if (Number.isNaN(leftTime) && Number.isNaN(rightTime)) {
        return left.id.localeCompare(right.id);
      }

      if (Number.isNaN(leftTime)) {
        return 1;
      }

      if (Number.isNaN(rightTime)) {
        return -1;
      }

      return leftTime - rightTime;
    });
}
