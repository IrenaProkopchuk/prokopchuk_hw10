
import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ErrorPage from "../ErrorPage/ErrorPage";



const Products = () => {
    return (
        <ErrorBoundary>
      <div>
        <h3>Products!</h3>
        <ErrorPage />
      </div>
      </ErrorBoundary>
    )
  }

  export default Products;
  