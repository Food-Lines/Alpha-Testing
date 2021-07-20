import React, { useState } from 'react'


//Routes
import { MainRoutes } from '../Navigators/routes'

// formik
import { Formik } from 'formik'

import {
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native'

//Components
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
  ErrorMsg,
} from '../Components/styles'

// icons
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper'

//Redux
import { useReduxDispatch } from '../Redux'
import { signup } from '../Redux/slices/user'

// Colors
const { brand, darkLight, primary, white, black, grey, red} = Colors

//Gradient
import { LinearGradient } from 'expo-linear-gradient';

//Animations
import * as Animatable from 'react-native-animatable';

const SignUp = ({ navigation }): React.ReactElement => {
  const [hidePassword, setHidePassword] = useState(true)
  const dispatch = useReduxDispatch()

  const [data, setData] = useState({
    email: '',
    password:'',
    confirmPassword: '',
    bday: '',
    check_email: false, //For green animation
    check_bday: false, //For green animation
    secureTextEntry: true,
    confirmSecureTextEntry: true,
    isValidEmail: true,
    isValidDOB: true, 
    isValidPassword: true,
    isValidConfirmPassword: true,
  })

  //Handlers

  const onEmailChangeHandler = (val) =>{
    if (val.length >= 6 && val.includes('@') && val.includes('.')) {
      setData({
        ...data,
        email: val,
        check_email: true,
        isValidEmail: true,
      })
    } else {
      setData({
        ...data,
        email: val,
        check_email: false,
        isValidEmail: false,

      })
    }
  }

  const onPasswordChangeHandler = (val) =>{
    if (val.trim().length >=8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true
      })
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false


      })
    }

  }

  const onConfirmPasswordChangeHandler = (val) =>{
    if (val.trim() === data.password) {
      setData({
        ...data,
        confirmPassword: val,
        isValidConfirmPassword: true
      })
    } else {
      setData({
        ...data,
        confirmPassword: val,
        isValidConfirmPassword: false


      })
    }
}

  const onBdayChangeHandler = (val) => {
    if (val.length === 10 && val.includes('/')) { 
      setData({
        ...data,
        bday: val,
        check_bday: true,
        isValidDOB: true,
      })
    } else {
      setData({
        ...data,
        bday: val,
        check_bday: false,
        isValidDOB: true,
      })
    }

  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirmSecureTextEntry: !data.confirmSecureTextEntry
    })
  }

  const onSubmitHandler = () => {
    console.log(data.email, data.password )
  }

//Components
const RegisterButton = () => {
  return (
    <TouchableOpacity onPress={()=>onSubmitHandler} style={[styles.signIn, {marginTop: 30}]}>
      <LinearGradient
        colors={['#FFA07A', '#FF6347']}
        style={styles.signIn}
                >
        <SignInTextSign>Register</SignInTextSign>
      </LinearGradient>
    </TouchableOpacity>

  )
}

