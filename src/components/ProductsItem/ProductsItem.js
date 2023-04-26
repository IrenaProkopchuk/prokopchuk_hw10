import React from "react";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import ErrorPage from "../ErrorPage/ErrorPage";
import { useParams } from "react-router-dom";

const ProductItem = () => {
    const { productId } = useParams();
  
    // console.log('>>productId', productId);
  
    return (
        <ErrorBoundary>
      <div>
        <h3>ProductItem</h3>
        <h5>{productId}</h5>
        <ErrorPage />
      </div>
      </ErrorBoundary>
    )
  }

  export default ProductItem;