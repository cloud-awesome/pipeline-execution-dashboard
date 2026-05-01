# Docusaurus Compatibility Example

This example verifies that `pipeline-execution-dashboard` can be consumed inside a Docusaurus site without relying on the repository harness or test setup.

It includes:

- a normal Docusaurus homepage at `/`
- Markdown documentation under `/docs`
- the pipeline dashboard on `/dashboard`

## Run Locally

From this directory:

```sh
npm install
npm start
```

From the repository root:

```sh
npm run example:docusaurus
```

The example uses a local `file:../..` dependency on the package. Build the root package before running a production Docusaurus build:

```sh
npm run example:docusaurus:build
```
