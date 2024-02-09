import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useIconsContext } from './IconsContext';
import { iconCurr, iconList } from '../src/mock/icons_tabs';
import { useAppContext } from './AppContext';

const RouteContext = createContext(undefined);

export const RouteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentRouteName, setCurrentRouteName] = useState<string>("list");

  return (
    <RouteContext.Provider value={{ currentRouteName, setCurrentRouteName }}>
      {children}
    </RouteContext.Provider>
  );
};

export const useRouteContext = () => useContext(RouteContext);
