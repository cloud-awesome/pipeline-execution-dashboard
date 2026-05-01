import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';
import '../../../src/styles/index.scss';
import './styles.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Harness root element was not found.');
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
