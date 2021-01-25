import React from "react";
import styles from "./index.module.css"

const NavBar = () => (
  <header className={styles.header}>
    <div className={styles.content}>
      <h1 className={styles.title}><a className={styles.link} href="/">Bearthday</a></h1>
    </div>
  </header>
);

export default NavBar;
