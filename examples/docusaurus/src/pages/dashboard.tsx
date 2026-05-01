import Layout from '@theme/Layout';

import {
  dashboardDataFixture,
  PipelineDashboard,
  type DashboardData,
} from 'pipeline-execution-dashboard';
import 'pipeline-execution-dashboard/styles.css';

const exampleData: DashboardData = {
  ...dashboardDataFixture,
  generatedAt: '2026-05-01T16:45:00.000Z',
};

export default function DashboardPage() {
  return (
    <Layout
      title="Pipeline Dashboard"
      description="Docusaurus compatibility page for pipeline-execution-dashboard"
    >
      <main className="dashboard-example">
        <div className="container">
          <header className="dashboard-example__header">
            <h1 className="dashboard-example__title">Pipeline dashboard</h1>
            <p className="dashboard-example__intro">
              This page renders the packaged dashboard inside a Docusaurus content area and applies
              a small host-level CSS variable override.
            </p>
          </header>

          <div className="dashboard-example__panel">
            <PipelineDashboard data={exampleData} />
          </div>
        </div>
      </main>
    </Layout>
  );
}
