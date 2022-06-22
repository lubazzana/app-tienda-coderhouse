import { ActivityIndicator } from "react-native";
import React from "react";
import Root from "./src/index";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    'SourceSansPro-Regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
    'SourceSansPro-SemiBold': require('./assets/fonts/SourceSansPro-SemiBold.ttf'),
    'SourceSansPro-Bold': require('./assets/fonts/SourceSansPro-Bold.ttf'),
    'SourceSansPro-Light': require('./assets/fonts/SourceSansPro-Light.ttf'),
    'SourceSansPro-Italic': require('./assets/fonts/SourceSansPro-Italic.ttf'),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <Root />
  );
}