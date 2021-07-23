import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { Button, StyleSheet, View, Dimensions } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import { Colors, WelcomeTitle } from './src/Components/styles'
// Colors
const { primary, white, black } = Colors

//Load Screen
import LottieView from 'lottie-react-native'

// React Navigation stack
import RootStack from './src/Navigators/MainNavigation'
import store from './src/Redux'

//Screen Dimensions
const { height } = Dimensions.get('screen')
const height_logo = height * 0.32

const App = (): React.ReactElement => {
  const [animationDone, setAnimationDone] = useState(false)

  setTimeout(() => {
    setAnimationDone(true)
  }, 6000)

  return (
    <Provider store={store}>
      {animationDone ? (
        <RootStack />
      ) : (
        <View style={styles.animationContainer}>
          <LottieView
            style={{ height: height_logo, width: height_logo }}
            source={require('./src/Assets/foodAnimation.json')}
            autoPlay
            loop
          />
          <WelcomeTitle style={{ color: white }}>Food Lines</WelcomeTitle>
        </View>
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
