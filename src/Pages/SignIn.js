import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  const inputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setUsername(event.target.value);
  };

  const onFocusHandler = () => {};

  const submitHandler = (event) => {
    if (username.trim().length === 0) {
      setIsValid(false);
      return;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>FOOD LINES</Text>
      <Text style={styles.subTitle}>Sign in to access your console</Text>
      <View>
        <Text style={(styles.label, { color: !isValid ? "red" : "#525252" })}>
          Username
        </Text>
        <TextInput
          styles={
            (styles.userInput, { borderColor: !isValid ? "red" : "black" })
          }
          placeholder="Username"
          autoCompleteType="username"
          maxLength={20}
          onFocus={onFocusHandler}
          onChange={inputChangeHandler}
        />
        <Text style={styles.label}>Username</Text>
        <TextInput
          styles={styles.userInput}
          placeholder="Password"
          autoCompleteType="username"
          maxLength={20}
          onFocus={onFocusHandler}
        />
        <Button
          style={styles.submitButton}
          title="Sign In"
          backgroundColor="#000000"
          color="#fffffff"
          onPress={submitHandler}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 40,
    backgroundColor: "#ffffff",
  },
  userInputContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
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
  label: {
    flex: 1,
    color: "#525252",
    textAlign: "left",
    fontSize: 15,
  },
  userInput: {
    flex: 2,
    borderWidth: 2,
    padding: 10,
    borderColor: "#8c8c8c",
    borderRadius: 5,
    borderBottomColor: "#8c8c8c",
    borderRightColor: "#8c8c8c",
    borderTopColor: "#8c8c8c",
    borderLeftColor: "#8c8c8c",
    fontSize: 12,
  },
  submitButton: {
    flex: 1,
    padding: 10,
    fontSize: 12,
  },
});

export default SignIn;
