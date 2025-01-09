import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "./Dish.module.css";

function Dish({ title, price, ingredients, category }) {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div style={animation} className={`${styles.card} ${styles[category]}`}>
      <h2>{title}</h2>
      <p><strong>Pris:</strong> {price}</p>
      <p><strong>Ingredienser:</strong> {ingredients}</p>
      <p><strong>Kategori:</strong> {category}</p>
    </animated.div>
  );
}

export default Dish;
