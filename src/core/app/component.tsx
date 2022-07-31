import React from 'react';

import AppRouter from 'core/app-router';
import ErrorBoundary from 'core/error-boundary';

const App = () => (
  <ErrorBoundary>
    <AppRouter />
  </ErrorBoundary>
);

export default App;
