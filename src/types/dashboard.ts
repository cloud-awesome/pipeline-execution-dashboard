export interface DashboardData {
  generatedAt: string;
  repositories: DashboardRepository[];
  pipelines: DashboardPipeline[];
  executions: DashboardExecution[];
}

export interface DashboardRepository {
  id: string;
  name: string;
  displayName?: string;
  url?: string;
}

export interface DashboardPipeline {
  id: string;
  repositoryId: string;
  name: string;
  category: PipelineCategory | string;
  url?: string;
}

export interface DashboardExecution {
  id: string;
  repositoryId: string;
  pipelineId: string;
  status: ExecutionStatus | string;
  startedAt: string;
  completedAt?: string;
  durationMs?: number;
  branch?: string;
  commitSha?: string;
  url?: string;
}

export type PipelineCategory = 'build' | 'release' | 'deploy' | 'test' | 'other';

export type ExecutionStatus =
    | 'success'
    | 'failure'
    | 'cancelled'
    | 'running'
    | 'queued'
    | 'neutral';

export interface DashboardFilters {
  categories?: string[];
  repositoryIds?: string[];
  statuses?: string[];
}
