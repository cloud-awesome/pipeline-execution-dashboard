import { describe, expect, it } from 'vitest';

import { formatDateTime, formatDuration } from '../../src';

describe('formatDateTime', () => {
  it('returns a dash for missing dates', () => {
    expect(formatDateTime()).toBe('—');
  });

  it('returns the original value for invalid dates', () => {
    expect(formatDateTime('not-a-date')).toBe('not-a-date');
  });

  it('formats valid dates', () => {
    expect(formatDateTime('2026-04-29T12:00:00.000Z')).not.toBe('2026-04-29T12:00:00.000Z');
  });
});

describe('formatDuration', () => {
  it('returns a dash for missing durations', () => {
    expect(formatDuration()).toBe('—');
  });

  it('formats milliseconds', () => {
    expect(formatDuration(500)).toBe('500ms');
  });

  it('formats seconds', () => {
    expect(formatDuration(5000)).toBe('5s');
  });

  it('formats minutes and seconds', () => {
    expect(formatDuration(125000)).toBe('2m 5s');
  });

  it('formats hours minutes and seconds', () => {
    expect(formatDuration(3725000)).toBe('1h 2m 5s');
  });
});