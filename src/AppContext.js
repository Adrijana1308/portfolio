import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export function AppContextProvider({ children }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <AppContext.Provider value={{ isOn, setIsOn }}>
      {children}
    </AppContext.Provider>
  );
}
