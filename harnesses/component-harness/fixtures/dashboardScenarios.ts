import type { DashboardData } from '../../../src';

export interface DashboardHarnessScenario {
  id: string;
  name: string;
  description: string;
  data: DashboardData;
}

const baselineData: DashboardData = {
  generatedAt: '2026-04-29T12:00:00.000Z',
  repositories: [
    {
      id: 'web-app',
      name: 'web-app',
      displayName: 'Web Application',
      url: 'https://example.com/repositories/web-app',
    },
    {
      id: 'api-service',
      name: 'api-service',
      displayName: 'API Service',
      url: 'https://example.com/repositories/api-service',
    },
    {
      id: 'worker-service',
      name: 'worker-service',
      displayName: 'Worker Service',
    },
  ],
  pipelines: [
    {
      id: 'web-app-build',
      repositoryId: 'web-app',
      name: 'Build',
      category: 'build',
      url: 'https://example.com/repositories/web-app/pipelines/build',
    },
    {
      id: 'web-app-release',
      repositoryId: 'web-app',
      name: 'Release',
      category: 'release',
      url: 'https://example.com/repositories/web-app/pipelines/release',
    },
    {
      id: 'api-service-build',
      repositoryId: 'api-service',
      name: 'Build',
      category: 'build',
      url: 'https://example.com/repositories/api-service/pipelines/build',
    },
    {
      id: 'api-service-test',
      repositoryId: 'api-service',
      name: 'Integration Tests',
      category: 'test',
    },
    {
      id: 'worker-service-deploy',
      repositoryId: 'worker-service',
      name: 'Deploy',
      category: 'deploy',
    },
    {
      id: 'worker-service-quality',
      repositoryId: 'worker-service',
      name: 'Quality Checks',
      category: 'quality',
    },
  ],
  executions: [
    {
      id: 'execution-001',
      repositoryId: 'web-app',
      pipelineId: 'web-app-build',
      status: 'success',
      startedAt: '2026-04-29T08:00:00.000Z',
      completedAt: '2026-04-29T08:04:30.000Z',
      durationMs: 270000,
      branch: 'main',
      commitSha: 'abc1234',
      url: 'https://example.com/executions/execution-001',
    },
    {
      id: 'execution-002',
      repositoryId: 'web-app',
      pipelineId: 'web-app-release',
      status: 'running',
      startedAt: '2026-04-29T08:10:00.000Z',
      branch: 'main',
      commitSha: 'abc1234',
      url: 'https://example.com/executions/execution-002',
    },
    {
      id: 'execution-003',
      repositoryId: 'api-service',
      pipelineId: 'api-service-build',
      status: 'failure',
      startedAt: '2026-04-29T08:20:00.000Z',
      completedAt: '2026-04-29T08:25:15.000Z',
      durationMs: 315000,
      branch: 'main',
      commitSha: 'def5678',
      url: 'https://example.com/executions/execution-003',
    },
    {
      id: 'execution-004',
      repositoryId: 'api-service',
      pipelineId: 'api-service-test',
      status: 'queued',
      startedAt: '2026-04-29T08:30:00.000Z',
      branch: 'feature/cache-improvements',
      commitSha: 'fed9876',
    },
    {
      id: 'execution-005',
      repositoryId: 'worker-service',
      pipelineId: 'worker-service-deploy',
      status: 'cancelled',
      startedAt: '2026-04-29T07:45:00.000Z',
      completedAt: '2026-04-29T07:47:00.000Z',
      durationMs: 120000,
      branch: 'main',
    },
    {
      id: 'execution-006',
      repositoryId: 'worker-service',
      pipelineId: 'worker-service-quality',
      status: 'warning',
      startedAt: '2026-04-29T07:30:00.000Z',
      completedAt: '2026-04-29T07:33:45.000Z',
      durationMs: 225000,
      branch: 'main',
    },
    {
      id: 'execution-005',
      repositoryId: 'worker-service',
      pipelineId: 'worker-service-deploy',
      status: 'success',
      startedAt: '2026-04-30T07:45:00.000Z',
      completedAt: '2026-04-30T07:47:00.000Z',
      durationMs: 120000,
      branch: 'main',
    },
    {
      id: 'execution-006',
      repositoryId: 'worker-service',
      pipelineId: 'worker-service-quality',
      status: 'success',
      startedAt: '2026-04-30T07:30:00.000Z',
      completedAt: '2026-04-30T07:33:45.000Z',
      durationMs: 225000,
      branch: 'main',
    },
  ],
};

