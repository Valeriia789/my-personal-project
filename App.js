import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

import { RegistrationScreen } from "./Screens/RegistrationScreen.js";
import { ListExampleScreen } from "./Screens/ListExampleScreen.js";

export default function App() {
  const [fontsLoaded] = useFonts({
    "RobotoCondensed-Bold": require("./assets/fonts/RobotoCondensed-Bold.ttf"),
    "RobotoCondensed-BoldItalic": require("./assets/fonts/RobotoCondensed-BoldItalic.ttf"),
    "RobotoCondensed-Italic": require("./assets/fonts/RobotoCondensed-Italic.ttf"),
    "RobotoCondensed-Light": require("./assets/fonts/RobotoCondensed-Light.ttf"),
    "RobotoCondensed-LightItalic": require("./assets/fonts/RobotoCondensed-LightItalic.ttf"),
    "RobotoCondensed-Regular": require("./assets/fonts/RobotoCondensed-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <RegistrationScreen />
      {/* <ListExampleScreen /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf5e6',
  },
});
