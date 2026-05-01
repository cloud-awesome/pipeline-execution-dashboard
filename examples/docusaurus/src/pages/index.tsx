import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import HomepageFeatures from '../components/HomepageFeatures';

export default function Home() {
  return (
    <Layout
      title="Home"
      description="A Docusaurus compatibility example for pipeline-execution-dashboard"
    >
      <header className="hero hero--primary example-hero">
        <div className="container">
          <h1 className="hero__title">Pipeline Dashboard Docusaurus Example</h1>
          <p className="hero__subtitle">
            A regular documentation site with an embedded dashboard page.
          </p>
          <div className="example-hero__actions">
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Read the docs
            </Link>
            <Link className="button button--outline button--secondary button--lg" to="/dashboard">
              View dashboard
            </Link>
          </div>
        </div>
      </header>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
