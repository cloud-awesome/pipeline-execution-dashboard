import { describe, expect, it } from 'vitest';

import { getExecutionHistoryData, type DashboardData } from '../../src';

const data: DashboardData = {
  generatedAt: '2026-04-29T12:00:00.000Z',
  repositories: [
    {
      id: 'web-app',
      name: 'web-app',
      displayName: 'Web App',
    },
    {
      id: 'api',
      name: 'api',
      displayName: 'API',
    },
  ],
  pipelines: [
    {
      id: 'web-build',
      repositoryId: 'web-app',
      name: 'Build',
      category: 'build',
    },
    {
      id: 'api-build',
      repositoryId: 'api',
      name: 'Build',
      category: 'build',
    },
  ],
  executions: [
    {
      id: '1',
      repositoryId: 'web-app',
      pipelineId: 'web-build',
      status: 'success',
      startedAt: '2026-04-29T08:00:00.000Z',
    },
    {
      id: '2',
      repositoryId: 'web-app',
      pipelineId: 'web-build',
      status: 'failure',
      startedAt: '2026-04-29T09:00:00.000Z',
    },
    {
      id: '3',
      repositoryId: 'web-app',
      pipelineId: 'web-build',
      status: 'success',
      startedAt: '2026-04-29T10:00:00.000Z',
    },
    {
      id: '4',
      repositoryId: 'api',
      pipelineId: 'api-build',
      status: 'queued',
      startedAt: '2026-04-30T08:00:00.000Z',
    },
    {
      id: '5',
      repositoryId: 'api',
      pipelineId: 'api-build',
      status: 'warning',
      startedAt: '2026-04-30T09:00:00.000Z',
    },
  ],
};

describe('getExecutionHistoryData', () => {
  it('returns no rows or statuses when there are no executions', () => {
    const result = getExecutionHistoryData({
      ...data,
      executions: [],
    });

    expect(result).toEqual({
      rows: [],
      statuses: [],
    });
  });

  it('groups executions by day and repository', () => {
    const result = getExecutionHistoryData(data);

    expect(result.rows).toEqual([
      {
        bucketLabel: '2026-04-29',
        repositoryName: 'Web App',
        label: '2026-04-29 · Web App',
        total: 3,
        success: 2,
        failure: 1,
        queued: 0,
        warning: 0,
      },
      {
        bucketLabel: '2026-04-30',
        repositoryName: 'API',
        label: '2026-04-30 · API',
        total: 2,
        success: 0,
        failure: 0,
        queued: 1,
        warning: 1,
      },
    ]);
  });

  it('returns known statuses first and custom statuses afterwards', () => {
    const result = getExecutionHistoryData(data);

    expect(result.statuses).toEqual(['success', 'failure', 'queued', 'warning']);
  });

  it('ignores executions for unknown repositories', () => {
    const result = getExecutionHistoryData({
      ...data,
      executions: [
        {
          id: 'unknown',
          repositoryId: 'unknown-repository',
          pipelineId: 'unknown-pipeline',
          status: 'success',
          startedAt: '2026-04-29T08:00:00.000Z',
        },
      ],
    });

    expect(result.rows).toEqual([]);
    expect(result.statuses).toEqual([]);
  });

  it('ignores executions with invalid startedAt values', () => {
    const result = getExecutionHistoryData({
      ...data,
      executions: [
        {
          id: 'invalid-date',
          repositoryId: 'web-app',
          pipelineId: 'web-build',
          status: 'success',
          startedAt: 'not-a-date',
        },
      ],
    });

    expect(result.rows).toEqual([]);
    expect(result.statuses).toEqual([]);
  });
});