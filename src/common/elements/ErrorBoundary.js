import React from "react";
import { ErrorBoundary as ErrorBoundaryComp } from "react-error-boundary";
import _ from "lodash";
import ErrorFallBack from "./ErrorFallBack";

const ErrorBoundary = ({ children, FallBackComponent }) => {
  if (_.isNull(FallBackComponent)) {
    FallBackComponent = ErrorFallBack;
  }
  return (
    <ErrorBoundaryComp FallBackComponent={FallBackComponent}>
      {children}
    </ErrorBoundaryComp>
  );
};

export default ErrorBoundary;
