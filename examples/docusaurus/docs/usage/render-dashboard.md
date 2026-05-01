---
sidebar_position: 1
---

# Render The Dashboard

The dashboard is rendered by importing the package component and passing a `DashboardData` object.

```tsx
import { PipelineDashboard } from 'pipeline-execution-dashboard';
import 'pipeline-execution-dashboard/styles.css';

export function BuildMonitorPage({ data }) {
  return <PipelineDashboard data={ data } />;
}
```

The React component remains platform-neutral. A Docusaurus site, API, static JSON file, or any other host can provide the data.
