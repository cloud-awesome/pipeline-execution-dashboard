import { describe, expect, it } from 'vitest';

import { dashboardDataFixture, validateDashboardData } from '../../src';

describe('dashboardDataFixture', () => {
  it('contains valid dashboard data', () => {
    const result = validateDashboardData(dashboardDataFixture);

    expect(result.success).toBe(true);
    expect(result.errors).toEqual([]);
  });

  it('contains realistic multi-repository data', () => {
    expect(dashboardDataFixture.repositories.length).toBeGreaterThanOrEqual(2);
    expect(dashboardDataFixture.pipelines.length).toBeGreaterThanOrEqual(3);
    expect(dashboardDataFixture.executions.length).toBeGreaterThanOrEqual(5);
  });

  it('includes custom categories and statuses to represent extension points', () => {
    expect(dashboardDataFixture.pipelines.some((pipeline) => pipeline.category === 'quality')).toBe(
        true,
    );

    expect(dashboardDataFixture.executions.some((execution) => execution.status === 'warning')).toBe(
        true,
    );
  });
});