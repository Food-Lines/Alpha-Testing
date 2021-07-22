import React from 'react'
import { Provider } from 'react-redux'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'


//Drawer
const Drawer = createDrawerNavigator()
import { DrawerContent } from './src/Components/DrawerContent'

//temporary
const LoggedIn = true



// React Navigation stack
import RootStack from './src/Navigators/MainNavigation'
import NavBar from './src/Pages/NavBar'
import store from './src/Redux'
import { MainRoutes } from './src/Navigators/routes'

const App = (): React.ReactElement => {
  return (
      <Provider store={store}>
        <NavigationContainer>
        { LoggedIn === true ? (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props}/>}>
          <Drawer.Screen name={MainRoutes.NavBar} component={NavBar}/>
        </Drawer.Navigator>
      )
    :
      <RootStack/>
    }
        </NavigationContainer>
      </Provider>
  )
}

export default App
