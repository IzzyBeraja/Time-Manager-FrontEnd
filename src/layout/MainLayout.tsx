import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Help from "components/Help";
import Navbar from "components/Navbar";

const MainLayout = () => {
  return (
    <Router>
      <div className="app-container tight">
        <div className="row tight">
          <div className="col tight">
            <Switch>
              <Route path="/Help" component={Help} />
              <Redirect to="/" />
            </Switch>
          </div>
          <div className="col-2 nav-col tight">
            <Navbar />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default MainLayout;
