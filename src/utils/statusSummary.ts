import type { DashboardExecution } from '../types/dashboard';

export interface StatusSummaryItem {
  status: string;
  count: number;
}

const preferredStatusOrder = ['success', 'failure', 'cancelled', 'running', 'queued', 'neutral'];

export function getExecutionStatusSummary(
    executions: DashboardExecution[],
): StatusSummaryItem[] {
  const counts = new Map<string, number>();

  for (const execution of executions) {
    counts.set(execution.status, (counts.get(execution.status) ?? 0) + 1);
  }

  return Array.from(counts.entries())
      .map(([status, count]) => ({ status, count }))
      .sort((left, right) => compareStatuses(left.status, right.status));
}

function compareStatuses(left: string, right: string): number {
  const leftIndex = preferredStatusOrder.indexOf(left);
  const rightIndex = preferredStatusOrder.indexOf(right);

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
}

export function formatStatusLabel(status: string): string {
  return status
      .split(/[-_\s]+/)
      .filter(Boolean)
      .map((part) => `${part.charAt(0).toUpperCase()}${part.slice(1)}`)
      .join(' ');
}