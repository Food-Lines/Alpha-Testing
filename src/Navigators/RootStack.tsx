import React from 'react'

// Colors

// React Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Colors } from '../Components/styles'

// Screens
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

const Stack = createStackNavigator()

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
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
        initialRouteName="Sign in"
      >
        <Stack.Screen name="Sign in" component={SignIn} />
        <Stack.Screen name="Sign up" component={SignUp} />
        <Stack.Screen
          options={{ headerTintColor: primary }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Confirmation" component={Confirmation} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack
