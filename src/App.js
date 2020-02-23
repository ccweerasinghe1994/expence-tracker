import React from "react";
import { Header } from "./components/header";
import { Balance } from "./components/balance";
import { IncomeExpences } from "./components/incomeExpences";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance/>
        <IncomeExpences/>
      </div>
    </div>
  );
}

export default App;
