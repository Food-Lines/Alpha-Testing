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

const ConfirmEmail = ({ navigation }) => {
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo
            resizeMode="cover"
            source={require("./../Assets/lock.png")}
          />
          <PageTitle>Forget Password</PageTitle>
          <ExtraView>
            <ExtraText style={{ fontSize: 12 }}>
              Provide your accounts email for which you want to reset your
              password
            </ExtraText>
          </ExtraView>
          <Formik
            initialValues={{ email: "" }}
            onSubmit={(values) => {
              console.log(values);
              navigation.navigate("OTP");
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  icon="mail"
                  placeholder="Email"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                <Line />
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Next</ButtonText>
                </StyledButton>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ label, icon, ...props }) => {
  return (
    <View>
      <LeftIcon style={{ top: 32 }}>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
    </View>
  );
};

export default ConfirmEmail;
