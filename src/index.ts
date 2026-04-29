export { PipelineDashboard } from './components/PipelineDashboard';
export type { PipelineDashboardProps } from './components/PipelineDashboard';

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

import './styles/index.scss';
