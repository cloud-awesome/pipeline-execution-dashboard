import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

import styles from './styles.module.css';

interface FeatureItem {
  title: string;
  href: string;
  label: string;
  description: ReactNode;
}

const features: FeatureItem[] = [
  {
    title: 'Documentation Pages',
    label: 'Docs',
    href: '/docs/intro',
    description: 'A normal Docusaurus docs section with Markdown pages and sidebar navigation.',
  },
  {
    title: 'Dashboard Page',
    label: 'PED',
    href: '/dashboard',
    description: 'The pipeline dashboard rendered as one page inside the wider documentation site.',
  },
  {
    title: 'Host Styling',
    label: 'CSS',
    href: '/docs/usage/styling',
    description:
      'Docusaurus theme variables overriding the package defaults through CSS variables.',
  },
];

function Feature({ title, href, label, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <Link to={href} className={styles.featureCardLink}>
        <div className={styles.featureBadge} aria-hidden="true">
          {label}
        </div>
        <div className="text--center padding-horiz--md">
          <h3 className={styles.featureTitle}>{title}</h3>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
