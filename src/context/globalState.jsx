import React, { createContext, useReducer } from "react";
import AppReducer from "./appReducer";

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 }
  ]
};

// creaet context

export const GlobalContext = createContext(initialState);
// Provider componet
export const GloblalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  // Actions
  function deleteTransactions(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  function addTransactions(tranaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: tranaction
    });
  }

  return (
    <GlobalContext.Provider value={{ transactions: state.transactions,deleteTransactions,addTransactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
