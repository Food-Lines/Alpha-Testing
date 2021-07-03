import React from 'react'
import { Text } from 'react-native'

//Screens
import Home from './Home'
import Sysco from './Sysco'
import UserSettings from './UserSettings'
import UsFood from './UsFood'

//Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'

//Routes
import { MainRoutes } from './../Navigators/routes'

const NavBar = (): React.ReactElement => {
  const Tab = createBottomTabNavigator()

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'User Settings') {
            iconName = focused ? 'settings' : 'settings-outline'
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
        activeTintColor: 'cornflowerblue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name={MainRoutes.Home} component={Home} />
      <Tab.Screen name={MainRoutes.Sysco} component={Sysco} />
      <Tab.Screen name={MainRoutes.UsFoods} component={UsFood} />
      <Tab.Screen name={MainRoutes.UserSettings} component={UserSettings} />
    </Tab.Navigator>
  )
}

export default NavBar
