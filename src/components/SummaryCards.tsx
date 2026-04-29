import type { DashboardExecution } from '../types/dashboard';
import { formatStatusLabel, getExecutionStatusSummary } from '../utils/statusSummary';

export interface SummaryCardsProps {
  executions: DashboardExecution[];
}

export function SummaryCards({ executions }: SummaryCardsProps) {
  const summary = getExecutionStatusSummary(executions);

  if (summary.length === 0) {
    return (
        <section className="ped-summary" aria-labelledby="ped-summary-heading">
          <h3 id="ped-summary-heading" className="ped-summary__heading">
            Execution summary
          </h3>
          <p className="ped-summary__empty">No executions to summarise.</p>
        </section>
    );
  }

  return (
      <section className="ped-summary" aria-labelledby="ped-summary-heading">
        <h3 id="ped-summary-heading" className="ped-summary__heading">
          Execution summary
        </h3>

        <ul className="ped-summary__list" aria-label="Execution counts by status">
          {summary.map((item) => {
            const label = formatStatusLabel(item.status);

            return (
                <li
                    key={item.status}
                    className="ped-summary__card"
                    data-status={item.status}
                    aria-label={`${label}: ${item.count} execution${item.count === 1 ? '' : 's'}`}
                >
                  <span className="ped-summary__status">{label}</span>
                  <span className="ped-summary__count">{item.count}</span>
                </li>
            );
          })}
        </ul>
      </section>
  );
}