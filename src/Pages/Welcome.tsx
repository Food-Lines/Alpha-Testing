import React from 'react'
import { StatusBar } from 'expo-status-bar'

import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  WelcomeImage,
  Avatar,
} from '../Components/styles'

const Welcome = ({ navigation }) => {
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>
        <WelcomeImage
          resizeMode="contain"
          source={require('../Assets/backgroundImage.jpg')}
        />
        <WelcomeContainer>
          <PageTitle welcome>Welcome</PageTitle>
          <SubTitle welcome>John Smith</SubTitle>
          <StyledFormArea>
            <Avatar
              resizeMode="cover"
              source={require('../Assets/mockPFP.jpg')}
            />
            <Line />
            <StyledButton title="Submit">
              <ButtonText>Go to Console</ButtonText>
            </StyledButton>
            <StyledButton
              onPress={() => {
                navigation.navigate('Sign in')
              }}
              title="Submit"
            >
              <ButtonText>Log Out</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  )
}

export default Welcome
