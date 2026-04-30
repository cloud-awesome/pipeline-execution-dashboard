import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import type { DashboardData } from '../types/dashboard';
import { getExecutionHistoryData } from '../utils/executionHistory';
import { formatStatusLabel } from '../utils/statusSummary';

export interface ExecutionHistoryChartProps {
  data: DashboardData;
}

const statusColours: Record<string, string> = {
  success: 'var(--ped-color-status-success)',
  failure: 'var(--ped-color-status-failure)',
  cancelled: 'var(--ped-color-status-cancelled)',
  running: 'var(--ped-color-status-running)',
  queued: 'var(--ped-color-status-queued)',
  neutral: 'var(--ped-color-status-neutral)',
};

const fallbackColours = [
  'var(--ped-color-chart-1)',
  'var(--ped-color-chart-2)',
  'var(--ped-color-chart-3)',
  'var(--ped-color-chart-4)',
];

export function ExecutionHistoryChart({ data }: ExecutionHistoryChartProps) {
  const chartData = getExecutionHistoryData(data);

  if (chartData.rows.length === 0) {
    return (
        <section className="ped-chart-section" aria-labelledby="ped-chart-heading">
          <h3 id="ped-chart-heading" className="ped-chart-section__heading">
            Execution history
          </h3>
          <p className="ped-chart-section__empty">No execution history to display.</p>
        </section>
    );
  }

  return (
      <section className="ped-chart-section" aria-labelledby="ped-chart-heading">
        <h3 id="ped-chart-heading" className="ped-chart-section__heading">
          Execution history
        </h3>

        <div
            className="ped-chart"
            role="img"
            aria-label="Stacked bar chart showing execution counts by repository, date, and status"
        >
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={chartData.rows} margin={{ top: 8, right: 16, bottom: 48, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" angle={-30} textAnchor="end" interval={0} height={80} />
              <YAxis allowDecimals={false} />
              <Tooltip />
              <Legend />
              {chartData.statuses.map((status, index) => (
                  <Bar
                      key={status}
                      dataKey={status}
                      name={formatStatusLabel(status)}
                      stackId="executions"
                      fill={getStatusColour(status, index)}
                  />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>
  );
}

function getStatusColour(status: string, index: number): string {
  return statusColours[status] ?? fallbackColours[index % fallbackColours.length] ?? '#6b7280';
}