import React from 'react'
import { Dimensions, Text } from 'react-native'
import Sysco from './Sysco'
import UserSettings from './UserSettings'
import UsFood from './UsFood'
import { StyledContainer } from '../Components/styles'
import { NavigationContainer } from '@react-navigation/native'
import Home from './Home'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Routes
import { MainRoutes } from './../Navigators/routes'

const NavBar = (): React.ReactElement => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator>
      <Tab.Screen name={MainRoutes.Home} component={Home} />
      <Tab.Screen name={MainRoutes.UserSettings} component={UserSettings} />
    </Tab.Navigator>
  )
}

export default NavBar
