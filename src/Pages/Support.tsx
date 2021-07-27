import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
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
  ProfilePicture,
  TextWrapper,
  PageTitle,
  SubTitle,
} from '../Components/styles'

// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper'

//Redux
import { useReduxDispatch } from '../Redux'
import { login } from '../Redux/slices/user'

// Colors
const {
  primary,
  white,
  black,
  grey,
  greyDark,
  greyLight,
  secondary,
  highlight,
} = Colors

//Gradient
import { LinearGradient } from 'expo-linear-gradient'

//Animations
import * as Animatable from 'react-native-animatable'

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
    <StyledContainerFullScreen style={{ backgroundColor: primary }}>
      <StatusBar barStyle="light-content" />
      <SignInHeader>
        <SignInTextHeader style={{ color: white }}>
          Customer Support
        </SignInTextHeader>
      </SignInHeader>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <StyledFormArea>
          <View
            style={{
              borderRadius: 25,
              backgroundColor: white,
              shadowRadius: 8,
              shadowColor: greyDark,
              shadowOffset: { width: 0, height: 1 },
              elevation: 1,
              shadowOpacity: 0.5,
              height: '70%',
              width: '100%',
              justifyContent: 'flex-start',
              alignItems: 'center',
              padding: 20,
            }}
          >
            <Image
              source={require('../Assets/mockPFP.jpg')}
              style={{ borderRadius: 80, width: 90, height: 90, marginTop: 20 }}
            />
            <Text style={styles.textSign}>Bob Smith</Text>
            <Text style={styles.textDetails}>Food {'&'} Beverage Director</Text>
            <TextWrapper style={{ marginTop: 20 }}>
              <View
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightColor: greyLight,
                  borderRightWidth: 1,
                }}
              >
                <Text style={styles.textSignSub}>1500</Text>
                <Text style={styles.textDetails}>Orders</Text>
              </View>
              <View
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightColor: greyLight,
                  borderRightWidth: 1,
                }}
              >
                <Text style={styles.textSignSub}>1500</Text>
                <Text style={styles.textDetails}>Orders</Text>
              </View>
              <View
                style={{
                  paddingVertical: 5,
                  paddingHorizontal: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={styles.textSignSub}>1500</Text>
                <Text style={styles.textDetails}>Orders</Text>
              </View>
            </TextWrapper>
          </View>
          <PageTitle
            style={{ color: black, alignSelf: 'flex-start', marginTop: 10 }}
          >
            Contact
          </PageTitle>
          <View
            style={{ flexDirection: 'row', flexWrap: 'wrap', marginLeft: 10 }}
          >
            <Text style={styles.color_textPrivate}>
              For business-related inquires and issues regarding the app, please
              contact{' '}
              <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>
                support@FoodLines.org.
              </Text>
            </Text>
          </View>
        </StyledFormArea>
      </Animatable.View>
    </StyledContainerFullScreen>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: secondary,
    marginTop: 10,
  },
  textSignSub: {
    fontSize: 20,
    fontWeight: '600',
    color: secondary,
    marginTop: 10,
  },
  textDetails: {
    color: black,
    fontSize: 10,
    fontWeight: '300',
    marginTop: 5,
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: grey,
  },
})
