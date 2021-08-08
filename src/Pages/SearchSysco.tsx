import React, { useState, useEffect } from 'react'
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
import SyscoData from '../Data/SyscoData'

//Components
import { Colors } from '../Components/styles'
import KeyboardAvoidingWrapper from '../Components/KeyboardAvoidingWrapper'

import CardView from '../Components/CardView'

// Colors
const { greyLight, white, grey, primary, black } = Colors

//Icons
import { Ionicons, Fontisto } from '@expo/vector-icons'
import { paddingRight } from 'styled-system'

const SearchSysco = ({ navigation }): React.ReactElement => {
  const dispatch = useReduxDispatch()

  const [filteredData, setFilteredData] = useState([])
  const [masterData, setMasterData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    setFilteredData(SyscoData)
    setMasterData(SyscoData)
    return () => {}
  }, [])

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

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setFilteredData(newData)
      setSearch(text)
    } else {
      setFilteredData(masterData)
      setSearch(text)
    }
  }

  return (
    // <KeyboardAvoidingWrapper>
    <SafeAreaView style={{ backgroundColor: white, flex: 1 }}>
      <View style={{ padding: 20 }}>
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
          <TextInput
            style={styles.textInputStyle}
            placeholder="Search Here"
            value={search}
            underlineColorAndroid="transparent"
            onChangeText={(text) => searchFilter(text)}
          />
        </View>
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{ paddingHorizontal: 20 }}
      />
    </SafeAreaView>
    // </KeyboardAvoidingWrapper>
  )
}

export default SearchSysco

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
