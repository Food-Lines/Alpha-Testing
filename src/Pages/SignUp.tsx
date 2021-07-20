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
    check_textInputChange: false,
    secureTextEntry: true,
  })

  //Handlers

  const onEmailChangeHandler = (val) =>{
    if (val.length === 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: false
      })
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: true

      })
    }
  }

  const onPasswordChangeHandler = (val) =>{

      setData({
        ...data,
        password: val
    })
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
      secureTextEntry: !data.secureTextEntry
    })
  }

  const onSubmitHandler = () => {
    console.log(data.email, data.password )
  }

  //Components
  const EmailTextInput = () => {
    return(
    <View>
      <SignInTextFooter>Email</SignInTextFooter>
      <SignInAction>
          <FontAwesome name="user-o" color={black} size={20} />
          <TextInput style={styles.textInput} placeholder="user@provider.com" autoCapitalize="none" onChangeText={(val)=>onEmailChangeHandler(val)}/>
          {data.check_textInputChange ?
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
          : null}
      </SignInAction>
    </View>
    )
  }
  const BdayTextInput = () => {
    return(
    <View>
      <SignInTextFooter style={{marginTop: 35}}>Date of Birth</SignInTextFooter>
      <SignInAction>
          <FontAwesome name="calendar-o" color={black} size={20} />
          <TextInput style={styles.textInput} placeholder="08/30/2003" autoCapitalize="none" onChangeText={(val)=>onEmailChangeHandler(val)}/>
          {data.check_textInputChange ?
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
          : null}
      </SignInAction>
    </View>
    )
  }

  const PasswordTextInput = (
    {label}
  ) => {
    return(
      <View>
        <SignInTextFooter style={{marginTop: 35}}>{label}</SignInTextFooter>
        <SignInAction>
          <FontAwesome name="lock" color={black} size={20} />
            <TextInput 
              style={styles.textInput} 
              placeholder="* * * * * * * * *" 
              autoCapitalize="none" 
              secureTextEntry={data.secureTextEntry ? true: false} 
              onChange={(val)=>onPasswordChangeHandler(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ?
              <Feather name="eye-off" color={grey} size={20} />
              : 
              <Feather name="eye" color={grey} size={20} />
              }
            </TouchableOpacity>
          </SignInAction>
        </View>
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
            <EmailTextInput />
            <BdayTextInput/>
            <PasswordTextInput label="Password"/>
            <PasswordTextInput label="Confirm Password"/>

            <SignInButton onPress={()=>onSubmitHandler}>
              <LinearGradient
                colors={['#FFA07A', '#FF6347']}
                style={styles.signIn}
                >
                <SignInTextSign>Register</SignInTextSign>
              </LinearGradient>
            </SignInButton>

            <TouchableOpacity onPress={()=>navigation.goBack()} style={[styles.signIn, {
              borderColor: primary,
              borderWidth: 1,
              marginTop: 15, 
              }]}>
              <SignInTextSign style={{color: primary}}>Sign In</SignInTextSign>
            </TouchableOpacity>
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
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
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
  }
});

