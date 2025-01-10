import React from "react";
import { menu } from "./data";
import Menu from "./components/Menu";
import Header from "./components/Header";
import './App.css';

function App() {
  const categoryOrder = ["Forrett", "Hovedrett", "Dessert"];

  const sortedMenu = [...menu].sort(
    (a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category)
  );

  return (
    <div className="appContainer">
      <Header />
      <Menu dishes={sortedMenu} />
    </div>
  );
}

export default App;
