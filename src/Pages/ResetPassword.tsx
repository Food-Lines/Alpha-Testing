import React, { useState } from 'react'

// icons
import { Octicons, Ionicons } from '@expo/vector-icons'

// formik
import { Formik } from 'formik'

import { View, StatusBar } from 'react-native'
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
} from '../Components/styles'

// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper'

// Colors
const { brand, darkLight, primary, black } = Colors

const ResetPassword = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true)
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar />
        <InnerContainer>
          <PageLogo
            resizeMode="cover"
            source={require('../Assets/delta.png')}
          />
          <PageTitle>Reset Password</PageTitle>
          <SubTitle style={{ fontSize: 12 }}>
            Input your new password below.
          </SubTitle>
          <Formik
            initialValues={{
              password: '',
              confirmPassword: '',
            }}
            onSubmit={(values) => {
              console.log(values)
              navigation.navigate('Confirmation')
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
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
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Next</ButtonText>
                </StyledButton>
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

export default ResetPassword
