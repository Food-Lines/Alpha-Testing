import React, { useState } from 'react'
import 'react-native-get-random-values'
import { Provider } from 'react-redux'
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  Platform,
} from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import { Colors, WelcomeTitle } from './src/Components/styles'
// Colors
const { primary, white, black } = Colors

//Load Screen
import LottieView from 'lottie-react-native'

// React Navigation stack
import RootStack from './src/Navigators/MainNavigation'
import store from './src/Redux'

import * as Linking from 'expo-linking'

//Screen Dimensions
const { height } = Dimensions.get('screen')

const App = (): React.ReactElement => {
  const [animationDone, setAnimationDone] = useState(false)

  const config = {
    screens: {
      'Reset Password': 'action',
    },
  }

  const prefix = Linking.createURL('/')

  const linking = {
    prefixes: ['https://food-lines-40c3c.firebaseapp.com/__/auth/', prefix],
    config,
  }

  setTimeout(() => {
    setAnimationDone(true)
  }, 5000)

  console.disableYellowBox = true

  return (
    <Provider store={store}>
      {animationDone ? (
        <NavigationContainer linking={linking}>
          <RootStack />
        </NavigationContainer>
      ) : (
        <SafeAreaView style={styles.animationContainer}>
          <LottieView
            style={{
              height: Platform.OS === 'ios' ? height * 0.3 : height * 0.4,
              width: Platform.OS === 'ios' ? height * 0.3 : height * 0.4,
            }}
            source={require('./src/Assets/foodAnimation.json')}
            autoPlay
            loop
          />
          <WelcomeTitle style={{ color: white }}>Food Lines</WelcomeTitle>
        </SafeAreaView>
      )}
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: primary,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
})
