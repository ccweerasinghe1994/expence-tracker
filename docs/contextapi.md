# CONTEXT API

> Import

```jsx
// userReducer is for global reducer
import React, { createContext, useReducer } from "react";
```

> We need a initial state

```jsx
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 }
  ]
};
```

> Create a global context

```jsx
export const GlobalContext = createContext(initialState);
```

> for other component to have access to the initial state we need to have a provider so we need to wrap all these components

```jsx
import React from "react";
import { Header } from "./components/header";
import { Balance } from "./components/balance";
import { IncomeExpences } from "./components/incomeExpences";
import { TransactionList } from "./components/transactionList";
import { AddTransaction } from "./components/addTransaction";
import "./App.css";
import { GloblalProvider } from "./context/globalState";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
}

export default App;
```

> Creating the provider component

```jsx
export const GloblalProvider = ({ children }) => {
  // we need to create a Reducer
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
```

> Creating a reducer

```jsx
export default (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
```

> After wrapping the provider in App.js

```jsx
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

```
