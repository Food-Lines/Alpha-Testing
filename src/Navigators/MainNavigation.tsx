import React, { useCallback, useEffect } from 'react'
import * as Linking from 'expo-linking'

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

//Screens Main
import NavBar from '../Pages/NavBar'

//Demo Pages
import DemoHome from '../Pages/Demo/DemoHome'

const { primary, white, black } = Colors
import userSlice from '../Redux/slices/user'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { DrawerContent } from '../Components/DrawerContent'

import { getDatabase, ref, get, query } from 'firebase/database'

export type resetParams = {
  mode: string
  oobCode: string
}

const HomeNavigator = (): React.ReactElement => {
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name={MainRoutes.NavBar} component={NavBar} />
    </Drawer.Navigator>
  )
}

//For Demo
const HomeNavigator2 = (): React.ReactElement => {
  const Drawer = createDrawerNavigator()
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name={MainRoutes.DemoHome} component={DemoHome} />
    </Drawer.Navigator>
  )
}

const AuthNavigator = (): React.ReactElement => {
  return (
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
      initialRouteName={MainRoutes.SplashScreen}
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
  )
}

const MainNavigator = (): React.ReactElement => {
  const reduxUser = useReduxSelector(selectUser)
  const dispatch = useReduxDispatch()

  let auth = false
  const user = getAuth(Firebase).currentUser
  const missingVal = Object.values(reduxUser).some((x) => x == null || x == '')

  if (user && reduxUser.uid === user.uid) auth = true
  // else if (user && missingVal) {
  //   console.log('fetch')
  //   var dataRef = ref(
  //     getDatabase(
  //       Firebase,
  //       'https://food-lines-40c3c-default-rtdb.firebaseio.com/'
  //     ),
  //     'users/' + reduxUser.uid
  //   )
  //   get(query(dataRef))
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         const coreUser = {
  //           uid: user.uid,
  //           email: user.email,
  //           fullName: user.displayName,
  //         }
  //         const userData = { ...snapshot.val(), ...coreUser }
  //         dispatch(
  //           userSlice.actions.setUser({
  //             ...userData,
  //           })
  //         )
  //         auth = true
  //       } else {
  //         console.log('No data available')
  //         auth = false
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //       auth = false
  //     })} e
  else if (!user) {
    dispatch(
      userSlice.actions.setUser({
        email: null as string,
        fullName: null as string,
        uid: null as string,
        syscoEmail: null as string,
        syscoPassword: null as string,
        usFoodsPassword: null as string,
        usFoodID: null as string,
      })
    )
    auth = false
  } else auth = false

  console.log(reduxUser)

  if (!auth) return <AuthNavigator />
  else return <HomeNavigator2 />
}

const MainNavigation = (): React.ReactElement => {
  return <MainNavigator></MainNavigator>
}

export default MainNavigation
