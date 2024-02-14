import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState("");

  return (
    <AppContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);