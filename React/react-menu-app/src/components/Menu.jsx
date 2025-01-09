import React from "react";
import Dish from "./Dish";
import styles from "./Menu.module.css";

function Menu({ dishes }) {
  const groupedDishes = dishes.reduce((acc, dish) => {
    if (!acc[dish.category]) acc[dish.category] = [];
    acc[dish.category].push(dish);
    return acc;
  }, {});

  return (
    <div className={styles.menuGrid}>
      {Object.entries(groupedDishes).map(([category, dishes]) => (
        <div key={category}>
          <h2>{category}</h2>
          <div className={styles.categoryGrid}>
            {dishes.map((dish) => (
              <Dish key={dish.id} {...dish} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
