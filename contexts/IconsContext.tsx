import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { iconCurr, iconList } from '../src/mock/icons_tabs';
import { useAppContext } from './AppContext';
import { useRouteContext } from './RouteContext';

const IconsContext = createContext(undefined);

export const IconsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [iconListContext, setIconListContext] = useState<string>(iconList.dark);
  const [iconCurrContext, setIconCurrContext] = useState<string>(iconCurr.light);

  return (
    <IconsContext.Provider value={{ iconListContext, setIconListContext, iconCurrContext, setIconCurrContext }}>
      {children}
    </IconsContext.Provider>
  );
};

export const useIconsContext = () => useContext(IconsContext);
