import React from 'react';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorPage from '../ErrorPage/ErrorPage';

const Private = () => {
    return (
        <ErrorBoundary>
            <h1>Private route page</h1>
            <ErrorPage />
        </ErrorBoundary>
    )
}

export default Private;