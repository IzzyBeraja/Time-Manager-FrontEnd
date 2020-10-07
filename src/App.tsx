import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.scss";
import Help from "./components/Help/Help";
import HighScores from "./components/HighScores/HighScores";
import Layouts from "./components/Layouts/Layouts";
import Navbar from "./components/Navbar/Navbar";
import Practice from "./components/Practice/Practice";
import Profile from "./components/Profile/Profile";

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
