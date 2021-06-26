import React from 'react'

// icons

// formik

import { StatusBar } from 'react-native'
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledButton,
  ButtonText,
  Colors,
} from '../Components/styles'

// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper'

// Colors
const { brand, darkLight, primary, black } = Colors

const Confirmation = ({ navigation }) => {
  const onSubmitHandler = () => {
    navigation.navigate('Sign in')
  }
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar />
        <InnerContainer style={{ marginTop: 20 }}>
          <PageTitle style={{ fontSize: 40 }}>Password Updated</PageTitle>
          <PageLogo
            style={{ marginTop: 20 }}
            resizeMode="contain"
            source={require('../Assets/checkMark.png')}
          />
          <SubTitle
            style={{ fontSize: 12, textAlign: 'center', marginTop: 30 }}
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
  )
}

export default Confirmation
