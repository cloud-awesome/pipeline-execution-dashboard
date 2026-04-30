import type {
  DashboardData,
  DashboardExecution,
  //DashboardRepository,
} from '../types/dashboard';
import { getRepositoryDisplayName } from './pipelineStatusRows';

export interface ExecutionHistoryBucket {
  bucketStart: string;
  bucketLabel: string;
  repositoryId: string;
  repositoryName: string;
  statuses: Record<string, number>;
  total: number;
}

export interface ExecutionHistoryChartRow {
  bucketLabel: string;
  repositoryName: string;
  label: string;
  total: number;
  [status: string]: string | number;
}

export interface ExecutionHistoryData {
  rows: ExecutionHistoryChartRow[];
  statuses: string[];
}

export type ExecutionHistoryBucketSize = 'day';

export function getExecutionHistoryData(
    data: DashboardData,
    bucketSize: ExecutionHistoryBucketSize = 'day',
): ExecutionHistoryData {
  const repositoriesById = new Map(
      data.repositories.map((repository) => [repository.id, repository]),
  );

  const buckets = new Map<string, ExecutionHistoryBucket>();
  const statuses = new Set<string>();

  for (const execution of data.executions) {
    const repository = repositoriesById.get(execution.repositoryId);

    if (!repository) {
      continue;
    }

    const bucketStart = getBucketStart(execution.startedAt, bucketSize);

    if (!bucketStart) {
      continue;
    }

    statuses.add(execution.status);

    const bucketKey = `${bucketStart}|${execution.repositoryId}`;
    const existingBucket = buckets.get(bucketKey);

    if (existingBucket) {
      existingBucket.statuses[execution.status] =
          (existingBucket.statuses[execution.status] ?? 0) + 1;
      existingBucket.total += 1;
      continue;
    }

    buckets.set(bucketKey, {
      bucketStart,
      bucketLabel: formatBucketLabel(bucketStart),
      repositoryId: execution.repositoryId,
      repositoryName: getRepositoryDisplayName(repository),
      statuses: {
        [execution.status]: 1,
      },
      total: 1,
    });
  }

  const orderedStatuses = orderStatuses(Array.from(statuses));

  const rows = Array.from(buckets.values())
      .sort((left, right) => {
        const dateComparison = left.bucketStart.localeCompare(right.bucketStart);

        if (dateComparison !== 0) {
          return dateComparison;
        }

        return left.repositoryName.localeCompare(right.repositoryName);
      })
      .map((bucket) => toChartRow(bucket, orderedStatuses));

  return {
    rows,
    statuses: orderedStatuses,
  };
}

function toChartRow(
    bucket: ExecutionHistoryBucket,
    statuses: string[],
): ExecutionHistoryChartRow {
  const row: ExecutionHistoryChartRow = {
    bucketLabel: bucket.bucketLabel,
    repositoryName: bucket.repositoryName,
    label: `${bucket.bucketLabel} · ${bucket.repositoryName}`,
    total: bucket.total,
  };

  for (const status of statuses) {
    row[status] = bucket.statuses[status] ?? 0;
  }

  return row;
}

function getBucketStart(
    startedAt: DashboardExecution['startedAt'],
    bucketSize: ExecutionHistoryBucketSize,
): string | undefined {
  const date = new Date(startedAt);

  if (Number.isNaN(date.getTime())) {
    return undefined;
  }

  if (bucketSize === 'day') {
    return date.toISOString().slice(0, 10);
  }

  return undefined;
}

function formatBucketLabel(bucketStart: string): string {
  return bucketStart;
}

function orderStatuses(statuses: string[]): string[] {
  const preferredOrder = ['success', 'failure', 'cancelled', 'running', 'queued', 'neutral'];

  return [...statuses].sort((left, right) => {
    const leftIndex = preferredOrder.indexOf(left);
    const rightIndex = preferredOrder.indexOf(right);

    if (leftIndex !== -1 && rightIndex !== -1) {
      return leftIndex - rightIndex;
    }

    if (leftIndex !== -1) {
      return -1;
    }

    if (rightIndex !== -1) {
      return 1;
    }

    return left.localeCompare(right);
  });
}