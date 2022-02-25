import React from 'react';
import { ClientPage } from './components/Client/ClientPage';
import { ErrorBoundary } from './components/Common/ErrorBoundary';
import { FallbackComponent } from './components/Common/Global/FallbackComponent';

const App = () => {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <ClientPage />
    </ErrorBoundary>
  );
};

export default App;
