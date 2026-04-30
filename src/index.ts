export { PipelineDashboard } from './components/PipelineDashboard';
export type { PipelineDashboardProps } from './components/PipelineDashboard';

export { SummaryCards } from './components/SummaryCards';
export type { SummaryCardsProps } from './components/SummaryCards';

export { ExecutionHistoryChart } from './components/ExecutionHistoryChart';
export type { ExecutionHistoryChartProps } from './components/ExecutionHistoryChart';

export { PipelineExecutionTrends } from './components/PipelineExecutionTrends';
export type { PipelineExecutionTrendsProps } from './components/PipelineExecutionTrends';

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

export { getExecutionHistoryData } from './utils/executionHistory';
export type {
  ExecutionHistoryBucket,
  ExecutionHistoryBucketSize,
  ExecutionHistoryChartRow,
  ExecutionHistoryData,
} from './utils/executionHistory';

export { getPipelineExecutionTrends } from './utils/pipelineExecutionTrends';
export type {
  PipelineExecutionTrend,
  PipelineExecutionTrendOptions,
} from './utils/pipelineExecutionTrends';

export { formatDateTime, formatDuration } from './utils/formatting';

export {
  getLatestExecutionForPipeline,
  getPipelineStatusRows,
  getRepositoryDisplayName,
} from './utils/pipelineStatusRows';

export type { PipelineStatusRow } from './utils/pipelineStatusRows';

import './styles/index.scss';
