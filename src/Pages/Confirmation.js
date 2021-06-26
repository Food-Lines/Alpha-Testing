import React from "react";

//icons
import { Octicons, Ionicons } from "@expo/vector-icons";

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

import { View, StatusBar } from "react-native";

//Colors
const { brand, darkLight, primary, black } = Colors;

//KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from "./../Components/KeyboardAvoidingWrapper";

const Confirmation = ({ navigation }) => {
  const onSubmitHandler = () => {
    navigation.navigate("Sign in");
  };
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer style={{ marginTop: 20 }}>
          <PageTitle style={{ fontSize: 40 }}>Password Updated</PageTitle>
          <PageLogo
            style={{ marginTop: 20 }}
            resizeMode="contain"
            source={require("./../Assets/checkMark.png")}
          />
          <SubTitle
            style={{ fontSize: 12, textAlign: "center", marginTop: 30 }}
          >
            Your password has been updated scucessfully! Don't forget it this
            time
          </SubTitle>

          <StyledButton onPress={onSubmitHandler}>
            <ButtonText>Login</ButtonText>
          </StyledButton>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default Confirmation;
