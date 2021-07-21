import React from "react";
import { Route } from "react-router-dom";
import BackendLayout from "./BackendLayout";

const BackendLayoutRoute = ({ render, ...rest }) => {
   return (
      <Route
         {...rest}
         render={matchProps => (
            <BackendLayout>{render(matchProps)}</BackendLayout>
         )}
      />
   );
};

export default BackendLayoutRoute;
