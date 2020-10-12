import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Help from "components/Help";
import HighScores from "components/HighScores";
import Layouts from "components/KeyLayouts";
import Navbar from "components/Navbar";
import Practice from "components/Practice";
import Profile from "components/Profile";

const MainLayout = () => {
  return (
    <Router>
      <div className="app-container tight">
        <div className="row tight">
          <div className="col tight">
            <Switch>
              <Route path="/Profile" component={Profile} />
              <Route path="/Help" component={Help} />
              <Route path="/Highscores" component={HighScores} />
              <Route path="/Layouts" component={Layouts} />
              <Route path="/" component={Practice} />
              <Redirect exact to="/" />
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
