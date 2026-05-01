---
sidebar_position: 2
---

# Styling

The package ships default CSS, but host sites can override the dashboard with CSS variables.

```css
.docs-dashboard .ped-dashboard {
  --ped-color-surface: var(--ifm-background-surface-color);
  --ped-color-text: var(--ifm-font-color-base);
  --ped-color-border: var(--ifm-color-emphasis-300);
}
```

The Docusaurus example uses this approach on the dashboard page.
