import React from 'react'

//Loader
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

import { Colors } from '../Components/styles'

// Colors
const { primary, white } = Colors

const LoadingSpinner = ({ color }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
})

export default LoadingSpinner
