import React from 'react'
import { Provider } from 'react-redux'

import { NavigationContainer } from '@react-navigation/native'

//Drawer

//temporary
const LoggedIn = true

// React Navigation stack
import RootStack from './src/Navigators/MainNavigation'
import NavBar from './src/Pages/NavBar'
import store from './src/Redux'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MainRoutes } from './src/Navigators/routes'
import { DrawerContent } from './src/Components/DrawerContent'
const Drawer = createDrawerNavigator()

const App = (): React.ReactElement => {
  return (
      <Provider store={store}>
        <RootStack/>
      </Provider>
  )
}

export default App
