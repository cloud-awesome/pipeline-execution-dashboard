import { describe, expect, it } from 'vitest';

import {
  formatStatusLabel,
  getExecutionStatusSummary,
  type DashboardExecution,
} from '../../src';

function createExecution(id: string, status: string): DashboardExecution {
  return {
    id,
    repositoryId: 'repository',
    pipelineId: 'pipeline',
    status,
    startedAt: '2026-04-29T12:00:00.000Z',
  };
}

describe('getExecutionStatusSummary', () => {
  it('returns an empty summary when there are no executions', () => {
    expect(getExecutionStatusSummary([])).toEqual([]);
  });

  it('counts executions by status', () => {
    const executions = [
      createExecution('1', 'success'),
      createExecution('2', 'success'),
      createExecution('3', 'failure'),
      createExecution('4', 'running'),
    ];

    expect(getExecutionStatusSummary(executions)).toEqual([
      { status: 'success', count: 2 },
      { status: 'failure', count: 1 },
      { status: 'running', count: 1 },
    ]);
  });

  it('orders known statuses consistently', () => {
    const executions = [
      createExecution('1', 'queued'),
      createExecution('2', 'neutral'),
      createExecution('3', 'cancelled'),
      createExecution('4', 'success'),
      createExecution('5', 'running'),
      createExecution('6', 'failure'),
    ];

    expect(getExecutionStatusSummary(executions).map((item) => item.status)).toEqual([
      'success',
      'failure',
      'cancelled',
      'running',
      'queued',
      'neutral',
    ]);
  });

  it('supports custom statuses after known statuses', () => {
    const executions = [
      createExecution('1', 'warning'),
      createExecution('2', 'success'),
      createExecution('3', 'unstable'),
      createExecution('4', 'warning'),
    ];

    expect(getExecutionStatusSummary(executions)).toEqual([
      { status: 'success', count: 1 },
      { status: 'unstable', count: 1 },
      { status: 'warning', count: 2 },
    ]);
  });
});

describe('formatStatusLabel', () => {
  it('formats simple statuses', () => {
    expect(formatStatusLabel('success')).toBe('Success');
  });

  it('formats compound statuses', () => {
    expect(formatStatusLabel('partially_successful')).toBe('Partially Successful');
    expect(formatStatusLabel('needs-review')).toBe('Needs Review');
  });
});