import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Help from "./components/Help";
import HighScores from "./components/HighScores";
import Layouts from "./components/Layouts";
import Navbar from "./components/Navbar";
import Practice from "./components/Practice";
import Profile from "./components/Profile";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex-container my-2 mx-3">
        <div className="row">
          <div className="col">
            <Switch>
              <Route path="/Profile" component={Profile} />
              <Route path="/Help" component={Help} />
              <Route path="/Highscores" component={HighScores} />
              <Route path="/Layouts" component={Layouts} />
              <Route path="/" component={Practice} />
            </Switch>
          </div>
          <div className="col-3">
            <Navbar />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
