import React from "react";
import { Header } from "./components/header";
import { Balance } from "./components/balance";
import { IncomeExpences } from "./components/incomeExpences";
import { TransactionList } from "./components/transactionList";
import { AddTransaction } from "./components/addTransaction";
import "./App.css";
import {GloblalProvider} from './context/globalState'
function App() {
  return (
    <GloblalProvider>
      <Header />
      <div className="container">
        <Balance/>
        <IncomeExpences/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GloblalProvider>
  );
}

export default App;