const SignInButton = () => {
  return (
    <TouchableOpacity onPress={()=>navigation.goBack()} style={[styles.signIn, {
      borderColor: primary,
      borderWidth: 1,
      marginTop: 15, 
      }]}>
        <SignInTextSign style={{color: primary}}>Sign In</SignInTextSign>
    </TouchableOpacity>
  )
}



  return (
    <KeyboardAvoidingWrapper>
      <StyledContainerFullScreen>
        <StatusBar barStyle="light-content" />
        <SignInHeader>
          <SignInTextHeader>Sign Up Now!</SignInTextHeader>
        </SignInHeader>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <StyledFormArea>

            <SignInTextFooter>Email</SignInTextFooter>
            <SignInAction>
              <FontAwesome name="user-o" color={black} size={20} />
              <TextInput 
              style={styles.textInput} 
              placeholder="user@provider.com" autoCapitalize="none" 
              onChangeText={(val)=>onEmailChangeHandler(val)} 
              keyboardType='email-address'
              />
              {data.check_email ?
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
            : null}
            </SignInAction>
            {data.isValidEmail ?  null :
            <Animatable.View animation="fadeInLeft" duration={500}>
              <ErrorMsg>Must be a Valid Email</ErrorMsg>
            </Animatable.View>
            }

            <SignInTextFooter style={{marginTop: 35}}>Date of Birth</SignInTextFooter>
            <SignInAction>
              <FontAwesome name="calendar-o" color={black} size={20} />
              <TextInput 
              style={styles.textInput} 
              placeholder="08/30/2003" autoCapitalize="none" 
              onChangeText={(val)=>onBdayChangeHandler(val)} />
              {data.check_bday ?
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={20} />
              </Animatable.View>
              : null}
            </SignInAction>
            {data.isValidDOB ?  null :
            <Animatable.View animation="fadeInLeft" duration={500}>
              <ErrorMsg>Must be a birthday.</ErrorMsg>
            </Animatable.View>
            }

            <SignInTextFooter style={{marginTop: 35}}>Password</SignInTextFooter>
            <SignInAction>
              <FontAwesome name="lock" color={black} size={20} />
              <TextInput 
                style={styles.textInput} 
                placeholder="* * * * * * * * *" 
                autoCapitalize="none" 
                secureTextEntry={data.secureTextEntry ? true: false} 
                onChangeText={(val)=>onPasswordChangeHandler(val)}
              />
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ?
                <Feather name="eye-off" color={grey} size={20} />
                : 
                <Feather name="eye" color={grey} size={20} />
                }
              </TouchableOpacity>
            </SignInAction>
            {data.isValidPassword ?  null :
            <Animatable.View animation="fadeInLeft" duration={500}>
              <ErrorMsg>Password must be at least 8 characters long.</ErrorMsg>
            </Animatable.View>
            }

            <SignInTextFooter style={{marginTop: 35}}>Confirm Password</SignInTextFooter>
            <SignInAction>
              <FontAwesome name="lock" color={black} size={20} />
              <TextInput 
                style={styles.textInput} 
                placeholder="* * * * * * * * *" 
                autoCapitalize="none" 
                secureTextEntry={data.confirmSecureTextEntry ? true: false} 
                onChangeText={(val)=>onConfirmPasswordChangeHandler(val)}
              />
              <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                {data.confirmSecureTextEntry ?
                <Feather name="eye-off" color={grey} size={20} />
                : 
                <Feather name="eye" color={grey} size={20} />
                }
              </TouchableOpacity>
            </SignInAction>
            {data.isValidConfirmPassword ?  null :
            <Animatable.View animation="fadeInLeft" duration={500}>
              <ErrorMsg>Must match password.</ErrorMsg>
            </Animatable.View>
            }

            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By signing up you agree to our
                </Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>{" "}Terms of service</Text>
                <Text style={styles.color_textPrivate}>{" "}and</Text>
                <Text style={[styles.color_textPrivate, {fontWeight: 'bold'}]}>Privacy policy</Text>
            </View>

            <RegisterButton />
            <SignInButton />

          </StyledFormArea>
        </Animatable.View>
      </StyledContainerFullScreen>
    </KeyboardAvoidingWrapper>
    // <KeyboardAvoidingView
    //   style={{ flex: 1 }}
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    // >
    //   <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    //     <ScrollView style={{ backgroundColor: '#ffffff' }}>
    //       <StyledContainer>
    //         <StatusBar style="dark" />
    //         <InnerContainer>
    //           <PageLogo
    //             resizeMode="cover"
    //             source={require('../Assets/mockLogo.png')}
    //           />
    //           <PageTitle>Food Lines</PageTitle>
    //           <SubTitle>Account Sign Up</SubTitle>
    //           <Formik
    //             initialValues={{
    //               fullName: '',
    //               email: '',
    //               username: '',
    //               password: '',
    //               confirmPassword: '',
    //             }}
    //             onSubmit={async (values) => {
    //               const resultAction = await dispatch(signup({ ...values }))
    //               if (signup.fulfilled.match(resultAction)) {
    //                 // user will have a type signature of User as we passed that as the Returned parameter in createAsyncThunk
    //                 const user = resultAction.payload
    //                 alert('Success')
    //               } else {
    //                 alert(`Fail: ${resultAction.payload}`)
    //               }
    //               console.log(values)
    //             }}
    //           >
    //             {({ handleChange, handleBlur, handleSubmit, values }) => (
    //               <StyledFormArea>
    //                 <MyTextInput
    //                   label="Full Name"
    //                   icon="person"
    //                   placeholder="John Smith"
    //                   placeholderTextColor={darkLight}
    //                   onChangeText={handleChange('fullName')}
    //                   onBlur={handleBlur('fullName')}
    //                   value={values.fullName}
    //                   isPassword={false}
    //                   hidePassword={false}
    //                   setHidePassword={false}
    //                 />

    //                 <MyTextInput
    //                   label="Email"
    //                   icon="mail"
    //                   placeholder="greendog21@gmail.com"
    //                   placeholderTextColor={darkLight}
    //                   onChangeText={handleChange('email')}
    //                   onBlur={handleBlur('email')}
    //                   value={values.email}
    //                   isPassword={false}
    //                   hidePassword={false}
    //                   setHidePassword={false}
    //                 />

    //                 {/* <MyTextInput
    //                   label="Username"
    //                   icon="person"
    //                   placeholder="greendog21"
    //                   placeholderTextColor={darkLight}
    //                   onChangeText={handleChange('username')}
    //                   onBlur={handleBlur('username')}
    //                   value={values.username}
    //                   isPassword={false}
    //                   hidePassword={false}
    //                   setHidePassword={false}
    //                 /> */}
    //                 <MyTextInput
    //                   label="Password"
    //                   icon="lock"
    //                   placeholder="* * * * * * * *"
    //                   placeholderTextColor={darkLight}
    //                   onChangeText={handleChange('password')}
    //                   onBlur={handleBlur('password')}
    //                   value={values.password}
    //                   secureTextEntry={hidePassword}
    //                   isPassword
    //                   hidePassword={hidePassword}
    //                   setHidePassword={setHidePassword}
    //                 />
    //                 <MyTextInput
    //                   label="Confirm Password"
    //                   icon="lock"
    //                   placeholder="* * * * * * * *"
    //                   placeholderTextColor={darkLight}
    //                   onChangeText={handleChange('confirmPassword')}
    //                   onBlur={handleBlur('confirmPassword')}
    //                   value={values.confirmPassword}
    //                   secureTextEntry={hidePassword}
    //                   isPassword
    //                   hidePassword={hidePassword}
    //                   setHidePassword={setHidePassword}
    //                 />
    //                 <StyledButton onPress={handleSubmit} title="Submit">
    //                   <ButtonText>Register</ButtonText>
    //                 </StyledButton>
    //                 <Line />
    //                 <ExtraView>
    //                   <ExtraText>Have an acount already?</ExtraText>
    //                   <TextLink
    //                     onPress={() => navigation.navigate(MainRoutes.SignIn)}
    //                   >
    //                     <TextLinkContent> Log In</TextLinkContent>
    //                   </TextLink>
    //                 </ExtraView>
    //               </StyledFormArea>
    //             )}
    //           </Formik>
    //         </InnerContainer>
    //       </StyledContainer>
    //     </ScrollView>
    //   </TouchableWithoutFeedback>
    // </KeyboardAvoidingView>
  )
}


export default SignUp

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FF6347'
  },
  header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: Platform.OS === 'ios' ? 3 : 5,
      backgroundColor: white,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: white,
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: black,
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: grey,
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: black,
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  },
  textPrivate: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginTop: 20
  },
  color_textPrivate: {
      color: grey
  }
})
