import React from "react";
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import ErrorPage from "../ErrorPage/ErrorPage";

const Main = () => {
    return (
        <ErrorBoundary>
            <div>
                <h1>Main page</h1>
                <ErrorPage />
            </div>
        </ErrorBoundary>
    );
};

export default Main;