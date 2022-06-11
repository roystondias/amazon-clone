import React, { createContext, useContext, useReducer } from "react";

//creates the context
export const StateContext = createContext();

//this is the provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );

//this is similar to the consumer
export const useStateValue = () => useContext(StateContext);