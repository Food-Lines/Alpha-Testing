import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native'

// icons
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

//Routes
import { MainRoutes } from '../Navigators/routes'

import {
  Colors,
  StyledContainerFullScreen,
  SignInAction,
  SignInActionError,
  SignInButton,
  SignInFooter,
  SignInHeader,
  SignInTextFooter,
  SignInTextHeader,
  SignInTextSign,
  SignInView,
  StyledFormArea,
  ForgetPassword,
  ErrorMsg,
} from '../Components/styles'

// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper'

//Redux
import { useReduxDispatch } from '../Redux'
import { login } from '../Redux/slices/user'

// Colors
const { primary, white, black, grey, greyDark, greyLight } = Colors

//Gradient
import { LinearGradient } from 'expo-linear-gradient'

//Animations
import * as Animatable from 'react-native-animatable'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SignIn = ({ navigation }): React.ReactElement => {
  const DetailCardView = ({ title, text, text2 }) => {
    return (
      <View
        style={{
          borderRadius: 25,
          backgroundColor: black,
          opacity: 1,
          shadowColor: greyDark,
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: 5,
          marginBottom: 20,
        }}
      >
        <LinearGradient
          colors={[greyDark, greyLight]}
          start={[0, 0]}
          end={[1, 0]}
          style={{
            borderRadius: 20,
            opacity: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: 20,
            width: '100%',
          }}
        >
          <SignInTextFooter
            style={{ color: white, marginBottom: 5, fontWeight: 'bold' }}
          >
            {title}
          </SignInTextFooter>
          <Text style={styles.textDetails}>{text}</Text>
          <Text style={styles.textDetails}>{text2}</Text>
        </LinearGradient>
      </View>
    )
  }
  return (
    <KeyboardAwareScrollView>
      <StyledContainerFullScreen style={{ backgroundColor: black }}>
        <StatusBar barStyle="light-content" />
        <SignInHeader>
          <SignInTextHeader>About the App</SignInTextHeader>
        </SignInHeader>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <StyledFormArea>
            <DetailCardView
              title="Details"
              text="Hosted by Expo-Cli"
              text2="Built with React Native"
            />
            <DetailCardView
              title="Acknowledgements"
              text="Food Icons by Icon8"
              text2="Photos courtesy of Pexels, Sysco, and US Foods"
            />
            <DetailCardView
              title="Future Plans"
              text="Implementing Shopping Features and Local Vendors"
              text2="Dark Theme"
            />
            <DetailCardView
              title="Copy Right"
              text="Food Lines Technologies © 2021. All Rights Reserved"
              text2="All logos and trademarks within the app belong to their respective owners"
            />
          </StyledFormArea>
        </Animatable.View>
      </StyledContainerFullScreen>
    </KeyboardAwareScrollView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6347',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: black,
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: black,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textDetails: {
    color: white,
    fontSize: 12,
    fontWeight: '300',
  },
})
