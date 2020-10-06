import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.scss";
import Help from "./components/Help";
import HighScores from "./components/HighScores";
import Layouts from "./components/Layouts";
import Navbar from "./components/Navbar";
import Practice from "./components/Practice";
import Profile from "./components/Profile";

const App = () => {
  return (
    <Router>
      <div className="flex-container ml-1 mr-3 mt-2">
        <div className="row">
          <div className="col">
            <Switch>
              <Route path="/Profile" component={Profile} />
              <Route path="/Help" component={Help} />
              <Route path="/Highscores" component={HighScores} />
              <Route path="/Layouts" component={Layouts} />
              <Route path="/" component={Practice} />
              <Redirect exact to="/" />
            </Switch>
          </div>
          <div className="col-2">
            <Navbar />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
