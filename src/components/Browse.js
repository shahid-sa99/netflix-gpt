import React from "react";
import ErrorBoundary from "../common/elements/ErrorBoundary";

const Browse = () => {
  return (
    <ErrorBoundary
      onError={(e) => {
        console.log(e);
      }}
    >
      <div>Browse</div>
    </ErrorBoundary>
  );
};

export default Browse;
