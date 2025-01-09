import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Restaurantmeny</h1>
      <nav>
        <a href="#forrett">Forretter</a>
        <a href="#hovedrett">Hovedretter</a>
        <a href="#dessert">Desserter</a>
      </nav>
    </header>
  );
}

export default Header;
