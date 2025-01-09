import React from "react";
import styles from "./Dish.module.css";

function Dish({ tittel, pris, ingredienser, kategori }) {
  return (
    <div className={`${styles.card} ${styles[kategori]}`}>
      <h2>{tittel}</h2>
      <p><strong>Pris:</strong> {pris}</p>
      <p><strong>Ingredienser:</strong> {ingredienser}</p>
      <p><strong>Kategori:</strong> {kategori}</p>
    </div>
  );
}

export default Dish;
