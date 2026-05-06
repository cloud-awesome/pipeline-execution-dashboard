import { describe, expect, it } from 'vitest';

import {
  dashboardDataFixture,
  getLatestExecutionForPipeline,
  getPipelineStatusRows,
  type DashboardExecution,
} from '../../src';

function createExecution(
    id: string,
    pipelineId: string,
    startedAt: string,
): DashboardExecution {
  return {
    id,
    repositoryId: 'repository',
    pipelineId,
    status: 'success',
    startedAt,
  };
}

describe('getLatestExecutionForPipeline', () => {
  it('returns undefined when a pipeline has no executions', () => {
    expect(getLatestExecutionForPipeline([], 'pipeline')).toBeUndefined();
  });

  it('returns the latest execution by startedAt', () => {
    const executions = [
      createExecution('older', 'pipeline', '2026-04-29T10:00:00.000Z'),
      createExecution('newer', 'pipeline', '2026-04-29T11:00:00.000Z'),
      createExecution('other', 'other-pipeline', '2026-04-29T12:00:00.000Z'),
    ];

    expect(getLatestExecutionForPipeline(executions, 'pipeline')?.id).toBe('newer');
  });
});

describe('getPipelineStatusRows', () => {
  it('creates one row per pipeline with known repository', () => {
    const rows = getPipelineStatusRows(dashboardDataFixture);

    expect(rows).toHaveLength(dashboardDataFixture.pipelines.length);
  });

  it('includes repository pipeline and latest execution data', () => {
    const rows = getPipelineStatusRows(dashboardDataFixture);
    const row = rows.find((item) => item.pipeline.id === 'web-app-build');

    expect(row?.repository.id).toBe('web-app');
    expect(row?.pipeline.name).toBe('Build');
    expect(row?.latestExecution?.id).toBe('execution-001');
  });

  it('omits pipelines with unknown repositories', () => {
    const rows = getPipelineStatusRows({
      generatedAt: '2026-04-29T12:00:00.000Z',
      repositories: [],
      pipelines: [
        {
          id: 'orphan-pipeline',
          repositoryId: 'missing-repository',
          name: 'Orphan Pipeline',
          category: 'other',
        },
      ],
      executions: [],
    });

    expect(rows).toEqual([]);
  });
});
