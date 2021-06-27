import React, { useState } from 'react'
import { StatusBar } from 'react-native'

import OTPInput from 'react-native-otp'
import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  StyledFormArea,
  StyledButton,
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

// Colors
const { brand, darkLight, primary, black } = Colors

const OTP = ({ navigation }): React.ReactElement => {
  const [otp, setOTP] = useState('')

  const onChangeOTPHandler = (value) => {
    setOTP(value)
    console.log(otp)
  }

  const resendOTPHandler = () => {}

  const onSubmitHandler = () => {
    navigation.navigate('ResetPassword')
  }
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar />
        <InnerContainer>
          <PageLogo
            resizeMode="contain"
            source={require('../Assets/code.png')}
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
                {' '}
                Resend Code
              </TextLinkContent>
            </TextLink>
          </ExtraView>
          <StyledFormArea>
            <Line style={{ width: '89%', marginLeft: 18 }} />
            <StyledButton
              style={{ marginLeft: 18, width: '90%' }}
              onPress={onSubmitHandler}
            >
              <ButtonText>Next</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  )
}

export default OTP
