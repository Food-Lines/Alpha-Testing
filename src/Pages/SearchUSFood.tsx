import React, { useState } from 'react'
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native'
import { MainRoutes } from '../Navigators/routes'

//Redux
import { useReduxDispatch } from '../Redux'
import { logout } from '../Redux/slices/user'

//Data
import USFoodsData from '../Data/USFoodsData'

//Components
import {
  Colors,
  Avatar,
  UserInfoSection,
  StyledTitle,
  Caption,
  Row,
  InfoBoxWrapper,
  InfoBox,
  CategoryButtonText,
  MenuWrapper,
  MenuItem,
  MenuItemText,
} from '../Components/styles'

import CardView from '../Components/CardView'

// Colors
const { greyLight, white, grey, primary, black } = Colors

//Icons
import { Ionicons, Fontisto } from '@expo/vector-icons'
import { paddingRight } from 'styled-system'

const SearchUSFood = ({ navigation }): React.ReactElement => {
  const dispatch = useReduxDispatch()

  const [filteedData, setFilteredData] = useState([])
  const [masterData, setMasterData] = useState([])

  const renderItem = ({ item }) => {
    return (
      <CardView
        itemData={item}
        onPress={() =>
          navigation.navigate(MainRoutes.CardItemDetails, { itemData: item })
        }
      />
    )
  }

  return (
    <SafeAreaView style={{ backgroundColor: white, flex: 1 }}>
      <View style={{ padding: 20 }}>
        <SearchBar />
        <FlatList
          data={USFoodsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  )
}

export default SearchUSFood

const SearchBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: greyLight,
        borderColor: grey,
        borderWidth: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      <Ionicons
        name="search-outline"
        size={25}
        style={{ marginHorizontal: 10 }}
      />
      <TextInput style={styles.textInputStyle} />
    </View>
  )
}

const styles = StyleSheet.create({
  textInputStyle: {
    height: 50,
    width: '85%',
    borderColor: grey,
    backgroundColor: greyLight,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})
