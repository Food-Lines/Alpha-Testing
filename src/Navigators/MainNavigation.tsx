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
import NewUserWelcome from '../Pages/NewUserWelcome'
import FoodAccounts from '../Pages/FoodAccounts'

import { getAuth } from 'firebase/auth'
import Firebase from '../../config/Firebase.js'

//Drawer Navigation
import { createDrawerNavigator } from '@react-navigation/drawer'
import NavBar from '../Pages/NavBar'

//Drawer
const Drawer = createDrawerNavigator()
import { DrawerContent } from '../Components/DrawerContent'

const { primary, tertiary, white, black } = Colors
import userSlice from '../Redux/slices/user'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContent } from '../Components/DrawerContent'

const loggedIn = (): boolean => {
  const user = getAuth(Firebase).currentUser
  const reduxUser = useReduxSelector(selectUser)
  if (user && reduxUser.uid === user.uid) return true
  else if (user && reduxUser.uid !== user.uid) {
    userSlice.actions.setUser(user)
    return true
  } else if (!user && reduxUser.uid) {
    userSlice.actions.setUser({
      email: null as string,
      fullName: null as string,
      uid: null as string,
    })
    return false
  } else return false
}

const HomeNavigator = (): React.ReactElement => {
  const Drawer = createDrawerNavigator()
  return (<NavigationContainer>
      <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Drawer.Screen name={MainRoutes.NavBar} component={NavBar} />
      </Drawer.Navigator>
    </NavigationContainer>)
}

const AuthNavigator = (): React.ReactElement => {
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
            paddingLeft: 10,
          },
        }}
        initialRouteName={MainRoutes.NavBar}
      >
            <MainStack.Screen
              name={MainRoutes.SplashScreen}
              component={SplashScreen}
            />
            <MainStack.Screen
              name={MainRoutes.SignIn}
              component={SignIn}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name={MainRoutes.SignUp}
              component={SignUp}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name={MainRoutes.NewUserWelcome}
              component={NewUserWelcome}
              options={{ headerShown: true }}
            />
            <MainStack.Screen
              name={MainRoutes.FoodAccounts}
              component={FoodAccounts}
              options={{ headerShown: true }}
            />

            <MainStack.Screen
              name={MainRoutes.ConfirmEmail}
              component={ConfirmEmail}
              options={{ headerTintColor: white }}
            />
            <MainStack.Screen name={MainRoutes.OTP} component={OTP} />
            <MainStack.Screen
              name={MainRoutes.ResetPassword}
              component={ResetPassword}
              options={{ headerShown: true }}
            />
            <MainStack.Screen
              name={MainRoutes.Confirmation}
              component={Confirmation}
            />
      </MainStack.Navigator> 
    </NavigationContainer>
  )
}

const MainNavigator = (): React.ReactElement => {
  const user = useReduxSelector(selectUser)
  if (!user.uid) return <AuthNavigator />
  else return <HomeNavigator />
}

const MainNavigation = (): React.ReactElement => {
  return (<MainNavigator></MainNavigator>)
}

export default MainNavigation
