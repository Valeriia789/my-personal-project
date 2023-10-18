import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";

export const RegistrationScreen = () => {
  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.steps}>Step 1</Text>
        <Text style={styles.stepTitle}>Enter your name</Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.steps}>Step 2</Text>
        <Text style={styles.stepTitle}>Enter your email</Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.steps}>Step 3</Text>
        <Text style={styles.stepTitle}>Create a safe password</Text>
        <TextInput style={styles.input}></TextInput>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  // height: Platform.OS === "ios" ? 50 : 100,
  formContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputContainer: {
    padding: 8,
  },

  steps: {
    fontFamily: 'RobotoCondensed-Light',
    textAlign: "left",
    fontSize: 14,
  },

  stepTitle: {
    fontFamily: 'RobotoCondensed-Bold',
    textAlign: "center",
    fontSize: 16,
  },

  input: {
    width: 200,
    padding: 6,
    backgroundColor: "#ff77",

    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 20,
  },
});
