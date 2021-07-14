import React from 'react'
import { Text } from 'react-native'

//Screens
import Home from './Home'
import Sysco from './Sysco'
import Profile from './Profile'
import UsFood from './UsFood'

//Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

//Routes
import { MainRoutes } from './../Navigators/routes'

//Colors
import { Colors } from '../Components/styles'
import { createStackNavigator } from '@react-navigation/stack'
const { primary } = Colors

const NavBar = (): React.ReactElement => {
  const Tab = createBottomTabNavigator()

  //Individaul Page Stacks
  const HomeStack = createStackNavigator()
  const ProfileStack = createStackNavigator()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'
          } else if (route.name === 'Sysco') {
            iconName = focused ? 'fast-food' : 'fast-food-outline'
          } else if (route.name === 'UsFoods') {
            iconName = focused ? 'pizza' : 'pizza-outline'
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: primary,
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name={MainRoutes.Home} component={Home} />
      <Tab.Screen name={MainRoutes.Sysco} component={Sysco} />
      <Tab.Screen name={MainRoutes.UsFoods} component={UsFood} />
      <Tab.Screen name={MainRoutes.Profile} component={Profile} />
    </Tab.Navigator>
  )
}

export default NavBar
