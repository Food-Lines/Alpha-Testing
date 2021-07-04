import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'

// icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
import {MainRoutes} from '../Navigators/routes'

// formik
import { Formik } from 'formik'

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
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from '../Components/styles'

// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper'
import { useReduxDispatch } from '../Redux'

import { login } from '../Redux/slices/user'

// Colors
const { brand, darkLight, primary } = Colors

const SignIn = ({ navigation }): React.ReactElement => {
  const dispatch = useReduxDispatch()
  const [hidePassword, setHidePassword] = useState(true)
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>
          <PageLogo
            resizeMode="cover"
            source={require('../Assets/mockLogo.png')}
          />
          <PageTitle>Food Lines</PageTitle>
          <SubTitle>Account Login</SubTitle>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={async (values) => {
              const resultAction = await dispatch(login({ ...values }))
              if (login.fulfilled.match(resultAction)) {
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
                <View>
                  <LeftIcon>
                    <Octicons name="person" size={30} color={brand} />
                  </LeftIcon>
                  <StyledInputLabel>Email</StyledInputLabel>
                  <StyledTextInput
                    name="email"
                    label="Email"
                    placeholder="greendog21@foodlines.com"
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                </View>
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
                <StyledButton onPress={handleSubmit} title="Submit">
                  <ButtonText>Login</ButtonText>
                </StyledButton>
                <ExtraView>
                  <ExtraText>Forgot Password?</ExtraText>
                  <TextLink onPress={() => navigation.navigate('ConfirmEmail')}>
                    <TextLinkContent> Reset</TextLinkContent>
                  </TextLink>
                </ExtraView>
                <Line />
                <StyledButton google onPress={handleSubmit}>
                  <Fontisto name="google" color={primary} size={25} />
                  <ButtonText google>Sign in with Google</ButtonText>
                </StyledButton>
                <ExtraView>
                  <ExtraText>Don't have an account already?</ExtraText>
                  <TextLink onPress={() => navigation.navigate(MainRoutes.SignUp)}>
                    <TextLinkContent> Sign up</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
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

export default SignIn
