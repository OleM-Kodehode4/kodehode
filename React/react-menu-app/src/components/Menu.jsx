import React from "react";
import Dish from "./Dish";
import styles from "./Menu.module.css";

function Menu({ retter }) {
  return (
    <div className={styles.menuGrid}>
      {retter.map((rett) => (
        <Dish key={rett.id} {...rett} />
      ))}
    </div>
  );
}

export default Menu;