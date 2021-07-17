import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'

//Screens
import Home from './Home'
import Sysco from './Sysco'
import Profile from './Profile'
import UsFood from './UsFood'
import EditProfile from './EditProfile'
import CategoryListScreen from './CategoryListScreen'

//Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { createStackNavigator } from '@react-navigation/stack'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Routes
import { MainRoutes } from './../Navigators/routes'

//Colors
import { Colors, ProfilePicture } from '../Components/styles'
import { marginTop } from 'styled-system'

const { primary, white, black } = Colors

//Individaul Page Stacks
const HomeStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const UsFoodsStack = createStackNavigator()

const NavBar = (): React.ReactElement => {
  const Tab = createBottomTabNavigator()

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
      <Tab.Screen name={MainRoutes.Home} component={HomeStackScreen} />
      <Tab.Screen name={MainRoutes.Sysco} component={Sysco} />
      <Tab.Screen name={MainRoutes.UsFoods} component={UsFoodsStackScreen} />
      <Tab.Screen name={MainRoutes.Profile} component={ProfileStackScreen} />
    </Tab.Navigator>
  )
}

export default NavBar

const HomeStackScreen = ({navigation}) => {
  return(
    <SafeAreaView style={{ flex: 1, backgroundColor: white}}>
      <HomeStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: white,
            shadowColor: white, // iOS
            elevation: 0, // Android
          },
          headerTintColor: black,
        }}
        >
          <HomeStack.Screen
            name={MainRoutes.Home}
            component={Home}
            options={{
            title: 'Home',
            headerLeftContainerStyle: {marginLeft: 20},
            headerLeft: () => (
            <ProfilePictureComp
              navigation={navigation}
            />
          ),
          headerRightContainerStyle: {marginRight: 20},
          headerRight: () => (
            <SearchIcon/>
          )
        }}
      />
      <HomeStack.Screen 
        name={MainRoutes.CategoryListScreen} 
        component={CategoryListScreen}
        options={({route}) => ({
          title: route.params.title,
          headerBackTitleVisible: false
        })} />
      </HomeStack.Navigator>
    </SafeAreaView>
  )

}

const ProfileStackScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: white }}>
      <ProfileStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: white,
            shadowColor: white, // iOS
            elevation: 0, // Android
          },
          headerTintColor: black,
        }}
      >
        <ProfileStack.Screen
          name={MainRoutes.Profile}
          component={Profile}
          options={{
            title: '',
            headerStyle: { borderBottomColor: white },
            headerLeft: () => (
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor={white}
                color={black}
                onPress={() => navigation.openDrawer()}
              />
            ),
            headerRight: () => (
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor={white}
                color={black}
                onPress={() => navigation.navigate(MainRoutes.EditProfile)}
              />
            ),
          }}
        />
        <ProfileStack.Screen
          name={MainRoutes.EditProfile}
          options={{ title: 'Edit Profile' }}
          component={EditProfile}
        />
      </ProfileStack.Navigator>
    </SafeAreaView>
  )
}

const UsFoodsStackScreen = ({ navigation }) => {
  return (
    <UsFoodsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: white,
          shadowColor: black, // iOS
          elevation: 0, // Android
        },
        headerTintColor: black,
      }}
    >
      <UsFoodsStack.Screen
        name={MainRoutes.UsFoods}
        component={UsFood}
        options={{
          title: '',
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor={white}
              color={black}
              onPress={() => navigation.openDrawer()}
            />
          ),
        }}
      />
    </UsFoodsStack.Navigator>
  )
}

const ProfilePictureComp = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(MainRoutes.Profile)}>
      <ProfilePicture
        source={require('../Assets/mockPFP.jpg')}
        resizeMode="cover"
      />
    </TouchableOpacity>
  )
}

const SearchIcon = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Ionicons name={'search'} size={30} color={black} />
    </TouchableOpacity>
  )
}