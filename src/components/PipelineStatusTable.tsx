import type { DashboardData } from '../types/dashboard';
import { formatStatusLabel } from '../utils/statusSummary';
import { formatDateTime, formatDuration } from '../utils/formatting';
import { getPipelineStatusRows, getRepositoryDisplayName } from '../utils/pipelineStatusRows';

export interface PipelineStatusTableProps {
  data: DashboardData;
}

export function PipelineStatusTable({ data }: PipelineStatusTableProps) {
  const rows = getPipelineStatusRows(data);

  return (
      <section className="ped-table-section" aria-labelledby="ped-table-heading">
        <h3 id="ped-table-heading" className="ped-table-section__heading">
          Latest pipeline executions
        </h3>

        {rows.length === 0 ? (
            <p className="ped-table-section__empty">No pipelines to display.</p>
        ) : (
            <div className="ped-table-wrapper">
              <table className="ped-table">
                <caption className="ped-table__caption">
                  Latest execution status for each pipeline
                </caption>
                <thead>
                <tr>
                  <th scope="col">Repository</th>
                  <th scope="col">Pipeline</th>
                  <th scope="col">Category</th>
                  <th scope="col">Last status</th>
                  <th scope="col">Started</th>
                  <th scope="col">Completed</th>
                  <th scope="col">Duration</th>
                </tr>
                </thead>
                <tbody>
                {rows.map(({ repository, pipeline, latestExecution }) => {
                  const repositoryName = getRepositoryDisplayName(repository);
                  const category = pipeline.category ?? 'other';
                  const status = latestExecution ? formatStatusLabel(latestExecution.status) : 'No executions';

                  return (
                      <tr key={pipeline.id}>
                        <td>
                          {repository.url ? (
                              <a href={repository.url} className="ped-table__link">
                                {repositoryName}
                              </a>
                          ) : (
                              repositoryName
                          )}
                        </td>
                        <td>
                          {pipeline.url ? (
                              <a href={pipeline.url} className="ped-table__link">
                                {pipeline.name}
                              </a>
                          ) : (
                              pipeline.name
                          )}
                        </td>
                        <td>{formatStatusLabel(category)}</td>
                        <td>
                          {latestExecution?.url ? (
                              <a href={latestExecution.url} className="ped-table__link">
                                {status}
                              </a>
                          ) : (
                              status
                          )}
                        </td>
                        <td>{formatDateTime(latestExecution?.startedAt)}</td>
                        <td>{formatDateTime(latestExecution?.completedAt)}</td>
                        <td>{formatDuration(latestExecution?.durationMs)}</td>
                      </tr>
                  );
                })}
                </tbody>
              </table>
            </div>
        )}
      </section>
  );
}