import React, { useState } from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";

import OTPInput from "react-native-otp";

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  StyledTransparentButton,
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

//Colors
const { brand, darkLight, primary, black } = Colors;

//KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from "./../Components/KeyboardAvoidingWrapper";

const ResetPassword = ({ navigation }) => {
  const [otp, setOTP] = useState("");

  const onChangeOTPHandler = (value) => {
    setOTP(value);
    console.log(otp);
  };

  const onSubmitHandler = () => {
    navigation.navigate("ResetPassword");
  };
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo
            resizeMode="contain"
            source={require("./../Assets/code.png")}
          />
          <PageTitle>Verification</PageTitle>
          <ExtraView>
            <ExtraText
              style={{ fontSize: 12, paddingLeft: 30, paddingRight: 30 }}
            >
              Enterd One Time Password sent to greendog@gmail.com
            </ExtraText>
          </ExtraView>
          <OTPInput
            tintColor="#FB6C6A"
            offTintColor="#BBBCBE"
            otpLength={6}
            onChange={onChangeOTPHandler}
            value={otp}
          />
          <StyledFormArea>
            <StyledTransparentButton
              style={{ marginTop: 5 }}
              onPress={() => {}}
            >
              <ButtonText style={{ color: "#000000", fontSize: 12 }}>
                Resend code
              </ButtonText>
            </StyledTransparentButton>
            <Line style={{ width: "89%", marginLeft: 18 }} />
            <StyledButton
              style={{
                marginLeft: 18,
                marginRight: 18,
              }}
              onPress={onSubmitHandler}
            >
              <ButtonText>Next</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default ResetPassword;
