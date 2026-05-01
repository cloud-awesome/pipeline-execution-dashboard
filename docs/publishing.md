# Publishing to npm

The npm package is published by the `Publish npm package` GitHub Actions workflow.

The workflow is manual (`workflow_dispatch`) and has a `dry_run` input. Keep `dry_run` enabled while checking the release process. Disable it only when you intend to publish to npm.

## Versioning

The project uses deployment-time CalVer. npm requires package versions to be valid SemVer, so the workflow converts the desired release time into an npm-compatible version:

```text
Display CalVer: YYYY.MM.DD.HHMMSS
npm version:    YYYY.M.DHHMMSS
```

For example, a release created at `2026.05.01.174500` UTC becomes npm version `2026.5.1174500`.

The workflow updates `package.json` and `package-lock.json` in the runner before packing and publishing. It does not commit those generated version changes back to the repository.

## npm account and token setup

1. Create an npm account at `https://www.npmjs.com/signup`.
2. Enable two-factor authentication on the npm account.
3. Create a granular access token from the npm website.
4. Give the token read and write access for this package.
5. If your npm account requires 2FA for publishing, configure the token to bypass 2FA for write actions.
6. Copy the token value immediately; npm will not show it again.

## GitHub secret setup

Create a GitHub environment named `npm`, then add an environment secret:

```text
NPM_TOKEN
```

Set the value to the npm granular access token.

Using an environment keeps the publishing token out of normal CI jobs and allows you to add required reviewers before the publish job can access the secret.

## First publish

1. Ensure the package name is available on npm.
2. Run `Publish npm package` with `dry_run` enabled.
3. Review the package contents in the workflow logs.
4. Run `Publish npm package` again with `dry_run` disabled.

The workflow publishes with npm provenance enabled so the package is publicly linked to the GitHub Actions run that built it.
