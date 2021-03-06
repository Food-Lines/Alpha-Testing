import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

//Screens
import Home from './Home'
import Sysco from './Sysco'
import Profile from './Profile'
import UsFood from './UsFood'
import EditProfile from './EditProfile'
import CardListScreen from './CardListScreen'
import CardItemDetails from './CardItemDetail'
import Favorites from './Favorites'
import Support from './Support'
import About from './About'
import Payment from './Payment'
import Search from './Search'
import SearchUSFood from './SearchUSFood'
import SearchSysco from './SearchSysco'
import PriceComparison from './PriceComparison'

//Tab
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { createStackNavigator } from '@react-navigation/stack'

//Icons
import Ionicons from 'react-native-vector-icons/Ionicons'
import Icon from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

//Routes
import { MainRoutes } from './../Navigators/routes'

//Colors
import { Colors, ProfilePicture } from '../Components/styles'
import { DrawerActions, NavigationContainer } from '@react-navigation/native'

const { primary, white, black } = Colors

//Individaul Page Stacks
const HomeStack = createStackNavigator()
const ProfileStack = createStackNavigator()
const UsFoodsStack = createStackNavigator()
const SyscoStack = createStackNavigator()
const MasterStack = createStackNavigator()

const Tab = createBottomTabNavigator()

const NavBar = ({ navigation }): React.ReactElement => {
  return (
    <Tab.Navigator
      initialRouteName={MainRoutes.Home}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline'
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline'
          } else if (route.name === 'Sysco') {
            iconName = focused ? 'business' : 'business-outline'
          } else if (route.name === 'US Foods') {
            iconName = focused ? 'business' : 'business-outline'
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
      <Tab.Screen name={MainRoutes.Sysco} component={SyscoStackScreen} />
      <Tab.Screen name={MainRoutes.UsFoods} component={UsFoodsStackScreen} />
      <Tab.Screen name={MainRoutes.Profile} component={ProfileStackScreen} />
    </Tab.Navigator>
  )
}

export default NavBar

const HomeStackScreen = ({ navigation }) => {
  return (
    <HomeStack.Navigator
      initialRouteName={MainRoutes.Home}
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
          headerLeftContainerStyle: { marginLeft: 10 },
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={25}
              backgroundColor={white}
              color={black}
              onPress={() => navigation.openDrawer()}
            />
          ),
          headerRightContainerStyle: { marginRight: 20 },
          headerRight: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <SearchIcon navigation={navigation} />
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name={MainRoutes.CardListScreen}
        component={CardListScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 10 },
        })}
      />

      <HomeStack.Screen
        name={MainRoutes.CardItemDetails}
        component={CardItemDetails}
        options={({ route }) => ({
          title: '',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: white,
          headerLeftContainerStyle: { marginLeft: 10 },
        })}
      />

      <HomeStack.Screen
        name={MainRoutes.Favorites}
        component={Favorites}
        options={{
          title: 'Your Favorites',
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 10 },
        }}
      />
      <HomeStack.Screen
        component={Support}
        name={MainRoutes.Support}
        options={{
          title: '',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: white,
          headerLeftContainerStyle: { marginLeft: 10 },
        }}
      />
      <HomeStack.Screen
        component={Payment}
        name={MainRoutes.Payment}
        options={{
          title: 'Payment',
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 10 },
        }}
      />

      <HomeStack.Screen
        component={About}
        name={MainRoutes.About}
        options={{
          title: '',
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 10 },
          headerTransparent: true,
          headerTintColor: white,
        }}
      />

      <HomeStack.Screen
        component={Search}
        name={MainRoutes.Search}
        options={{
          title: 'What do you need?',
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 10 },
        }}
      />

      <HomeStack.Screen
        name={MainRoutes.PriceComparison}
        component={PriceComparison}
        options={({ route }) => ({
          title: '',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: white,
          headerLeftContainerStyle: { marginLeft: 10 },
        })}
      />
    </HomeStack.Navigator>
  )
}

const ProfileStackScreen = ({ navigation }) => {
  return (
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
          headerLeftContainerStyle: { marginLeft: 15 },
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
        options={{
          title: 'Edit Profile',
          headerLeftContainerStyle: { marginLeft: 10 },
        }}
        component={EditProfile}
      />
    </ProfileStack.Navigator>
  )
}

const UsFoodsStackScreen = ({ navigation }) => {
  return (
    <UsFoodsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: white,
          shadowColor: white, // iOS
          elevation: 1, // Android
        },
        headerTintColor: black,
      }}
    >
      <UsFoodsStack.Screen
        name={MainRoutes.UsFoods}
        component={UsFood}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <UsFoodsStack.Screen
        name={MainRoutes.CardItemDetails}
        component={CardItemDetails}
        options={({ route }) => ({
          title: '',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: white,
          headerLeftContainerStyle: { marginLeft: 10 },
        })}
      />
      <UsFoodsStack.Screen
        name={MainRoutes.SearchUSFood}
        component={SearchUSFood}
        options={{
          title: 'What do you need?',
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 10 },
        }}
      />
    </UsFoodsStack.Navigator>
  )
}

const SyscoStackScreen = ({ navigation }) => {
  return (
    <SyscoStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: white,
          shadowColor: white, // iOS
          elevation: 1, // Android
        },
        headerTintColor: black,
      }}
    >
      <SyscoStack.Screen
        name={MainRoutes.Sysco}
        component={Sysco}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <SyscoStack.Screen
        name={MainRoutes.CardItemDetails}
        component={CardItemDetails}
        options={({ route }) => ({
          title: '',
          headerBackTitleVisible: false,
          headerTransparent: true,
          headerTintColor: white,
          headerLeftContainerStyle: { marginLeft: 10 },
        })}
      />

      <SyscoStack.Screen
        name={MainRoutes.SearchSysco}
        component={SearchSysco}
        options={{
          title: 'What do you need?',
          headerBackTitleVisible: false,
          headerLeftContainerStyle: { marginLeft: 10 },
        }}
      />
    </SyscoStack.Navigator>
  )
}

const ProfilePictureComp = ({ navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(MainRoutes.Profile)}
      style={{ marginHorizontal: 20 }}
    >
      <ProfilePicture
        source={require('../Assets/mockPFP.jpg')}
        resizeMode="cover"
      />
    </TouchableOpacity>
  )
}

const SearchIcon = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(MainRoutes.Search)}>
      <Ionicons name={'search'} size={25} color={black} />
    </TouchableOpacity>
  )
}
