import React, { createContext, useContext, useReducer } from "react";

// Prepares the datalayer
export const StateContext = createContext();

//wra our app and provide datalayer to every app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//pull information from datalayer
export const useStateValue = () => useContext(StateContext);