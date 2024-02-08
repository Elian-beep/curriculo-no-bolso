import { StatusBar } from 'expo-status-bar';
import { AllContainer, DefaultContent } from './src/default.styled';
import { TitleTop } from './src/components/TItleTop';
import { Routes } from './src/routes';
import { AppProvider } from './contexts/AppContext';

export default function App() {
  return (
    <AllContainer>
      <TitleTop text='Currículo de Bolso' />
      <AppProvider>
        <Routes />
      </AppProvider>
      <StatusBar style="auto" />
    </AllContainer>
  );
}