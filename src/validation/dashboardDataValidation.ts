import { z } from 'zod';

import type { DashboardData } from '../types/dashboard';

const optionalUrlSchema = z.string().url().optional();

const repositorySchema = z.object({
  id: z.string().min(1, 'Repository id is required.'),
  name: z.string().min(1, 'Repository name is required.'),
  displayName: z.string().min(1, 'Repository displayName cannot be empty.').optional(),
  url: optionalUrlSchema,
});

const pipelineSchema = z.object({
  id: z.string().min(1, 'Pipeline id is required.'),
  repositoryId: z.string().min(1, 'Pipeline repositoryId is required.'),
  name: z.string().min(1, 'Pipeline name is required.'),
  category: z.string({ error: 'Pipeline category is required.' }).min(1, 'Pipeline category is required.'),
  url: optionalUrlSchema,
});

const executionSchema = z.object({
  id: z.string().min(1, 'Execution id is required.'),
  repositoryId: z.string().min(1, 'Execution repositoryId is required.'),
  pipelineId: z.string().min(1, 'Execution pipelineId is required.'),
  status: z.string().min(1, 'Execution status is required.'),
  startedAt: z.string().datetime({ message: 'Execution startedAt must be an ISO datetime.' }),
  completedAt: z
      .string()
      .datetime({ message: 'Execution completedAt must be an ISO datetime.' })
      .optional(),
  durationMs: z.number().int().nonnegative('Execution durationMs cannot be negative.').optional(),
  branch: z.string().min(1, 'Execution branch cannot be empty.').optional(),
  commitSha: z.string().min(1, 'Execution commitSha cannot be empty.').optional(),
  url: optionalUrlSchema,
});

const dashboardDataSchemaBase = z.object({
  generatedAt: z.string().datetime({ message: 'Dashboard generatedAt must be an ISO datetime.' }),
  repositories: z.array(repositorySchema),
  pipelines: z.array(pipelineSchema),
  executions: z.array(executionSchema),
});

const dashboardDataSchemaInternal = dashboardDataSchemaBase.superRefine((data, context) => {
  const repositoryIds = new Set(data.repositories.map((repository) => repository.id));
  const pipelineIds = new Set(data.pipelines.map((pipeline) => pipeline.id));

  for (const pipeline of data.pipelines) {
    if (!repositoryIds.has(pipeline.repositoryId)) {
      context.addIssue({
        code: 'custom',
        path: ['pipelines', data.pipelines.indexOf(pipeline), 'repositoryId'],
        message: `Pipeline "${pipeline.id}" references unknown repository "${pipeline.repositoryId}".`,
      });
    }
  }

  for (const execution of data.executions) {
    if (!repositoryIds.has(execution.repositoryId)) {
      context.addIssue({
        code: 'custom',
        path: ['executions', data.executions.indexOf(execution), 'repositoryId'],
        message: `Execution "${execution.id}" references unknown repository "${execution.repositoryId}".`,
      });
    }

    if (!pipelineIds.has(execution.pipelineId)) {
      context.addIssue({
        code: 'custom',
        path: ['executions', data.executions.indexOf(execution), 'pipelineId'],
        message: `Execution "${execution.id}" references unknown pipeline "${execution.pipelineId}".`,
      });
    }

    const pipeline = data.pipelines.find((item) => item.id === execution.pipelineId);

    if (pipeline && pipeline.repositoryId !== execution.repositoryId) {
      context.addIssue({
        code: 'custom',
        path: ['executions', data.executions.indexOf(execution), 'repositoryId'],
        message: `Execution "${execution.id}" repositoryId does not match its pipeline repositoryId.`,
      });
    }

    if (execution.completedAt) {
      const startedAt = Date.parse(execution.startedAt);
      const completedAt = Date.parse(execution.completedAt);

      if (Number.isFinite(startedAt) && Number.isFinite(completedAt) && completedAt < startedAt) {
        context.addIssue({
          code: 'custom',
          path: ['executions', data.executions.indexOf(execution), 'completedAt'],
          message: `Execution "${execution.id}" completedAt cannot be before startedAt.`,
        });
      }
    }
  }
});

export const dashboardDataSchema = dashboardDataSchemaInternal as unknown as z.ZodType<DashboardData>;

export interface DashboardDataValidationSuccess {
  success: true;
  data: DashboardData;
  errors: [];
}

export interface DashboardDataValidationFailure {
  success: false;
  data: undefined;
  errors: string[];
}

export type DashboardDataValidationResult =
    | DashboardDataValidationSuccess
    | DashboardDataValidationFailure;

export function validateDashboardData(data: unknown): DashboardDataValidationResult {
  const result = dashboardDataSchema.safeParse(data);

  if (result.success) {
    return {
      success: true,
      data: result.data,
      errors: [],
    };
  }

  return {
    success: false,
    data: undefined,
    errors: result.error.issues.map((issue) => {
      const path = issue.path.length > 0 ? `${issue.path.join('.')}: ` : '';
      return `${path}${issue.message}`;
    }),
  };
}

export function assertDashboardData(data: unknown): asserts data is DashboardData {
  const result = validateDashboardData(data);

  if (!result.success) {
    throw new Error(`Invalid dashboard data:\n${result.errors.join('\n')}`);
  }
}
