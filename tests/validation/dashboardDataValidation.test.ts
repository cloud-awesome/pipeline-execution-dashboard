import { describe, expect, it } from 'vitest';

import {
  assertDashboardData,
  dashboardDataFixture,
  validateDashboardData,
  type DashboardData,
  type DashboardExecution,
} from '../../src';

function getFixtureExecution(index: number): DashboardExecution {
  const execution = dashboardDataFixture.executions[index];

  if (!execution) {
    throw new Error(`Expected dashboardDataFixture.executions[${index}] to exist.`);
  }

  return execution;
}

describe('validateDashboardData', () => {
  it('accepts valid dashboard data', () => {
    const result = validateDashboardData(dashboardDataFixture);

    expect(result.success).toBe(true);
    expect(result.data).toEqual(dashboardDataFixture);
    expect(result.errors).toEqual([]);
  });

  it('rejects missing required fields', () => {
    const result = validateDashboardData({
      generatedAt: '2026-04-29T12:00:00.000Z',
      repositories: [],
      pipelines: [],
    });

    expect(result.success).toBe(false);
    expect(result.errors.some((error) => error.includes('executions'))).toBe(true);
  });

  it('rejects invalid generatedAt values', () => {
    const invalidData: DashboardData = {
      ...dashboardDataFixture,
      generatedAt: 'not-a-date',
    };

    const result = validateDashboardData(invalidData);

    expect(result.success).toBe(false);
    expect(result.errors.some((error) => error.includes('generatedAt'))).toBe(true);
  });

  it('rejects pipeline references to unknown repositories', () => {
    const invalidData: DashboardData = {
      ...dashboardDataFixture,
      pipelines: [
        ...dashboardDataFixture.pipelines,
        {
          id: 'unknown-repository-pipeline',
          repositoryId: 'missing-repository',
          name: 'Build',
          category: 'build',
        },
      ],
    };

    const result = validateDashboardData(invalidData);

    expect(result.success).toBe(false);
    expect(result.errors).toContain(
        'pipelines.6.repositoryId: Pipeline "unknown-repository-pipeline" references unknown repository "missing-repository".',
    );
  });

  it('rejects execution references to unknown pipelines', () => {
    const invalidData: DashboardData = {
      ...dashboardDataFixture,
      executions: [
        ...dashboardDataFixture.executions,
        {
          id: 'unknown-pipeline-execution',
          repositoryId: 'web-app',
          pipelineId: 'missing-pipeline',
          status: 'success',
          startedAt: '2026-04-29T09:00:00.000Z',
        },
      ],
    };

    const result = validateDashboardData(invalidData);

    expect(result.success).toBe(false);
    expect(result.errors).toContain(
        'executions.6.pipelineId: Execution "unknown-pipeline-execution" references unknown pipeline "missing-pipeline".',
    );
  });

  it('rejects execution repository mismatches', () => {
    const invalidData: DashboardData = {
      ...dashboardDataFixture,
      executions: [
        {
          ...getFixtureExecution(0),
          repositoryId: 'api-service',
        },
      ],
    };

    const result = validateDashboardData(invalidData);

    expect(result.success).toBe(false);
    expect(result.errors).toContain(
        'executions.0.repositoryId: Execution "execution-001" repositoryId does not match its pipeline repositoryId.',
    );
  });

  it('rejects completedAt values before startedAt', () => {
    const invalidData: DashboardData = {
      ...dashboardDataFixture,
      executions: [
        {
          id: 'time-travel-execution',
          repositoryId: 'web-app',
          pipelineId: 'web-app-build',
          status: 'failure',
          startedAt: '2026-04-29T10:00:00.000Z',
          completedAt: '2026-04-29T09:00:00.000Z',
        },
      ],
    };

    const result = validateDashboardData(invalidData);

    expect(result.success).toBe(false);
    expect(result.errors).toContain(
        'executions.0.completedAt: Execution "time-travel-execution" completedAt cannot be before startedAt.',
    );
  });

  it('allows custom categories and statuses', () => {
    const customData: DashboardData = {
      generatedAt: '2026-04-29T12:00:00.000Z',
      repositories: [
        {
          id: 'custom-repository',
          name: 'custom-repository',
        },
      ],
      pipelines: [
        {
          id: 'custom-pipeline',
          repositoryId: 'custom-repository',
          name: 'Custom Pipeline',
          category: 'security',
        },
      ],
      executions: [
        {
          id: 'custom-execution',
          repositoryId: 'custom-repository',
          pipelineId: 'custom-pipeline',
          status: 'unstable',
          startedAt: '2026-04-29T11:00:00.000Z',
        },
      ],
    };

    const result = validateDashboardData(customData);

    expect(result.success).toBe(true);
  });
});

describe('assertDashboardData', () => {
  it('does not throw for valid dashboard data', () => {
    expect(() => assertDashboardData(dashboardDataFixture)).not.toThrow();
  });

  it('throws for invalid dashboard data', () => {
    expect(() => assertDashboardData({})).toThrow('Invalid dashboard data');
  });
});