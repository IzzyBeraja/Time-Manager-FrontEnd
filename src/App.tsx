import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "scss/components/App.scss";
import Help from "components/Help";
import HighScores from "components/HighScores";
import Layouts from "components/Layouts";
import Navbar from "components/Navbar";
import Practice from "components/Practice";
import Profile from "components/Profile";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="row m-0 p-0">
          <div className="col m-0 p-0">
            <Switch>
              <Route path="/Profile" component={Profile} />
              <Route path="/Help" component={Help} />
              <Route path="/Highscores" component={HighScores} />
              <Route path="/Layouts" component={Layouts} />
              <Route path="/" component={Practice} />
              <Redirect exact to="/" />
            </Switch>
          </div>
          <div className="col-2 nav-col m-0 p-0">
            <Navbar />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
