import type {
  DashboardData,
  DashboardExecution,
  DashboardPipeline,
  DashboardRepository,
} from '../types/dashboard';

export interface PipelineStatusRow {
  repository: DashboardRepository;
  pipeline: DashboardPipeline;
  latestExecution?: DashboardExecution;
}

export function getPipelineStatusRows(data: DashboardData): PipelineStatusRow[] {
  const repositoriesById = new Map(
      data.repositories.map((repository) => [repository.id, repository]),
  );

  return data.pipelines
      .map((pipeline) => {
        const repository = repositoriesById.get(pipeline.repositoryId);

        if (!repository) {
          return undefined;
        }

        const latestExecution = getLatestExecutionForPipeline(data.executions, pipeline.id);

        if (!latestExecution) {
          return {
            repository,
            pipeline,
          };
        }

        return {
          repository,
          pipeline,
          latestExecution,
        };
      })
      .filter((row): row is PipelineStatusRow => row !== undefined)
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

export function getLatestExecutionForPipeline(
    executions: DashboardExecution[],
    pipelineId: string,
): DashboardExecution | undefined {
  return [...executions]
      .filter((execution) => execution.pipelineId === pipelineId)
      .sort((left, right) => {
        const rightTime = Date.parse(right.startedAt);
        const leftTime = Date.parse(left.startedAt);

        return rightTime - leftTime;
      })[0];
}

export function getRepositoryDisplayName(repository: DashboardRepository): string {
  return repository.displayName ?? repository.name;
}