const emptyData: DashboardData = {
  generatedAt: '2026-04-29T12:00:00.000Z',
  repositories: [],
  pipelines: [],
  executions: [],
};

const minimalData: DashboardData = {
  generatedAt: '2026-04-29T13:30:00.000Z',
  repositories: [
    {
      id: 'minimal-service',
      name: 'minimal-service',
    },
  ],
  pipelines: [
    {
      id: 'minimal-service-build',
      repositoryId: 'minimal-service',
      name: 'Build',
      category: 'build',
    },
    {
      id: 'minimal-service-deploy',
      repositoryId: 'minimal-service',
      name: 'Deploy',
      category: 'deploy',
    },
    {
      id: 'minimal-service-maintenance',
      repositoryId: 'minimal-service',
      name: 'Maintenance',
      category: 'other',
    },
  ],
  executions: [
    {
      id: 'minimal-execution-001',
      repositoryId: 'minimal-service',
      pipelineId: 'minimal-service-build',
      status: 'success',
      startedAt: '2026-04-29T11:00:00.000Z',
    },
    {
      id: 'minimal-execution-002',
      repositoryId: 'minimal-service',
      pipelineId: 'minimal-service-deploy',
      status: 'queued',
      startedAt: '2026-04-29T11:10:00.000Z',
    },
  ],
};

const activeIncidentData: DashboardData = {
  generatedAt: '2026-04-29T13:00:00.000Z',
  repositories: [
    {
      id: 'payments-api',
      name: 'payments-api',
      displayName: 'Payments API',
      url: 'https://example.com/repositories/payments-api',
    },
    {
      id: 'billing-worker',
      name: 'billing-worker',
      displayName: 'Billing Worker',
      url: 'https://example.com/repositories/billing-worker',
    },
    {
      id: 'customer-portal',
      name: 'customer-portal',
      displayName: 'Customer Portal',
      url: 'https://example.com/repositories/customer-portal',
    },
  ],
  pipelines: [
    {
      id: 'payments-api-build',
      repositoryId: 'payments-api',
      name: 'Build',
      category: 'build',
    },
    {
      id: 'payments-api-release',
      repositoryId: 'payments-api',
      name: 'Release',
      category: 'release',
    },
    {
      id: 'billing-worker-build',
      repositoryId: 'billing-worker',
      name: 'Build',
      category: 'build',
    },
    {
      id: 'billing-worker-deploy',
      repositoryId: 'billing-worker',
      name: 'Deploy',
      category: 'deploy',
    },
    {
      id: 'customer-portal-tests',
      repositoryId: 'customer-portal',
      name: 'Regression Tests',
      category: 'test',
    },
  ],
  executions: [
    {
      id: 'incident-execution-001',
      repositoryId: 'payments-api',
      pipelineId: 'payments-api-build',
      status: 'failure',
      startedAt: '2026-04-29T10:00:00.000Z',
      completedAt: '2026-04-29T10:04:20.000Z',
      durationMs: 260000,
      branch: 'main',
      url: 'https://example.com/executions/incident-execution-001',
    },
    {
      id: 'incident-execution-002',
      repositoryId: 'payments-api',
      pipelineId: 'payments-api-build',
      status: 'failure',
      startedAt: '2026-04-29T10:20:00.000Z',
      completedAt: '2026-04-29T10:23:10.000Z',
      durationMs: 190000,
      branch: 'hotfix/payment-timeout',
      url: 'https://example.com/executions/incident-execution-002',
    },
    {
      id: 'incident-execution-003',
      repositoryId: 'payments-api',
      pipelineId: 'payments-api-release',
      status: 'queued',
      startedAt: '2026-04-29T10:25:00.000Z',
      branch: 'hotfix/payment-timeout',
    },
    {
      id: 'incident-execution-004',
      repositoryId: 'billing-worker',
      pipelineId: 'billing-worker-build',
      status: 'success',
      startedAt: '2026-04-29T09:50:00.000Z',
      completedAt: '2026-04-29T09:54:00.000Z',
      durationMs: 240000,
      branch: 'main',
    },
    {
      id: 'incident-execution-005',
      repositoryId: 'billing-worker',
      pipelineId: 'billing-worker-deploy',
      status: 'running',
      startedAt: '2026-04-29T10:15:00.000Z',
      branch: 'main',
    },
    {
      id: 'incident-execution-006',
      repositoryId: 'customer-portal',
      pipelineId: 'customer-portal-tests',
      status: 'cancelled',
      startedAt: '2026-04-29T10:05:00.000Z',
      completedAt: '2026-04-29T10:06:40.000Z',
      durationMs: 100000,
      branch: 'release/april',
    },
  ],
};

