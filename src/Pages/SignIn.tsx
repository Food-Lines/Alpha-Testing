import React, { useState } from 'react'
import { View, StyleSheet, Platform, StatusBar, TextInput, TouchableOpacity} from 'react-native'

// icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather';

//Routes
import { MainRoutes } from '../Navigators/routes'

// formik
import { Formik } from 'formik'

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

// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper'
import { useReduxDispatch } from '../Redux'

import { login } from '../Redux/slices/user'

// Colors
const { brand, darkLight, primary, white, black, grey, red} = Colors

//Gradient
import { LinearGradient } from 'expo-linear-gradient';

//Animations
import * as Animatable from 'react-native-animatable';
import { DataTable } from 'react-native-paper';


const SignIn = ({ navigation }): React.ReactElement => {
  const dispatch = useReduxDispatch()
  const [hidePassword, setHidePassword] = useState(true)
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

  const PasswordTextInput = () => {
    return(
      <View>
        <SignInTextFooter style={{marginTop: 35}}>Password</SignInTextFooter>
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
          <SignInTextHeader>Welcome!</SignInTextHeader>
        </SignInHeader>
        <Animatable.View style={styles.footer} animation="fadeInUpBig">
          <StyledFormArea>
            <EmailTextInput />
            <PasswordTextInput />

            <SignInButton onPress={()=>onSubmitHandler}>
              <LinearGradient
                colors={['#FFA07A', '#FF6347']}
                style={styles.signIn}
                >
                <SignInTextSign>Sign In</SignInTextSign>
              </LinearGradient>
            </SignInButton>

            <TouchableOpacity onPress={()=>navigation.navigate(MainRoutes.SignUp)} style={[styles.signIn, {
              borderColor: primary,
              borderWidth: 1,
              marginTop: 15, 
              }]}>
              <SignInTextSign style={{color: primary}}>Sign Up</SignInTextSign>
            </TouchableOpacity>
          </StyledFormArea>
        </Animatable.View>
      </StyledContainerFullScreen>
    </KeyboardAvoidingWrapper>


    // <KeyboardAvoidingWrapper>
    //   <StyledContainer>
    //     <StatusBar style="dark" />
    //     <InnerContainer>
    //       <PageLogo
    //         resizeMode="cover"
    //         source={require('../Assets/mockLogo.png')}
    //       />
    //       <PageTitle>Food Lines</PageTitle>
    //       <SubTitle>Account Login</SubTitle>
    //       <Formik
    //         initialValues={{ email: '', password: '' }}
    //         onSubmit={async (values) => {
    //           const resultAction = await dispatch(login({ ...values }))
    //           if (login.fulfilled.match(resultAction)) {
    //             // user will have a type signature of User as we passed that as the Returned parameter in createAsyncThunk
    //             const user = resultAction.payload
    //             alert('Success')
    //           } else {
    //             alert(`Fail: ${resultAction.payload}`)
    //           }
    //           console.log(values)
    //         }}
    //       >
    //         {({ handleChange, handleBlur, handleSubmit, values }) => (
    //           <StyledFormArea>
    //             <View>
    //               <LeftIcon>
    //                 <Octicons name="person" size={30} color={brand} />
    //               </LeftIcon>
    //               <StyledInputLabel>Email</StyledInputLabel>
    //               <StyledTextInput
    //                 name="email"
    //                 label="Email"
    //                 placeholder="greendog21@foodlines.com"
    //                 placeholderTextColor={darkLight}
    //                 onChangeText={handleChange('email')}
    //                 onBlur={handleBlur('email')}
    //                 value={values.email}
    //               />
    //             </View>
    //             <MyTextInput
    //               label="Password"
    //               icon="lock"
    //               placeholder="* * * * * * * *"
    //               placeholderTextColor={darkLight}
    //               onChangeText={handleChange('password')}
    //               onBlur={handleBlur('password')}
    //               value={values.password}
    //               secureTextEntry={hidePassword}
    //               isPassword
    //               hidePassword={hidePassword}
    //               setHidePassword={setHidePassword}
    //             />
    //             <StyledButton onPress={handleSubmit} title="Submit">
    //               <ButtonText>Login</ButtonText>
    //             </StyledButton>
    //             <ExtraView>
    //               <ExtraText>Forgot Password?</ExtraText>
    //               <TextLink onPress={() => navigation.navigate('ConfirmEmail')}>
    //                 <TextLinkContent> Reset</TextLinkContent>
    //               </TextLink>
    //             </ExtraView>
    //             <Line />
    //             <StyledButton google onPress={handleSubmit}>
    //               <Fontisto name="google" color={white} size={25} />
    //               <ButtonText google>Sign in with Google</ButtonText>
    //             </StyledButton>
    //             <ExtraView>
    //               <ExtraText>Don't have an account already?</ExtraText>
    //               <TextLink
    //                 onPress={() => navigation.navigate(MainRoutes.SignUp)}
    //               >
    //                 <TextLinkContent> Sign up</TextLinkContent>
    //               </TextLink>
    //             </ExtraView>
    //           </StyledFormArea>
    //         )}
    //       </Formik>
    //     </InnerContainer>
    //   </StyledContainer>
    // </KeyboardAvoidingWrapper>
  )
}

const SignInTextInput = ({
  label,
  iconLeft,
  iconRight,
  color,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props}) => {
  return (
    <View>
      <SignInTextFooter>{label}</SignInTextFooter>
      <SignInAction>
        <FontAwesome name={iconLeft} color={black} size={20} />
          <TextInput style={styles.textInput} {...props}/>
          <Feather name={iconRight} color={color} size={20} />
      </SignInAction>
    </View>

  )
}



export default SignIn


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
