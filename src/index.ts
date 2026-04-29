export { PipelineDashboard } from './components/PipelineDashboard';
export type { PipelineDashboardProps } from './components/PipelineDashboard';

export { SummaryCards } from './components/SummaryCards';
export type { SummaryCardsProps } from './components/SummaryCards';

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

import './styles/index.scss';
