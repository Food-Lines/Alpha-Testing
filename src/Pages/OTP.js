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

const OTP = ({ navigation }) => {
  const [otp, setOTP] = useState("");

  const onChangeOTPHandler = (value) => {
    setOTP(value);
    console.log(otp);
  };

  const resendOTPHandler = () => {
    return;
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
          <ExtraView>
            <ExtraText style={{ fontSize: 12 }}>Didn't Recieve Code?</ExtraText>
            <TextLink onPress={resendOTPHandler}>
              <TextLinkContent style={{ fontSize: 12 }}>
                {" "}
                Resend Code
              </TextLinkContent>
            </TextLink>
          </ExtraView>
          <StyledFormArea>
            <Line style={{ width: "89%", marginLeft: 18 }} />
            <StyledButton
              style={{ marginLeft: 18, width: "90%" }}
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

export default OTP;
