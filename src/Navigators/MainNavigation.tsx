import React from 'react'

// Colors

// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { Colors } from '../Components/styles'
import { MainStack, MainRoutes } from './routes'
import { useReduxSelector } from '../Redux'
import { selectUser } from '../Redux/slices/user'

// Screens
import SignIn from '../Pages/SignIn'
import SignUp from '../Pages/SignUp'
import Welcome from '../Pages/Welcome'
import ConfirmEmail from '../Pages/ConfirmEmail'
import OTP from '../Pages/OTP'
import ResetPassword from '../Pages/ResetPassword'
import Confirmation from '../Pages/Confirmation'
import Home from '../Pages/Home'

const { primary, tertiary } = Colors

const MainNavigation = (): React.ReactElement => {
  const isLoggedIn = useReduxSelector(selectUser)

  return (
    <NavigationContainer>
      <MainStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: '',
          headerLeftContainerStyle: {
            paddingLeft: 20,
          },
        }}
        initialRouteName={MainRoutes.SignIn}
      >
        {isLoggedIn ? (
          <>
            <MainStack.Screen name={MainRoutes.Home} component={Home} />
          </>
        ) : (
          <>
            <MainStack.Screen name={MainRoutes.SignIn} component={SignIn} />
            <MainStack.Screen name={MainRoutes.SignUp} component={SignUp} />
            <MainStack.Screen name={MainRoutes.Welcome} component={Welcome} />
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
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  )
}
export default MainNavigation
