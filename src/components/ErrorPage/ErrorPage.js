import React from 'react';
import ErrorChild from '../ErrorChild/ErrorChild';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';


function ErrorPage() {
  return (
    <ErrorBoundary>
      <ErrorChild />
    </ErrorBoundary>
  );
}

export default ErrorPage;