import React, { useState } from 'react'
import {
  View,
  StyleSheet,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { getAuth } from 'firebase/auth'
import Firebase from '../../config/Firebase.js'
import { getDatabase, ref, get, query } from 'firebase/database'
import userSlice, { selectUser } from '../Redux/slices/user'

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
import { useReduxDispatch, useReduxSelector } from '../Redux'
import { login } from '../Redux/slices/user'

// Colors
const { primary, white, black, grey, red, greyLight } = Colors

//Gradient
import { LinearGradient } from 'expo-linear-gradient'

//Animations
import * as Animatable from 'react-native-animatable'
import LoadingSpinner from '../Components/LoadingSpinner'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

const SignIn = ({ navigation }): React.ReactElement => {
  const dispatch = useReduxDispatch()
  const reduxUser = useReduxSelector(selectUser)
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState({
    email: '',
    password: '',
    check_email: false,
    secureTextEntry: true,
    isValidEmail: true,
    isValidPassword: true,
    correctUserPassword: true,
  })

  //Handlers

  const onEmailChangeHandler = (val) => {
    if (val.trim().length >= 6 && val.includes('@')) {
      setData({
        ...data,
        email: val,
        check_email: true,
        isValidEmail: true,
        correctUserPassword: true,
      })
    } else {
      setData({
        ...data,
        email: val,
        check_email: false,
        isValidEmail: false,
        correctUserPassword: true,
      })
    }
  }

  const onPasswordChangeHandler = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
        correctUserPassword: true,
      })
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
        correctUserPassword: true,
      })
    }
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    })
  }

  const onSubmitHandler = async () => {
    setLoading(true)
    if (!data.isValidEmail || !data.isValidPassword) {
      setLoading(false)
      return
    }
    const { email, password } = data
    const resultAction = await dispatch(login({ email, password }))
    const user = getAuth(Firebase).currentUser

    if (login.fulfilled.match(resultAction)) {
      // user will have a type signature of User as we passed that as the Returned parameter in createAsyncThunk
      // const user = resultAction.payload
      console.log('Success')
      // console.log("fetch")
      // var dataRef  = ref(getDatabase(Firebase, 'https://food-lines-40c3c-default-rtdb.firebaseio.com/'), 'users/' + reduxUser.uid)
      // get(query(dataRef)).then((snapshot) => {
      //   if (snapshot.exists()) {
      //     const coreUser = {uid: user.uid, email: user.email, fullName: user.displayName}
      //     const userData =  {...snapshot.val(), ...coreUser}
      //     dispatch(
      //       userSlice.actions.setUser({
      //         ...userData
      //       })
      //     )
      //   } else {
      //     console.log("No data available");
      //   }
      // }).catch((error) => {
      //   console.error(error);
      // });
    } else {
      setLoading(false)
      setData({
        ...data,
        correctUserPassword: false,
        check_email: false,
      })
    }
  }

  //Components

  const SignOutButton = () => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(MainRoutes.SignUp)}
        style={[
          styles.signIn,
          {
            borderColor: primary,
            borderWidth: 1,
            marginTop: 15,
          },
        ]}
      >
        <SignInTextSign style={{ color: primary }}>Sign Up</SignInTextSign>
      </TouchableOpacity>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <StyledContainerFullScreen>
        <StatusBar barStyle="light-content" />

        <SignInHeader>
          <SignInTextHeader>Welcome!</SignInTextHeader>
        </SignInHeader>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <KeyboardAwareScrollView keyboardShouldPersistTaps="always">
            <StyledFormArea>
              <SignInTextFooter>Email</SignInTextFooter>

              <SignInAction
                style={{
                  borderBottomColor: data.correctUserPassword ? greyLight : red,
                  borderBottomWidth: data.correctUserPassword ? 1 : 2,
                }}
              >
                <FontAwesome name="user-o" color={black} size={20} />
                <TextInput
                  style={styles.textInput}
                  placeholder="user@provider.com"
                  autoCapitalize="none"
                  onChangeText={(val) => onEmailChangeHandler(val)}
                  keyboardType="email-address"
                />
                {data.check_email ? (
                  <Animatable.View animation="bounceIn">
                    <Feather name="check-circle" color="green" size={20} />
                  </Animatable.View>
                ) : null}
              </SignInAction>
              {!data.isValidEmail || !data.correctUserPassword ? (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  {data.correctUserPassword ? (
                    <ErrorMsg>Must be a Valid Email.</ErrorMsg>
                  ) : (
                    <ErrorMsg>Username or Password Invalid.</ErrorMsg>
                  )}
                </Animatable.View>
              ) : null}

              <SignInTextFooter style={{ marginTop: 35 }}>
                Password
              </SignInTextFooter>
              <SignInAction
                style={{
                  borderBottomColor: data.correctUserPassword ? greyLight : red,
                  borderBottomWidth: data.correctUserPassword ? 1 : 2,
                }}
              >
                <FontAwesome name="lock" color={black} size={20} />
                <TextInput
                  style={styles.textInput}
                  placeholder="* * * * * * * * *"
                  autoCapitalize="none"
                  secureTextEntry={data.secureTextEntry ? true : false}
                  onChangeText={(val) => onPasswordChangeHandler(val)}
                />
                <TouchableOpacity onPress={updateSecureTextEntry}>
                  {data.secureTextEntry ? (
                    <Feather name="eye-off" color={grey} size={20} />
                  ) : (
                    <Feather name="eye" color={grey} size={20} />
                  )}
                </TouchableOpacity>
              </SignInAction>
              {data.isValidPassword ? null : (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <ErrorMsg>
                    Password must be at least 8 characters long.
                  </ErrorMsg>
                </Animatable.View>
              )}

              <ForgetPassword
                onPress={() => navigation.navigate(MainRoutes.ConfirmEmail)}
              >
                <Text style={{ fontSize: 14, color: primary }}>
                  Forgot Password?
                </Text>
              </ForgetPassword>

              <SignInButton onPress={async () => await onSubmitHandler()}>
                <LinearGradient
                  colors={['#FFA07A', '#FF6347']}
                  style={styles.signIn}
                >
                  {loading ? (
                    <LoadingSpinner color={white} />
                  ) : (
                    <SignInTextSign>Sign In</SignInTextSign>
                  )}
                </LinearGradient>
              </SignInButton>
              <SignOutButton />
            </StyledFormArea>
          </KeyboardAwareScrollView>
        </Animatable.View>
      </StyledContainerFullScreen>
    </TouchableWithoutFeedback>
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
    backgroundColor: '#fff',
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
})
