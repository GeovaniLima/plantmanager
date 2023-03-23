import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'react-native';
import { Welcome } from './src/pages/Welcome';
import { 
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded) {
    return (
      <AppLoading />
    )
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      
      <Welcome />
    </>
  );
}
