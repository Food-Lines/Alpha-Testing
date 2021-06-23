import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

//icons
import { Octicons, Ionicons } from "@expo/vector-icons";

//formik
import { Formik } from "formik";

//Date Time Picker
import DateTimePicker from "@react-native-community/datetimepicker";

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

import { View, TouchableOpacity } from "react-native";

//Colors
const { brand, darkLight, primary } = Colors;

const SignUp = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date(2000, 0, 1));

  //Actual date of birth to be sent
  const [dob, setDob] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    setDob(currentDate);
  };

  const showDatePicker = () => {
    setShow(true);
  };

  return (
    <StyledContainer>
      <StatusBar style="dark" />
      <InnerContainer>
        <PageTitle>Food Lines</PageTitle>
        <SubTitle>Account Sign Up</SubTitle>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <Formik
          initialValues={{
            fullName: "",
            username: "",
            dateOfBirth: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <MyTextInput
                label="Full Name"
                icon="person"
                placeholder="John Smith"
                placeholderTextColor={darkLight}
                onChangetext={handleChange("fullName")}
                onBlur={handleBlur("fullName")}
                value={values.fullName}
              />

              <MyTextInput
                label="Username"
                icon="person"
                placeholder="greendog21"
                placeholderTextColor={darkLight}
                onChangetext={handleChange("dateOfBirth")}
                onBlur={handleBlur("dateOfBirth")}
                value={values.dateOfBirth}
              />
              <MyTextInput
                label="Date of Birth"
                icon="calendar"
                placeholder="YYYY - MM - DD"
                placeholderTextColor={darkLight}
                onChangetext={handleChange("username")}
                onBlur={handleBlur("username")}
                value={dob ? dob.toDateString() : ""}
                isDate={true}
                editable={false}
                showDatePicker={showDatePicker}
              />
              <MyTextInput
                label="Password"
                icon="lock"
                placeholder="* * * * * * * *"
                placeholderTextColor={darkLight}
                onChangetext={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MyTextInput
                label="Confirm Password"
                icon="lock"
                placeholder="* * * * * * * *"
                placeholderTextColor={darkLight}
                onChangetext={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />
              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Login</ButtonText>
              </StyledButton>
              <Line />
              <ExtraView>
                <ExtraText>Have an acount already?</ExtraText>
                <TextLink>
                  <TextLinkContent> Log In</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
  );
};

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  isDate,
  showDatePicker,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
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

export default SignUp;
