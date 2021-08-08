import React from 'react'

//Loader
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

import { Colors } from '../Components/styles'

// Colors
const { primary } = Colors

const LoadingSpinner = ({color}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={color} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
})

export default LoadingSpinner
