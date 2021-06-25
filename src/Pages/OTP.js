import React, { useState } from "react";

//otp
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
  const [oneTimePassword, setOneTimePassword] = useState("");

  state = {
    otp: "",
  };

  handleOTPChange = (otp) => {
    this.setState({ otp });
  };

  clearOTP = () => {
    this.setState({ otp: undefined });
  };

  autoFill = () => {
    this.setState({ otp: "221198" });
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
            value={this.state.otp}
            onChange={this.handleOTPChange}
            tintColor="#FB6C6A"
            offTintColor="#BBBCBE"
            otpLength={6}
          />

          <StyledFormArea>
            <Line />
            <StyledButton onPress={() => {}}>
              <ButtonText>Next</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

export default OTP;
