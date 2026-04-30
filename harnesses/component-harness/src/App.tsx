import { useMemo, useState } from 'react';

import {
  ExecutionHistoryChart,
  PipelineDashboard,
  PipelineExecutionTrends,
  PipelineStatusTable,
  SummaryCards,
  validateDashboardData,
} from '../../../src';
import { dashboardHarnessScenarios } from '../fixtures/dashboardScenarios';
import type { DashboardHarnessScenario } from '../fixtures/dashboardScenarios';

type HarnessView = 'dashboard' | 'summary' | 'trends' | 'history-chart' | 'table';

interface HarnessViewOption {
  id: HarnessView;
  label: string;
}

const harnessViews: HarnessViewOption[] = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'summary', label: 'Summary cards' },
  { id: 'trends', label: 'Pipeline trends' },
  { id: 'history-chart', label: 'History chart' },
  { id: 'table', label: 'Status table' },
];

export function App() {
  const [selectedScenarioId, setSelectedScenarioId] = useState(dashboardHarnessScenarios[0]?.id);
  const [selectedView, setSelectedView] = useState<HarnessView>('dashboard');
  const selectedScenario = useMemo(
    () =>
      dashboardHarnessScenarios.find((scenario) => scenario.id === selectedScenarioId) ??
      dashboardHarnessScenarios[0],
    [selectedScenarioId],
  );

  if (!selectedScenario) {
    return <p>No harness scenarios are configured.</p>;
  }

  const validationResult = validateDashboardData(selectedScenario.data);

  return (
    <main className="harness-shell">
      <aside className="harness-sidebar" aria-label="Harness controls">
        <div className="harness-sidebar__header">
          <p className="harness-eyebrow">Component harness</p>
          <h1>Pipeline dashboard</h1>
        </div>

        <label className="harness-field">
          <span>Fixture scenario</span>
          <select
            value={selectedScenario.id}
            onChange={(event) => setSelectedScenarioId(event.target.value)}
          >
            {dashboardHarnessScenarios.map((scenario) => (
              <option key={scenario.id} value={scenario.id}>
                {scenario.name}
              </option>
            ))}
          </select>
        </label>

        <div className="harness-view-list" aria-label="Component view">
          {harnessViews.map((view) => (
            <button
              key={view.id}
              type="button"
              className={view.id === selectedView ? 'is-selected' : undefined}
              aria-pressed={view.id === selectedView}
              onClick={() => setSelectedView(view.id)}
            >
              {view.label}
            </button>
          ))}
        </div>

        <ScenarioSummary scenario={selectedScenario} isValid={validationResult.success} />
      </aside>

      <section className="harness-stage" aria-label="Selected component preview">
        <div className="harness-stage__header">
          <div>
            <p className="harness-eyebrow">{selectedScenario.name}</p>
            <h2>{getViewLabel(selectedView)}</h2>
          </div>
          <p>{selectedScenario.description}</p>
        </div>

        {!validationResult.success ? (
          <div className="harness-validation" role="alert">
            <h3>Fixture validation failed</h3>
            <ul>
              {validationResult.errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        ) : (
          <ComponentPreview selectedView={selectedView} scenario={selectedScenario} />
        )}
      </section>
    </main>
  );
}

function ComponentPreview({
  selectedView,
  scenario,
}: {
  selectedView: HarnessView;
  scenario: DashboardHarnessScenario;
}) {
  if (selectedView === 'summary') {
    return (
      <div className="harness-component-frame">
        <SummaryCards executions={scenario.data.executions} />
      </div>
    );
  }

  if (selectedView === 'trends') {
    return (
      <div className="harness-component-frame">
        <PipelineExecutionTrends data={scenario.data} />
      </div>
    );
  }

  if (selectedView === 'history-chart') {
    return (
      <div className="harness-component-frame">
        <ExecutionHistoryChart data={scenario.data} />
      </div>
    );
  }

  if (selectedView === 'table') {
    return (
      <div className="harness-component-frame">
        <PipelineStatusTable data={scenario.data} />
      </div>
    );
  }

  return <PipelineDashboard data={scenario.data} />;
}

function ScenarioSummary({
  scenario,
  isValid,
}: {
  scenario: DashboardHarnessScenario;
  isValid: boolean;
}) {
  return (
    <dl className="harness-summary">
      <div>
        <dt>Validation</dt>
        <dd>{isValid ? 'Valid' : 'Invalid'}</dd>
      </div>
      <div>
        <dt>Repositories</dt>
        <dd>{scenario.data.repositories.length}</dd>
      </div>
      <div>
        <dt>Pipelines</dt>
        <dd>{scenario.data.pipelines.length}</dd>
      </div>
      <div>
        <dt>Executions</dt>
        <dd>{scenario.data.executions.length}</dd>
      </div>
    </dl>
  );
}

function getViewLabel(view: HarnessView): string {
  return harnessViews.find((item) => item.id === view)?.label ?? 'Dashboard';
}
