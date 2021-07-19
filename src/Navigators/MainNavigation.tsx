import React from 'react'

// Colors

// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { Colors } from '../Components/styles'
import { MainStack, MainRoutes } from './routes'
import { useReduxSelector } from '../Redux'
import { selectUser } from '../Redux/slices/user'

//Screens Auth
import SplashScreen from '../Pages/SplashScreen'
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import ConfirmEmail from '../Pages/ConfirmEmail'
import OTP from '../Pages/OTP'
import ResetPassword from '../Pages/ResetPassword'
import Confirmation from '../Pages/Confirmation'

//Screens Main
import NavBar from '../Pages/NavBar'

const { primary, tertiary, white } = Colors

const MainNavigation = (): React.ReactElement => {
  const user = useReduxSelector(selectUser)

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: white,
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
        initialRouteName={MainRoutes.SplashScreen}
      >
        {user ? (
          <>
            <MainStack.Screen name={MainRoutes.SplashScreen} component={SplashScreen} />
            <MainStack.Screen name={MainRoutes.SignIn} component={SignIn} options={{headerShown: false}} />
            <MainStack.Screen name={MainRoutes.SignUp} component={SignUp} /> 
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
