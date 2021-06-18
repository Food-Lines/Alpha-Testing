import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const SignIn = () => {
  const onFoucs = () => {};

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.topTitle}>WELCOME!</Text>
      <Text style={styles.title}>FOOD LINES</Text>
      <Text style={styles.subTitle}>Sign in to access your console</Text>

      <TextInput
        styles={styles.userInput}
        placeholder="Username"
        keyboardType="text"
        autoCompleteType="username"
        onFocus
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: "#ffffff",
  },
  topTitle: {
    marginTop: 50,
    color: "#20232a",
    textAlign: "left",
    fontSize: 30,
  },
  title: {
    marginTop: 10,
    color: "#20232a",
    textAlign: "left",
    fontSize: 40,
    fontWeight: "bold",
  },
  subTitle: {
    color: "#20232a",
    textAlign: "left",
    fontSize: 15,
  },
  userInput: {
    borderWidth: 1,
    borderColor: "#8c8c8c",
    borderRadius: 5,
  },
});

export default SignIn;
