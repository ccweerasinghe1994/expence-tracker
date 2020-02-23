# USING CONTEXT API

## TransActionList Component

> import GlobalCntext

```jsx
import { GlobalContext } from "../context/globalState";
```

> useContext to get the data from the global context

```jsx
import React, { useContext } from "react";
```

> To get the the data

```jsx
const { transactions } = useContext(GlobalContext);
```

---

## Balance Component

```jsx
import { GlobalContext } from "../context/globalState";
```

> useContext to get the data from the global context

```jsx
import React, { useContext } from "react";
```

> To get the the data

```jsx
const { transactions } = useContext(GlobalContext);
```

---

## IncomeExpences Component

```jsx
import { GlobalContext } from "../context/globalState";
```

> useContext to get the data from the global context

```jsx
import React, { useContext } from "react";
```

> To get the the data

```jsx
const { transactions } = useContext(GlobalContext);
```

---

## GlobalState

> create a action in globalContext

```jsx
function deleteTransactions(id) {
  dispatch({
    type: "DELETE_TRANSACTION",
    payload: id
  });
}
```

## AppReducer

> Add this code to teh case statement

```jsx

      case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          tranaction => tranaction.id !== action.payload
        )
      };

```

## GlobalState

> Add `deleteTransAction` to provider

```jsx
export const GloblalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Actions
  function deleteTransactions(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
```

## transActions Component

```jsx
import { GlobalContext } from "../context/globalState";
```

> useContext to get the data from the global context

```jsx
import React, { useContext } from "react";
```

> To get the the detete action

```jsx
const { deleteTransactions } = useContext(GlobalContext);
```

> To use

```jsx
import React, { useContext } from "react";
import { GlobalContext } from "../context/globalState";

export const Transactions = ({ transaction }) => {
  const { deleteTransactions } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransactions(transaction.id)}
        className="delete-btn"
      >
        x
      </button>
    </li>
  );
};
```

---

## addTransaction Component

## GlobalState

> create a action in globalContext

```jsx
function addTransactions(tranaction) {
  dispatch({
    type: "ADD_TRANSACTION",
    payload: tranaction
  });
}
```

## AppReducer

> Add this code to teh case statement

```jsx

  case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions]
      };
```

## GlobalState

> Add `addTransAction` to provider

```jsx
export const GloblalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Actions
  function addTransactions(tranaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: tranaction
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransactions
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
```

## addTransAction Component

```jsx
import { GlobalContext } from "../context/globalState";
```

> useContext to get the data from the global context

```jsx
import React, { useContext } from "react";
```

> To get the the detete action

```jsx
const { addTransactions } = useContext(GlobalContext);
```

> To use

```jsx
import React,{useState,useContext} from 'react';
import { GlobalContext } from '../context/globalState';


export const AddTransaction = () => {
  const {addTransactions} = useContext(GlobalContext);
  const [text,setText] = useState('');
  const [amount,setAmount] = useState(0);
  const onSubmit = e =>{
    e.preventDefault();
    const newTranaction = {
      id:Math.floor(Math.random() * 100000000),
      text,
      amount:+amount
    }
  
    addTransactions(newTranaction)
  }
    return (
        <>
             <h3>Add new transaction</h3>
      <form  onSubmit = {onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value = {text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value = {amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
   

        </>
    )
}

```

---
