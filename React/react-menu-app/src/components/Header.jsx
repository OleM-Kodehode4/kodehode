import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Restaurantmeny</h1>
      <nav>
        <a href="#hovedretter">Hovedretter</a>
        <a href="#forretter">Forretter</a>
        <a href="#desserter">Desserter</a>
      </nav>
    </header>
  );
}

export default Header;