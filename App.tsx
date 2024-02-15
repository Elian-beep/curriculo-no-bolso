import { StatusBar } from 'expo-status-bar';
import { AllContainer } from './src/default.styled';
import { TitleTop } from './src/components/TItleTop';
import { Routes } from './src/routes';
import { AppProvider } from './contexts/AppContext';
import { RouteProvider, useRouteContext } from './contexts/RouteContext';
import { IconsProvider } from './contexts/IconsContext';
import { initializeDatabase } from './src/data/SQLiteDatabase';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Text } from 'react-native';
import { ScreenIntro } from './src/components/ScreensIntro';
import { ButtonDefault } from './src/components/ButtonDefault';

export default function App() {
  const [screenNumber, setScreenNumber] = useState<"01" | "02" | "03">("01");
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    initializeDatabase();
    const checkFirstTime = async () => {
      try {
        const value = await AsyncStorage.getItem('@firstTime');
        if (value !== null) {
          setFirstTime(false);
        }
      } catch (error) {
        console.error('Erro ao acessar AsyncStorage:', error);
      }
    };

    checkFirstTime();
    // AsyncStorage.removeItem('@firstTime');
  }, []);

  const switchScreen = async () => {
    if (screenNumber === "01") setScreenNumber("02");
    if (screenNumber === "02") setScreenNumber("03");
    if (screenNumber === "03") {
      setFirstTime(false);
      await AsyncStorage.setItem('@firstTime', 'true');
    }
  }

  return (
    <RouteProvider>
      <AppProvider>
        <IconsProvider>
          <AllContainer>
            <TitleTop />
            {
              firstTime
                ?
                <>
                  <ScreenIntro screenNumber={screenNumber}>
                    <ButtonDefault title='Começar' onPress={switchScreen} />
                  </ScreenIntro>
                </>
                :
                <>
                  <Routes />
                </>
            }
            <StatusBar style="auto" />
          </AllContainer>
        </IconsProvider>
      </AppProvider>
    </RouteProvider>
  );
}