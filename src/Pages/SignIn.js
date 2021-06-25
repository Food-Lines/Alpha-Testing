import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native";

//icons
import { Octicons, Ionicons, Fontisto } from "@expo/vector-icons";

//formik
import { Formik } from "formik";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  StyledInputLabel,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  ButtonText,
  Colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from "./../Components/styles";

import { View } from "react-native";

//Colors
const { brand, darkLight, primary } = Colors;

//KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from "./../Components/KeyboardAvoidingWrapper";

const SignIn = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo
            resizeMode="cover"
            source={require("./../Assets/mockLogo.png")}
          />
          <PageTitle>Food Lines</PageTitle>
          <SubTitle>Account Login</SubTitle>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => {
              console.log(values);
              navigation.navigate("Welcome");
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <View>
                  <LeftIcon>
                    <Octicons name={"person"} size={30} color={brand} />
                  </LeftIcon>
                  <StyledInputLabel>{"Username"}</StyledInputLabel>
                  <StyledTextInput
                    name="username"
                    placeholder="greendog21"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    value={values.username}
                  />
                </View>
                <MyTextInput
                  label="Password"
                  icon="lock"
                  placeholder="* * * * * * * *"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <StyledButton onPress={handleSubmit} title="Submit">
                  <ButtonText>Login</ButtonText>
                </StyledButton>
                <ExtraView>
                  <ExtraText>Forgot Password?</ExtraText>
                  <TextLink onPress={() => navigation.navigate("ConfirmEmail")}>
                    <TextLinkContent> Reset</TextLinkContent>
                  </TextLink>
                </ExtraView>
                <Line />
                <StyledButton google={true} onPress={handleSubmit}>
                  <Fontisto name="google" color={primary} size={25} />
                  <ButtonText google={true}>Sign in with Google</ButtonText>
                </StyledButton>
                <ExtraView>
                  <ExtraText>Don't have an account already?</ExtraText>
                  <TextLink onPress={() => navigation.navigate("Sign up")}>
                    <TextLinkContent> Sign up</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? "md-eye-off" : "md-eye"}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default SignIn;
