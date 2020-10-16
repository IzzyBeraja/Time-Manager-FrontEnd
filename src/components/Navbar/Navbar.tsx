import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav>
      <Link href="/account">
        <a className={`nav-link text-center ${styles.navLink}`}>Izzy Beraja</a>
      </Link>
      <Link href="/">
        <a className={`nav-link ${styles.navLink}`}>
          <i className={`fas fa-keyboard ${styles.img}`} />
          Practice
        </a>
      </Link>
      <Link href="/profile">
        <a className={`nav-link ${styles.navLink}`}>
          <i className={`fas fa-chart-bar ${styles.img}`} />
          Profile
        </a>
      </Link>
      <Link href="/help">
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
      <Link href="/layouts">
        <a className={`nav-link ${styles.navLink}`}>
          <i className={`fas fa-palette ${styles.img}`} />
          Layouts
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
