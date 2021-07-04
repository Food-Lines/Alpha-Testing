import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

// icons
import { Octicons, Ionicons } from '@expo/vector-icons'
import {MainRoutes} from '../Navigators/routes'

// formik
import { Formik } from 'formik'

import {
  KeyboardAvoidingView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Platform,
} from 'react-native'
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  PageLogo,
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
} from '../Components/styles'
import { useReduxDispatch } from '../Redux'
import { signup } from '../Redux/slices/user'

// Colors
const { brand, darkLight } = Colors

const SignUp = ({ navigation }): React.ReactElement => {
  const [hidePassword, setHidePassword] = useState(true)
  const dispatch = useReduxDispatch()

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView style={{ backgroundColor: '#ffffff' }}>
          <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
              <PageLogo
                resizeMode="cover"
                source={require('../Assets/mockLogo.png')}
              />
              <PageTitle>Food Lines</PageTitle>
              <SubTitle>Account Sign Up</SubTitle>
              <Formik
                initialValues={{
                  fullName: '',
                  email: '',
                  username: '',
                  password: '',
                  confirmPassword: '',
                }}
                onSubmit={async (values) => {
                  const resultAction = await dispatch(signup({ ...values }))
                  if (signup.fulfilled.match(resultAction)) {
                    // user will have a type signature of User as we passed that as the Returned parameter in createAsyncThunk
                    const user = resultAction.payload
                    alert('Success')
                  } else {
                    alert(`Fail: ${resultAction.payload}`)
                  }
                  console.log(values)
                }}
              >
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                  <StyledFormArea>
                    <MyTextInput
                      label="Full Name"
                      icon="person"
                      placeholder="John Smith"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('fullName')}
                      onBlur={handleBlur('fullName')}
                      value={values.fullName}
                      isPassword={false}
                      hidePassword={false}
                      setHidePassword={false}
                    />

                    <MyTextInput
                      label="Email"
                      icon="mail"
                      placeholder="greendog21@gmail.com"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      value={values.email}
                      isPassword={false}
                      hidePassword={false}
                      setHidePassword={false}
                    />

                    {/* <MyTextInput
                      label="Username"
                      icon="person"
                      placeholder="greendog21"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('username')}
                      onBlur={handleBlur('username')}
                      value={values.username}
                      isPassword={false}
                      hidePassword={false}
                      setHidePassword={false}
                    /> */}
                    <MyTextInput
                      label="Password"
                      icon="lock"
                      placeholder="* * * * * * * *"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                      secureTextEntry={hidePassword}
                      isPassword
                      hidePassword={hidePassword}
                      setHidePassword={setHidePassword}
                    />
                    <MyTextInput
                      label="Confirm Password"
                      icon="lock"
                      placeholder="* * * * * * * *"
                      placeholderTextColor={darkLight}
                      onChangeText={handleChange('confirmPassword')}
                      onBlur={handleBlur('confirmPassword')}
                      value={values.confirmPassword}
                      secureTextEntry={hidePassword}
                      isPassword
                      hidePassword={hidePassword}
                      setHidePassword={setHidePassword}
                    />
                    <StyledButton
                      onPress={handleSubmit} title="Submit"
                    >
                      <ButtonText>Register</ButtonText>
                    </StyledButton>
                    <Line />
                    <ExtraView>
                      <ExtraText>Have an acount already?</ExtraText>
                      <TextLink onPress={() => navigation.navigate(MainRoutes.SignIn)}>
                        <TextLinkContent> Log In</TextLinkContent>
                      </TextLink>
                    </ExtraView>
                  </StyledFormArea>
                )}
              </Formik>
            </InnerContainer>
          </StyledContainer>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

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
            name={hidePassword ? 'md-eye-off' : 'md-eye'}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  )
}

export default SignUp
