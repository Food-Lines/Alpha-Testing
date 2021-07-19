import React, { useState } from 'react'
import { View, StyleSheet, Platform, StatusBar} from 'react-native'

// icons
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'

//Routes
import { MainRoutes } from '../Navigators/routes'

// formik
import { Formik } from 'formik'

import {
  Colors,
  LeftIcon,
  RightIcon,
  StyledTextInput,
  StyledInputLabel,
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

} from '../Components/styles'

// KeyboardAvoidingWrapper
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper'
import { useReduxDispatch } from '../Redux'

import { login } from '../Redux/slices/user'

// Colors
const { brand, darkLight, primary, white } = Colors

const SignIn = ({ navigation }): React.ReactElement => {
  const dispatch = useReduxDispatch()
  const [hidePassword, setHidePassword] = useState(true)
  return (
    <StyledContainerFullScreen>
      <StatusBar barStyle="light-content" />
      <SignInHeader>
        <SignInTextHeader>Welcome!</SignInTextHeader>
      </SignInHeader>
      <SignInFooter>
        <SignInTextFooter>Sign in!</SignInTextFooter>
      </SignInFooter>


    </StyledContainerFullScreen>


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

const MyTextInput = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? 'md-eye-off' : 'md-eye'}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
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
      color: '#05375a',
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
