import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllPromotions from "./components/AllPromotions";
import NewCustomers from "./components/NewCustomers";
import NoMatch from "./components/NoMatch";

import './App.css';


function App() {
  return (
    <Router>
      <>
        <nav>
          <ul>
            <li>
              <Link to="/allpromotions">All Promotions</Link>
            </li>
            <li>
              <Link to="/newcustomers">New Customers</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <AllPromotions />
          </Route>
          <Route path="/allpromotions">
            <AllPromotions />
          </Route>
          <Route path="/newcustomers">
            <NewCustomers />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
