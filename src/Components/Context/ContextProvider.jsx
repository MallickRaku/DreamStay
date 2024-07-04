import React, { useState, createContext } from "react";

export const globalDataContext = createContext();

const ContextProvider = ({ children }) => {
  const initialBookInfo = {
    checkInDate: null,
    checkOutDate: null,
    numOfChild: null,
    numOfAdult: null,
  };

  const [bookInfo, setBookInfo] = useState(initialBookInfo);
  return <globalDataContext.Provider value={{ bookInfo, setBookInfo }}>{children}</globalDataContext.Provider>;
};

export default ContextProvider;
