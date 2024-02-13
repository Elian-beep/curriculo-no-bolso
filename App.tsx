import { StatusBar } from 'expo-status-bar';
import { AllContainer } from './src/default.styled';
import { TitleTop } from './src/components/TItleTop';
import { Routes } from './src/routes';
import { AppProvider } from './contexts/AppContext';
import { RouteProvider } from './contexts/RouteContext';
import { IconsProvider } from './contexts/IconsContext';
import { initializeDatabase } from './src/data/SQLiteDatabase';

export default function App() {
  initializeDatabase();

  return (
    <AppProvider>
      <RouteProvider>
        <IconsProvider>
          <AllContainer>
            <TitleTop text='Currículo de Bolso' />
            <Routes />
            <StatusBar style="auto" />
          </AllContainer>
        </IconsProvider>
      </RouteProvider>
    </AppProvider>
  );
}