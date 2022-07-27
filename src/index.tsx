import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.module.scss';
import App from 'core/app';

const container = document.querySelector('#root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(<App />);
