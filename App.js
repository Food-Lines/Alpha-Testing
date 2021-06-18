import * as React from "react";
import { Text } from "react-native-paper";
import { NativeRouter, Route, Router } from "react-router-native";
import SplashScreen from "react-native-splash-screen";
import SignIn from "./src/Pages/SignIn";

const App = () => {
  return (
    <NativeRouter>
      <Route path="/" exact component={SignIn}></Route>
    </NativeRouter>
  );
};

export default App;
