import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.scss';
import App from 'core/app';
import store from 'core/store';

const container = document.querySelector('#root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
