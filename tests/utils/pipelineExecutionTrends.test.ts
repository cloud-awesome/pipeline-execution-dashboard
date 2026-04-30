import { describe, expect, it } from 'vitest';

import { getPipelineExecutionTrends, type DashboardData } from '../../src';

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
      id: 'web-deploy',
      repositoryId: 'web-app',
      name: 'Deploy',
      category: 'deploy',
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
      id: 'web-latest',
      repositoryId: 'web-app',
      pipelineId: 'web-build',
      status: 'failure',
      startedAt: '2026-04-29T10:00:00.000Z',
    },
    {
      id: 'web-oldest',
      repositoryId: 'web-app',
      pipelineId: 'web-build',
      status: 'success',
      startedAt: '2026-04-29T08:00:00.000Z',
    },
    {
      id: 'web-middle',
      repositoryId: 'web-app',
      pipelineId: 'web-build',
      status: 'queued',
      startedAt: '2026-04-29T09:00:00.000Z',
    },
    {
      id: 'api-latest',
      repositoryId: 'api',
      pipelineId: 'api-build',
      status: 'running',
      startedAt: '2026-04-29T11:00:00.000Z',
    },
  ],
};

describe('getPipelineExecutionTrends', () => {
  it('returns one trend per known pipeline', () => {
    const result = getPipelineExecutionTrends(data);

    expect(result).toHaveLength(3);
    expect(result.map((trend) => trend.pipeline.id)).toEqual([
      'api-build',
      'web-build',
      'web-deploy',
    ]);
  });

  it('orders executions chronologically and exposes the latest execution', () => {
    const result = getPipelineExecutionTrends(data);
    const webBuild = result.find((trend) => trend.pipeline.id === 'web-build');

    expect(webBuild?.executions.map((execution) => execution.id)).toEqual([
      'web-oldest',
      'web-middle',
      'web-latest',
    ]);
    expect(webBuild?.latestExecution?.id).toBe('web-latest');
  });

  it('keeps only the latest visible executions when a max is supplied', () => {
    const result = getPipelineExecutionTrends(data, {
      maxExecutionsPerPipeline: 2,
    });
    const webBuild = result.find((trend) => trend.pipeline.id === 'web-build');

    expect(webBuild?.executions.map((execution) => execution.id)).toEqual([
      'web-middle',
      'web-latest',
    ]);
    expect(webBuild?.totalExecutions).toBe(3);
  });

  it('includes pipelines with no executions', () => {
    const result = getPipelineExecutionTrends(data);
    const webDeploy = result.find((trend) => trend.pipeline.id === 'web-deploy');

    expect(webDeploy?.executions).toEqual([]);
    expect(webDeploy?.latestExecution).toBeUndefined();
    expect(webDeploy?.totalExecutions).toBe(0);
  });

  it('ignores pipelines with unknown repositories', () => {
    const result = getPipelineExecutionTrends({
      ...data,
      pipelines: [
        {
          id: 'unknown',
          repositoryId: 'unknown-repository',
          name: 'Unknown',
        },
      ],
    });

    expect(result).toEqual([]);
  });
});
