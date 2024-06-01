import React from "react";
import ErrorBoundary from "../common/elements/ErrorBoundary";
import { useSelector } from "react-redux";
import Header from "./Header";

const Browse = () => {
  const user = useSelector((state) => state.user);

  console.log("user from store", user);
  return (
    <ErrorBoundary
      onError={(e) => {
        console.log(e);
      }}
    >
      <div>
        <Header />
      </div>
    </ErrorBoundary>
  );
};

export default Browse;
