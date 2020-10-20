import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav>
      <Link href="/Account">
        <a className={`nav-link text-center ${styles.navLink}`}>Izzy Beraja</a>
      </Link>
      <Link href="/Practice">
        <a className={`nav-link ${styles.navLink}`}>
          <i className={`fas fa-keyboard ${styles.img}`} />
          Practice
        </a>
      </Link>
      <Link href="/Profile">
        <a className={`nav-link ${styles.navLink}`}>
          <i className={`fas fa-chart-bar ${styles.img}`} />
          Profile
        </a>
      </Link>
      <Link href="/Help">
        <a className={`nav-link ${styles.navLink}`}>
          <i className={`fas fa-question-circle ${styles.img}`} />
          Help
        </a>
      </Link>
      <Link href="/HighScores">
        <a className={`nav-link ${styles.navLink}`}>
          <i className={`fas fa-trophy ${styles.img}`} />
          High Scores
        </a>
      </Link>
      <Link href="/KeyLayouts">
        <a className={`nav-link ${styles.navLink}`}>
          <i className={`fas fa-palette ${styles.img}`} />
          Layouts
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