const customValuesData: DashboardData = {
  generatedAt: '2026-04-29T14:00:00.000Z',
  repositories: [
    {
      id: 'identity-platform',
      name: 'identity-platform',
      displayName: 'Identity Platform',
    },
    {
      id: 'audit-service',
      name: 'audit-service',
      displayName: 'Audit Service',
    },
  ],
  pipelines: [
    {
      id: 'identity-platform-security',
      repositoryId: 'identity-platform',
      name: 'Security Scan',
      category: 'security',
    },
    {
      id: 'identity-platform-compliance',
      repositoryId: 'identity-platform',
      name: 'Compliance Evidence',
      category: 'governance',
    },
    {
      id: 'audit-service-quality',
      repositoryId: 'audit-service',
      name: 'Quality Gate',
      category: 'quality',
    },
  ],
  executions: [
    {
      id: 'custom-execution-001',
      repositoryId: 'identity-platform',
      pipelineId: 'identity-platform-security',
      status: 'blocked',
      startedAt: '2026-04-29T11:15:00.000Z',
      completedAt: '2026-04-29T11:16:00.000Z',
      durationMs: 60000,
      branch: 'main',
    },
    {
      id: 'custom-execution-002',
      repositoryId: 'identity-platform',
      pipelineId: 'identity-platform-compliance',
      status: 'needs-review',
      startedAt: '2026-04-29T11:20:00.000Z',
      completedAt: '2026-04-29T11:27:30.000Z',
      durationMs: 450000,
      branch: 'main',
    },
    {
      id: 'custom-execution-003',
      repositoryId: 'audit-service',
      pipelineId: 'audit-service-quality',
      status: 'warning',
      startedAt: '2026-04-29T11:30:00.000Z',
      completedAt: '2026-04-29T11:34:15.000Z',
      durationMs: 255000,
      branch: 'feature/audit-retention',
    },
  ],
};

export const dashboardHarnessScenarios: DashboardHarnessScenario[] = [
  {
    id: 'baseline',
    name: 'Baseline',
    description: 'Mixed repository data with links, known statuses, and one custom status.',
    data: baselineData,
  },
  {
    id: 'empty',
    name: 'Empty',
    description: 'No repositories, pipelines, or executions.',
    data: emptyData,
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Valid data with optional display, link, completion, and duration fields omitted.',
    data: minimalData,
  },
  {
    id: 'active-incident',
    name: 'Active incident',
    description: 'Failures, queued work, cancellation, and running deployments.',
    data: activeIncidentData,
  },
  {
    id: 'custom-values',
    name: 'Custom values',
    description: 'Unknown categories and statuses for provider-neutral extension checks.',
    data: customValuesData,
  },
];
