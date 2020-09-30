import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="nav flex-column sticky-top">
      <a className="nav-link mx-auto" href="/account">
        Izzy Beraja
      </a>
      <a className="nav-link" href="/">
        <i className="fas fa-keyboard mr-2" />
        Practice
      </a>
      <a className="nav-link" href="/profile">
        <i className="fas fa-chart-bar mr-2" />
        Profile
      </a>
      <a className="nav-link" href="/help">
        <i className="fas fa-question-circle mr-2" />
        Help
      </a>
      <a className="nav-link" href="/highscores">
        <i className="fas fa-trophy mr-2" />
        High Scores
      </a>
      <a className="nav-link" href="/layouts">
        <i className="fas fa-palette mr-2" />
        Layouts
      </a>
    </nav>

    /*     <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Timer App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" href="/">
            Home
          </a>
          <a className="nav-link" href="/">
            Features
          </a>
          <a className="nav-link" href="/">
            Pricing
          </a>
        </div>
      </div>
    </nav> */
  );
};

export default Navbar;
