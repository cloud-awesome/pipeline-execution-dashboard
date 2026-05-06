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
            <PipelineDashboard data={exampleData2} />
          </div>
        </div>
      </main>
    </Layout>
  );
}

const exampleData2: DashboardData =
    {
      "generatedAt": "2026-05-05T20:43:17.1239949+00:00",
      "repositories": [
        {
          "id": "cloud-awesome/pipeline-execution-dashboard",
          "name": "pipeline-execution-dashboard",
          "displayName": "pipeline-execution-dashboard",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard"
        },
        {
          "id": "cloud-awesome/markdown-maker",
          "name": "markdown-maker",
          "displayName": "markdown-maker",
          "url": "https://github.com/cloud-awesome/markdown-maker"
        },
        {
          "id": "cloud-awesome/cloudawesome-docs",
          "name": "cloudawesome-docs",
          "displayName": "cloudawesome-docs",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs"
        }
      ],
      "pipelines": [
        {
          "id": "cloud-awesome/pipeline-execution-dashboard/workflow/268455644",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "name": "ci build",
          "category": "build",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/blob/main/.github/workflows/ci.yml"
        },
        {
          "id": "cloud-awesome/pipeline-execution-dashboard/workflow/269576468",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "name": "npm publish",
          "category": "release",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/blob/main/.github/workflows/npm-publish.yml"
        },
        {
          "id": "cloud-awesome/markdown-maker/workflow/210612633",
          "repositoryId": "cloud-awesome/markdown-maker",
          "name": "Build and Test",
          "category": "build",
          "url": "https://github.com/cloud-awesome/markdown-maker/blob/main/.github/workflows/build-and-test.yml"
        },
        {
          "id": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "name": "Azure Static Web Apps CI/CD",
          "category": "release",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/blob/master/.github/workflows/azure-static-web-apps-happy-forest-0b7031503.yml"
        }
      ],
      "executions": [
        {
          "id": "25223484939",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "pipelineId": "cloud-awesome/pipeline-execution-dashboard/workflow/268455644",
          "status": "success",
          "startedAt": "2026-05-01T16:50:25+00:00",
          "completedAt": "2026-05-01T16:51:33+00:00",
          "durationMs": 68000,
          "branch": "main",
          "commitSha": "299b53db12318521f108ffdc9ac684faf98befc8",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/actions/runs/25223484939"
        },
        {
          "id": "25222406642",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "pipelineId": "cloud-awesome/pipeline-execution-dashboard/workflow/268455644",
          "status": "success",
          "startedAt": "2026-05-01T16:22:25+00:00",
          "completedAt": "2026-05-01T16:23:35+00:00",
          "durationMs": 70000,
          "branch": "main",
          "commitSha": "2f7a472edb315ed98b809dfc426b5b5ba15ed6ef",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/actions/runs/25222406642"
        },
        {
          "id": "25212639536",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "pipelineId": "cloud-awesome/pipeline-execution-dashboard/workflow/268455644",
          "status": "success",
          "startedAt": "2026-05-01T11:25:59+00:00",
          "completedAt": "2026-05-01T11:27:14+00:00",
          "durationMs": 75000,
          "branch": "main",
          "commitSha": "3017a4a904d9610c88b1bbd890fa306817cb93ff",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/actions/runs/25212639536"
        },
        {
          "id": "25212160304",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "pipelineId": "cloud-awesome/pipeline-execution-dashboard/workflow/268455644",
          "status": "success",
          "startedAt": "2026-05-01T11:06:48+00:00",
          "completedAt": "2026-05-01T11:07:48+00:00",
          "durationMs": 60000,
          "branch": "main",
          "commitSha": "ec2004014eff2582de8976eb7cac49d6a04bd4be",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/actions/runs/25212160304"
        },
        {
          "id": "25176235176",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "pipelineId": "cloud-awesome/pipeline-execution-dashboard/workflow/268455644",
          "status": "success",
          "startedAt": "2026-04-30T16:10:48+00:00",
          "completedAt": "2026-04-30T16:11:57+00:00",
          "durationMs": 69000,
          "branch": "main",
          "commitSha": "58af0739b646f3c2df821d1e870af35b8fc500ff",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/actions/runs/25176235176"
        },
        {
          "id": "25174178726",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "pipelineId": "cloud-awesome/pipeline-execution-dashboard/workflow/268455644",
          "status": "success",
          "startedAt": "2026-04-30T15:28:55+00:00",
          "completedAt": "2026-04-30T15:30:08+00:00",
          "durationMs": 73000,
          "branch": "main",
          "commitSha": "a295e415fb0f8fa23e97a0e1463fdc18e4cd3989",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/actions/runs/25174178726"
        },
        {
          "id": "25163184762",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "pipelineId": "cloud-awesome/pipeline-execution-dashboard/workflow/268455644",
          "status": "success",
          "startedAt": "2026-04-30T11:36:14+00:00",
          "completedAt": "2026-04-30T11:37:23+00:00",
          "durationMs": 69000,
          "branch": "main",
          "commitSha": "9e3e7b9703834e76cd790feca9d561e303086cd9",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/actions/runs/25163184762"
        },
        {
          "id": "25126690379",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "pipelineId": "cloud-awesome/pipeline-execution-dashboard/workflow/268455644",
          "status": "success",
          "startedAt": "2026-04-29T18:29:30+00:00",
          "completedAt": "2026-04-29T18:30:22+00:00",
          "durationMs": 52000,
          "branch": "main",
          "commitSha": "d64efec1ec297bf54998ad4ff9e21a131adb3de0",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/actions/runs/25126690379"
        },
        {
          "id": "25125499485",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "pipelineId": "cloud-awesome/pipeline-execution-dashboard/workflow/268455644",
          "status": "success",
          "startedAt": "2026-04-29T18:03:38+00:00",
          "completedAt": "2026-04-29T18:04:14+00:00",
          "durationMs": 36000,
          "branch": "main",
          "commitSha": "fbfe289019c90f6b2dc3fc862028901e7ebe96af",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/actions/runs/25125499485"
        },
        {
          "id": "25124687762",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "pipelineId": "cloud-awesome/pipeline-execution-dashboard/workflow/268455644",
          "status": "success",
          "startedAt": "2026-04-29T17:46:24+00:00",
          "completedAt": "2026-04-29T17:46:58+00:00",
          "durationMs": 34000,
          "branch": "main",
          "commitSha": "73e1489d629d492772f15d361884f55b41a16271",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/actions/runs/25124687762"
        },
        {
          "id": "25124135748",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "pipelineId": "cloud-awesome/pipeline-execution-dashboard/workflow/268455644",
          "status": "success",
          "startedAt": "2026-04-29T17:34:44+00:00",
          "completedAt": "2026-04-29T17:35:27+00:00",
          "durationMs": 43000,
          "branch": "main",
          "commitSha": "001da383085673bcf0b34b55409ef67c3bd0cdba",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/actions/runs/25124135748"
        },
        {
          "id": "25121809357",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "pipelineId": "cloud-awesome/pipeline-execution-dashboard/workflow/268455644",
          "status": "success",
          "startedAt": "2026-04-29T16:45:06+00:00",
          "completedAt": "2026-04-29T16:45:48+00:00",
          "durationMs": 42000,
          "branch": "main",
          "commitSha": "9e32620f30a82b2e089aac90177f2ac40de3f45a",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/actions/runs/25121809357"
        },
        {
          "id": "25224712397",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "pipelineId": "cloud-awesome/pipeline-execution-dashboard/workflow/269576468",
          "status": "success",
          "startedAt": "2026-05-01T17:23:06+00:00",
          "completedAt": "2026-05-01T17:24:24+00:00",
          "durationMs": 78000,
          "branch": "main",
          "commitSha": "299b53db12318521f108ffdc9ac684faf98befc8",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/actions/runs/25224712397"
        },
        {
          "id": "25224559083",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "pipelineId": "cloud-awesome/pipeline-execution-dashboard/workflow/269576468",
          "status": "failure",
          "startedAt": "2026-05-01T17:18:58+00:00",
          "completedAt": "2026-05-01T17:21:09+00:00",
          "durationMs": 131000,
          "branch": "main",
          "commitSha": "299b53db12318521f108ffdc9ac684faf98befc8",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/actions/runs/25224559083"
        },
        {
          "id": "25223925948",
          "repositoryId": "cloud-awesome/pipeline-execution-dashboard",
          "pipelineId": "cloud-awesome/pipeline-execution-dashboard/workflow/269576468",
          "status": "success",
          "startedAt": "2026-05-01T17:02:11+00:00",
          "completedAt": "2026-05-01T17:04:16+00:00",
          "durationMs": 125000,
          "branch": "main",
          "commitSha": "299b53db12318521f108ffdc9ac684faf98befc8",
          "url": "https://github.com/cloud-awesome/pipeline-execution-dashboard/actions/runs/25223925948"
        },
        {
          "id": "24785420881",
          "repositoryId": "cloud-awesome/markdown-maker",
          "pipelineId": "cloud-awesome/markdown-maker/workflow/210612633",
          "status": "success",
          "startedAt": "2026-04-22T14:55:33+00:00",
          "completedAt": "2026-04-22T14:57:45+00:00",
          "durationMs": 132000,
          "branch": "main",
          "commitSha": "f3de74449547a6734e0633ed8458bdb863769810",
          "url": "https://github.com/cloud-awesome/markdown-maker/actions/runs/24785420881"
        },
        {
          "id": "24779995341",
          "repositoryId": "cloud-awesome/markdown-maker",
          "pipelineId": "cloud-awesome/markdown-maker/workflow/210612633",
          "status": "success",
          "startedAt": "2026-04-22T13:07:30+00:00",
          "completedAt": "2026-04-22T13:08:32+00:00",
          "durationMs": 62000,
          "branch": "main",
          "commitSha": "02b53b7c1da436c87ef1684ce1c4e871830227c6",
          "url": "https://github.com/cloud-awesome/markdown-maker/actions/runs/24779995341"
        },
        {
          "id": "24735682844",
          "repositoryId": "cloud-awesome/markdown-maker",
          "pipelineId": "cloud-awesome/markdown-maker/workflow/210612633",
          "status": "success",
          "startedAt": "2026-04-21T17:04:03+00:00",
          "completedAt": "2026-04-21T17:04:57+00:00",
          "durationMs": 54000,
          "branch": "main",
          "commitSha": "498a88d3bcd982c7b4a89e69303223553461554f",
          "url": "https://github.com/cloud-awesome/markdown-maker/actions/runs/24735682844"
        },
        {
          "id": "19768155555",
          "repositoryId": "cloud-awesome/markdown-maker",
          "pipelineId": "cloud-awesome/markdown-maker/workflow/210612633",
          "status": "success",
          "startedAt": "2025-11-28T15:34:31+00:00",
          "completedAt": "2025-11-28T15:35:53+00:00",
          "durationMs": 82000,
          "branch": "main",
          "commitSha": "e4eb6a7274422c181d3663efe5af61468ed56596",
          "url": "https://github.com/cloud-awesome/markdown-maker/actions/runs/19768155555"
        },
        {
          "id": "19767064615",
          "repositoryId": "cloud-awesome/markdown-maker",
          "pipelineId": "cloud-awesome/markdown-maker/workflow/210612633",
          "status": "success",
          "startedAt": "2025-11-28T14:47:02+00:00",
          "completedAt": "2025-11-28T14:48:19+00:00",
          "durationMs": 77000,
          "branch": "main",
          "commitSha": "61e854bb0ffa4c165afbc20f0f0f026a4b938f80",
          "url": "https://github.com/cloud-awesome/markdown-maker/actions/runs/19767064615"
        },
        {
          "id": "19744623787",
          "repositoryId": "cloud-awesome/markdown-maker",
          "pipelineId": "cloud-awesome/markdown-maker/workflow/210612633",
          "status": "success",
          "startedAt": "2025-11-27T18:00:20+00:00",
          "completedAt": "2025-11-27T18:01:42+00:00",
          "durationMs": 82000,
          "branch": "main",
          "commitSha": "421807a76f451a1634f2f1840c64f2b8bcedfba9",
          "url": "https://github.com/cloud-awesome/markdown-maker/actions/runs/19744623787"
        },
        {
          "id": "19712467083",
          "repositoryId": "cloud-awesome/markdown-maker",
          "pipelineId": "cloud-awesome/markdown-maker/workflow/210612633",
          "status": "success",
          "startedAt": "2025-11-26T17:34:19+00:00",
          "completedAt": "2025-11-26T17:35:17+00:00",
          "durationMs": 58000,
          "branch": "main",
          "commitSha": "cc4a66f525782cca2330654592ea3b8a5844aa23",
          "url": "https://github.com/cloud-awesome/markdown-maker/actions/runs/19712467083"
        },
        {
          "id": "19712057182",
          "repositoryId": "cloud-awesome/markdown-maker",
          "pipelineId": "cloud-awesome/markdown-maker/workflow/210612633",
          "status": "success",
          "startedAt": "2025-11-26T17:18:41+00:00",
          "completedAt": "2025-11-26T17:19:37+00:00",
          "durationMs": 56000,
          "branch": "main",
          "commitSha": "973de05f4df59b17bd3bbbd13d70cfcc7693620c",
          "url": "https://github.com/cloud-awesome/markdown-maker/actions/runs/19712057182"
        },
        {
          "id": "19711705796",
          "repositoryId": "cloud-awesome/markdown-maker",
          "pipelineId": "cloud-awesome/markdown-maker/workflow/210612633",
          "status": "success",
          "startedAt": "2025-11-26T17:05:46+00:00",
          "completedAt": "2025-11-26T17:06:58+00:00",
          "durationMs": 72000,
          "branch": "main",
          "commitSha": "b1e93a2fcef638f5e2e6995b097dc5896d24dc95",
          "url": "https://github.com/cloud-awesome/markdown-maker/actions/runs/19711705796"
        },
        {
          "id": "25231030142",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-05-01T20:08:45+00:00",
          "completedAt": "2026-05-01T20:11:08+00:00",
          "durationMs": 143000,
          "branch": "build-monitor-docs",
          "commitSha": "62feabd9cf12ab8d512cfcabda194fb3c69a4fd2",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/25231030142"
        },
        {
          "id": "25230849000",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-05-01T20:03:54+00:00",
          "completedAt": "2026-05-01T20:06:12+00:00",
          "durationMs": 138000,
          "branch": "build-monitor-docs",
          "commitSha": "2758f333ca5c5b799c18cb2922f346baf538bc5e",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/25230849000"
        },
        {
          "id": "25229279821",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-05-01T19:22:26+00:00",
          "completedAt": "2026-05-01T19:24:40+00:00",
          "durationMs": 134000,
          "branch": "build-monitor-docs",
          "commitSha": "0f215ea416cc435df90e88485622bdca86c84103",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/25229279821"
        },
        {
          "id": "25226510648",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-05-01T18:10:22+00:00",
          "completedAt": "2026-05-01T18:12:52+00:00",
          "durationMs": 150000,
          "branch": "master",
          "commitSha": "db76fdaa8becc9120eaebf490f674c6db44ee5fc",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/25226510648"
        },
        {
          "id": "24906411391",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-04-24T18:50:19+00:00",
          "completedAt": "2026-04-24T18:52:42+00:00",
          "durationMs": 143000,
          "branch": "master",
          "commitSha": "0788fb2ffb1a244a9cd7b9221e5fac03e30767de",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/24906411391"
        },
        {
          "id": "24791776344",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-04-22T17:06:23+00:00",
          "completedAt": "2026-04-22T17:08:40+00:00",
          "durationMs": 137000,
          "branch": "master",
          "commitSha": "23d6128d05ac52d61e43bbc0e7b396bd283eb189",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/24791776344"
        },
        {
          "id": "24790671789",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-04-22T16:42:14+00:00",
          "completedAt": "2026-04-22T16:44:28+00:00",
          "durationMs": 134000,
          "branch": "master",
          "commitSha": "2aed91a6264a78861aa2b6f9ae088b50a5566ac9",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/24790671789"
        },
        {
          "id": "24789135258",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-04-22T16:09:42+00:00",
          "completedAt": "2026-04-22T16:12:10+00:00",
          "durationMs": 148000,
          "branch": "master",
          "commitSha": "68d29a6440ebc26425641d00d2634ec22ba9eb1e",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/24789135258"
        },
        {
          "id": "24788738023",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-04-22T16:01:26+00:00",
          "completedAt": "2026-04-22T16:03:47+00:00",
          "durationMs": 141000,
          "branch": "master",
          "commitSha": "454c870f2e167fef70ec910f64abb6cb7912ba16",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/24788738023"
        },
        {
          "id": "24736278249",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-04-21T17:17:30+00:00",
          "completedAt": "2026-04-21T17:19:43+00:00",
          "durationMs": 133000,
          "branch": "master",
          "commitSha": "ddaf733a75194ab4aaab98be6b914bf39dc1680e",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/24736278249"
        },
        {
          "id": "24736069318",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-04-21T17:12:43+00:00",
          "completedAt": "2026-04-21T17:15:06+00:00",
          "durationMs": 143000,
          "branch": "master",
          "commitSha": "7cb9bbe84cc6e6710df35cb4a4f709df62d3c1b1",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/24736069318"
        },
        {
          "id": "24726304338",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-04-21T13:53:29+00:00",
          "completedAt": "2026-04-21T13:55:51+00:00",
          "durationMs": 142000,
          "branch": "master",
          "commitSha": "5f9d0cd84aeb339250a38ab5e1cf91d5ddcaf957",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/24726304338"
        },
        {
          "id": "24725798067",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-04-21T13:43:18+00:00",
          "completedAt": "2026-04-21T13:45:44+00:00",
          "durationMs": 146000,
          "branch": "master",
          "commitSha": "7f04b89f9d2c94a591985978846d218ae4bb2372",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/24725798067"
        },
        {
          "id": "22073309191",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-02-16T18:10:07+00:00",
          "completedAt": "2026-02-16T18:11:53+00:00",
          "durationMs": 106000,
          "branch": "master",
          "commitSha": "1115433453173f2693deb0b385055d8acad51da9",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/22073309191"
        },
        {
          "id": "22026163802",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-02-14T23:35:53+00:00",
          "completedAt": "2026-02-14T23:37:49+00:00",
          "durationMs": 116000,
          "branch": "master",
          "commitSha": "925cc799a7b8f3aab1944310f8694d2d11ee92de",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/22026163802"
        },
        {
          "id": "21255019759",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-01-22T15:52:04+00:00",
          "completedAt": "2026-01-22T15:54:03+00:00",
          "durationMs": 119000,
          "branch": "master",
          "commitSha": "effab9b3705075246da6b96e30efb095d84ef1e9",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/21255019759"
        },
        {
          "id": "21219876581",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-01-21T17:47:52+00:00",
          "completedAt": "2026-01-21T17:49:55+00:00",
          "durationMs": 123000,
          "branch": "master",
          "commitSha": "f9b3c008d6569377756dc58c4db77c854916fc04",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/21219876581"
        },
        {
          "id": "21217960023",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-01-21T16:46:01+00:00",
          "completedAt": "2026-01-21T16:48:06+00:00",
          "durationMs": 125000,
          "branch": "master",
          "commitSha": "a2817ef44b257ab9bd5ba419c99d3b6ff3aadf08",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/21217960023"
        },
        {
          "id": "20755341319",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2026-01-06T16:49:19+00:00",
          "completedAt": "2026-01-06T16:51:17+00:00",
          "durationMs": 118000,
          "branch": "master",
          "commitSha": "f5f1b564a33b3c9fb8a9670f9d0322eae3a7639a",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/20755341319"
        },
        {
          "id": "19745164334",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2025-11-27T18:27:55+00:00",
          "completedAt": "2025-11-27T18:29:48+00:00",
          "durationMs": 113000,
          "branch": "master",
          "commitSha": "5ee31cd75501aea8a28710078492aae0b89f62e9",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/19745164334"
        },
        {
          "id": "19744844765",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2025-11-27T18:11:24+00:00",
          "completedAt": "2025-11-27T18:13:26+00:00",
          "durationMs": 122000,
          "branch": "master",
          "commitSha": "39e70775f83261022d00163d6d35dc43f932c4da",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/19744844765"
        },
        {
          "id": "17109774151",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2025-08-20T20:39:27+00:00",
          "completedAt": "2025-08-20T20:41:29+00:00",
          "durationMs": 122000,
          "branch": "master",
          "commitSha": "25d5b5f13dcbc23c43b204aca556321fe1dcd811",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/17109774151"
        },
        {
          "id": "16884918140",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2025-08-11T15:41:42+00:00",
          "completedAt": "2025-08-11T15:43:36+00:00",
          "durationMs": 114000,
          "branch": "master",
          "commitSha": "2f7b52dc110e964e7c2b12c40494c888b007e4e8",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/16884918140"
        },
        {
          "id": "16884433508",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2025-08-11T15:22:27+00:00",
          "completedAt": "2025-08-11T15:24:25+00:00",
          "durationMs": 118000,
          "branch": "master",
          "commitSha": "3e770b0d0c71be0ccb831df75a1d2fee2fe9a25a",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/16884433508"
        },
        {
          "id": "16881366965",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2025-08-11T13:24:16+00:00",
          "completedAt": "2025-08-11T13:26:14+00:00",
          "durationMs": 118000,
          "branch": "master",
          "commitSha": "4a027e2ab67598660480f3da0d2cb1ae433aa2e5",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/16881366965"
        },
        {
          "id": "16624886764",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2025-07-30T14:07:30+00:00",
          "completedAt": "2025-07-30T14:09:31+00:00",
          "durationMs": 121000,
          "branch": "master",
          "commitSha": "2da2bbd37a9c0f9a66b3768058650f76412b0f8d",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/16624886764"
        },
        {
          "id": "16602408785",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2025-07-29T16:53:58+00:00",
          "completedAt": "2025-07-29T16:55:51+00:00",
          "durationMs": 113000,
          "branch": "master",
          "commitSha": "f86e50abcfe8339e2f79548149ee9784deb56ff8",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/16602408785"
        },
        {
          "id": "16601210493",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2025-07-29T15:58:02+00:00",
          "completedAt": "2025-07-29T15:59:57+00:00",
          "durationMs": 115000,
          "branch": "master",
          "commitSha": "11d57e05d8b287072937426bf65dda6ebc74f73c",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/16601210493"
        },
        {
          "id": "16600832740",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2025-07-29T15:41:31+00:00",
          "completedAt": "2025-07-29T15:43:31+00:00",
          "durationMs": 120000,
          "branch": "master",
          "commitSha": "9424646d898b570ea61806f391c8b796f72e97a6",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/16600832740"
        },
        {
          "id": "16599786743",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2025-07-29T14:58:05+00:00",
          "completedAt": "2025-07-29T15:00:01+00:00",
          "durationMs": 116000,
          "branch": "master",
          "commitSha": "625b37cfc89ac6d47576e32cf10b2de7a4578c6e",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/16599786743"
        },
        {
          "id": "16080269178",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2025-07-04T20:03:54+00:00",
          "completedAt": "2025-07-04T20:05:48+00:00",
          "durationMs": 114000,
          "branch": "master",
          "commitSha": "83a274695e7300af756405908a546b199c7c4536",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/16080269178"
        },
        {
          "id": "16079268130",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2025-07-04T18:30:28+00:00",
          "completedAt": "2025-07-04T18:32:25+00:00",
          "durationMs": 117000,
          "branch": "master",
          "commitSha": "1b2b0e997b0937cd4db951f6e824ccbed4987c88",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/16079268130"
        },
        {
          "id": "15928837594",
          "repositoryId": "cloud-awesome/cloudawesome-docs",
          "pipelineId": "cloud-awesome/cloudawesome-docs/workflow/70283498",
          "status": "success",
          "startedAt": "2025-06-27T14:33:40+00:00",
          "completedAt": "2025-06-27T14:35:33+00:00",
          "durationMs": 113000,
          "branch": "master",
          "commitSha": "2bddb86e7fd954eff12065e5d3e34fa7377e3a9f",
          "url": "https://github.com/cloud-awesome/cloudawesome-docs/actions/runs/15928837594"
        }
      ]
    }