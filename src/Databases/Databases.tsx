import React, { lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { MemoizedDatabasesList } from "./DatabasesList";
const DatabasesCreate = lazy(() => import("../Databases/CreateDatabase"));

/**
 * Primary renderer
 */

export default function Databases() {
  return (
    <>
      <Router>
        <h1><FormattedMessage id="Databases" /></h1>
        <div className="my-3">
          <NavLink to="/databases/create" className="btn btn-primary">
            <FormattedMessage id="Create Database" />
          </NavLink>
        </div>
        <Route path="/databases/create" component={DatabasesCreate} />
        <MemoizedDatabasesList />
      </Router>
    </>
  );
}

/**
 * Helper renderers
 */

const renderNav = () => {
  return (
    <div>
      <NavLink to="/databases/history">History</NavLink>
      <NavLink to="/databases/history">Queries</NavLink>
    </div>
  );
};
