import React from 'react'

// icons
import { Octicons } from '@expo/vector-icons'

// formik
import { Formik } from 'formik'

import { View, StatusBar } from 'react-native'
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  StyledFormArea,
  StyledButton,
  StyledInputLabel,
  StyledTextInput,
  LeftIcon,
  ButtonText,
  Colors,
  Line,
  ExtraView,
  ExtraText,
} from '../Components/styles'

// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper'

// Colors
const { brand, darkLight, primary, black } = Colors

const ConfirmEmail = ({ navigation }): React.ReactElement => {
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar />
        <InnerContainer>
          <PageLogo resizeMode="cover" source={require('../Assets/lock.png')} />
          <PageTitle>Forget Password</PageTitle>
          <ExtraView>
            <ExtraText style={{ fontSize: 12 }}>
              Provide your accounts email for which you want to reset your
              password
            </ExtraText>
          </ExtraView>
          <Formik
            initialValues={{ email: '' }}
            onSubmit={(values) => {
              console.log(values)
              navigation.navigate('OTP')
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <StyledFormArea>
                <MyTextInput
                  label="email"
                  icon="mail"
                  placeholder="Email"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  isPassword={false}
                  hidePassword={false}
                  setHidePassword={false}
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
  )
}

const MyTextInput = ({ label, icon, ...props }) => {
  return (
    <View>
      <LeftIcon style={{ top: 32 }}>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
    </View>
  )
}

export default ConfirmEmail
