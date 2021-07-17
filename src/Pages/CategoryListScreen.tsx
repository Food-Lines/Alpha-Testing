import React from 'react'
import { SafeAreaView, Text, View, ImageBackground, FlatList } from 'react-native'
import { MainRoutes } from '../Navigators/routes'

//Components
import {
  Colors,
} from '../Components/styles'

import CardView from '../Components/CardView'

//Animations
import BottomSheet from 'reanimated-bottom-sheet'
import Animated from 'react-native-reanimated'

// Colors
const { greyLight, white, darkLight, grey, primary, black } = Colors

//Icons
import { Ionicons, Fontisto } from '@expo/vector-icons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import { padding } from 'styled-system'


const CategoryListScreen = ({ navigation }): React.ReactElement => {

  const renderItem = () => {
    return <CardView foodName="Mixed Vegetables"
    price="$10.99"
    id="#46928"
    minPurchase="50 Cases"
    shelfLife="14 days"
    weight="40 lb"
    image="../Assets/slider1.jpg" />
  }


  return (
    <SafeAreaView style={{ backgroundColor: white, flex: 1}}>
      <View style= {{padding: 20}}>
        <Text>Welcome</Text>
      </View>
    </SafeAreaView>
  )
}



export default CategoryListScreen
