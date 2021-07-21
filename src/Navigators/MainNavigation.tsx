import React from 'react'

// Colors

// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { Colors } from '../Components/styles'
import { MainStack, MainRoutes } from './routes'
import { useReduxDispatch, useReduxSelector } from '../Redux'
import { selectUser } from '../Redux/slices/user'

//Screens Auth
import SplashScreen from '../Pages/SplashScreen'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import ConfirmEmail from '../Pages/ConfirmEmail'
import OTP from '../Pages/OTP'
import ResetPassword from '../Pages/ResetPassword'
import Confirmation from '../Pages/Confirmation'
import {
  getAuth
} from 'firebase/auth'
import Firebase from '../../config/Firebase.js'



//Screens Main
import NavBar from '../Pages/NavBar'

const { primary, tertiary, white, black} = Colors
import  userSlice  from '../Redux/slices/user'

const loggedIn = (): boolean => {
  const user = getAuth(Firebase).currentUser
  const reduxUser = useReduxSelector(selectUser)
  if (user && reduxUser.uid === user.uid) return true
  else if (user && reduxUser.uid !== user.uid) {userSlice.actions.setUser(user); return true}
  else if (!user && reduxUser.uid) {userSlice.actions.setUser({email: null as string, fullName: null as string, uid: null as string}); return false}
  else return false
}

const MainNavigation = (): React.ReactElement => {
  const user = useReduxSelector(selectUser)

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: black,
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
        initialRouteName={MainRoutes.SplashScreen}
      >
        {!user.uid ? (
          <>
            <MainStack.Screen name={MainRoutes.SplashScreen} component={SplashScreen} />
            <MainStack.Screen name={MainRoutes.SignIn} component={SignIn} options={{headerShown: false}} />
            <MainStack.Screen name={MainRoutes.SignUp} component={SignUp} options={{headerShown: false}} /> 
            <MainStack.Screen
              name={MainRoutes.ConfirmEmail}
              component={ConfirmEmail}
            />
            <MainStack.Screen name={MainRoutes.OTP} component={OTP} />
            <MainStack.Screen
              name={MainRoutes.ResetPassword}
              component={ResetPassword}
            />
            <MainStack.Screen
              name={MainRoutes.Confirmation}
              component={Confirmation}
            />
             
          </>
        ) : (
          <>
          <MainStack.Screen name={MainRoutes.NavBar} component={NavBar} />
  
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  )
}

// const MainNavigation = (): React.ReactElement => {
//   const isLoggedIn = useReduxSelector(selectUser)

//   return (
//     <NavigationContainer>
//       <MainStack.Navigator
//         screenOptions={{
//           headerStyle: {
//             backgroundColor: 'transparent',
//           },
//           headerTintColor: tertiary,
//           headerTransparent: true,
//           headerTitle: '',
//           headerLeftContainerStyle: {
//             paddingLeft: 20,
//           },
//         }}
//         initialRouteName={MainRoutes.NavBar}
//       >
//         <>
//           <MainStack.Screen name={MainRoutes.NavBar} component={NavBar} />
//         </>
//       </MainStack.Navigator>
//     </NavigationContainer>
//   )
// }
export default MainNavigation
