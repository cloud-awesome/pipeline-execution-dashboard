/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Usage',
      items: ['usage/render-dashboard', 'usage/styling'],
    },
  ],
};

module.exports = sidebars;
