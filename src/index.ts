export { PipelineDashboard } from './components/PipelineDashboard';
export type { PipelineDashboardProps } from './components/PipelineDashboard';

export { SummaryCards } from './components/SummaryCards';
export type { SummaryCardsProps } from './components/SummaryCards';

export { PipelineStatusTable } from './components/PipelineStatusTable';
export type { PipelineStatusTableProps } from './components/PipelineStatusTable';


export { dashboardDataFixture } from './fixtures/dashboardData';

export type {
  DashboardData,
  DashboardExecution,
  DashboardFilters,
  DashboardPipeline,
  DashboardRepository,
  ExecutionStatus,
  PipelineCategory,
} from './types/dashboard';

export {
  assertDashboardData,
  dashboardDataSchema,
  validateDashboardData,
} from './validation/dashboardDataValidation';

export type { DashboardDataValidationResult } from './validation/dashboardDataValidation';

export { formatStatusLabel, getExecutionStatusSummary } from './utils/statusSummary';
export type { StatusSummaryItem } from './utils/statusSummary';

export { formatDateTime, formatDuration } from './utils/formatting';

export {
  getLatestExecutionForPipeline,
  getPipelineStatusRows,
  getRepositoryDisplayName,
} from './utils/pipelineStatusRows';

export type { PipelineStatusRow } from './utils/pipelineStatusRows';


import './styles/index.scss';
