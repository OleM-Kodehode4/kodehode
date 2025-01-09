import React from "react";
import { meny } from "./data";
import Menu from "./components/Menu";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Menu retter={meny} />
    </div>
  );
}

export default App;
