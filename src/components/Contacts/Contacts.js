import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ErrorPage from "../ErrorPage/ErrorPage";

const Contacts = () => {

    return (
        <ErrorBoundary>
            <div>
                <h1>Contacts page</h1>
                <ErrorPage />
            </div>
  </ErrorBoundary> 
    )
}

export default Contacts;