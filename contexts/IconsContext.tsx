import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { iconCurr, iconList } from '../src/mock/icons_tabs';
import { useAppContext } from './AppContext';
import { useRouteContext } from './RouteContext';
import { useRoute } from '@react-navigation/native';

const IconsContext = createContext(undefined);

export const IconsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [iconListContext, setIconListContext] = useState<string>(iconList.dark);
  const [iconCurrContext, setIconCurrContext] = useState<string>(iconCurr.light);
  const { currentRouteName } = useRouteContext();

    useEffect(() => {
      if(currentRouteName == "list"){
        setIconListContext(iconList.dark);
        setIconCurrContext(iconCurr.light);
      }
      if(currentRouteName == "createCv"){
        setIconListContext(iconList.light);
        setIconCurrContext(iconCurr.dark);
      }
    }, [currentRouteName]);

  return (
    <IconsContext.Provider value={{ iconListContext, setIconListContext, iconCurrContext, setIconCurrContext }}>
      {children}
    </IconsContext.Provider>
  );
};

export const useIconsContext = () => useContext(IconsContext);
