import type { Config } from '@docusaurus/types';
// @ts-ignore
import type { Preset } from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Pipeline Dashboard Docusaurus Example',
  tagline: 'A regular Docusaurus site with an embedded pipeline dashboard',
  favicon: 'img/favicon.ico',
  url: 'https://example.com',
  baseUrl: '/',
  organizationName: 'cloud-awesome',
  projectName: 'pipeline-execution-dashboard',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Pipeline Dashboard',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/dashboard',
          label: 'Dashboard',
          position: 'left',
        },
        {
          href: 'https://github.com/cloud-awesome/pipeline-execution-dashboard',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Example',
          items: [
            {
              label: 'Documentation',
              to: '/docs/intro',
            },
            {
              label: 'Pipeline dashboard',
              to: '/dashboard',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cloud Awesome.`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
