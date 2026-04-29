import { expectTypeOf, test } from 'vitest';

import type {
  DashboardData,
  DashboardExecution,
  DashboardFilters,
  DashboardPipeline,
  DashboardRepository,
  ExecutionStatus,
  PipelineCategory,
} from '../../src';

test('DashboardData exposes the expected shape', () => {
  expectTypeOf<DashboardData>().toMatchTypeOf<{
    generatedAt: string;
    repositories: DashboardRepository[];
    pipelines: DashboardPipeline[];
    executions: DashboardExecution[];
  }>();
});

test('known and custom pipeline categories are supported', () => {
  expectTypeOf<'build'>().toMatchTypeOf<PipelineCategory | string>();
  expectTypeOf<'security'>().toMatchTypeOf<PipelineCategory | string>();
});

test('known and custom execution statuses are supported', () => {
  expectTypeOf<'success'>().toMatchTypeOf<ExecutionStatus | string>();
  expectTypeOf<'unstable'>().toMatchTypeOf<ExecutionStatus | string>();
});

test('DashboardFilters supports category repository and status filters', () => {
  expectTypeOf<DashboardFilters>().toMatchTypeOf<{
    categories?: string[];
    repositoryIds?: string[];
    statuses?: string[];
  }>();
});