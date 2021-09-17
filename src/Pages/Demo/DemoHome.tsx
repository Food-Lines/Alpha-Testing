import React from 'react'

import { MainRoutes } from '../../Navigators/routes'

//Components
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native'

import { Colors, CardDetails } from '../../Components/styles'
import { useReduxDispatch } from '../../Redux'
import { logout } from '../../Redux/slices/user'

// Colors
const { primary, white, grey, black } = Colors

const DemoHome = ({ navigation }): React.ReactElement => {
  const dispatch = useReduxDispatch()
  const randomFunction = async () => {
    await dispatch(logout())
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: white }}>
      <Text>You Logged In!</Text>
      <TouchableOpacity
        onPress={randomFunction}
        style={{ backgroundColor: grey }}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default DemoHome
