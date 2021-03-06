import React from 'react'
import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native'

import {
  Colors,
  CompanyTitle,
  CompanySlogan,
  HorizontalScroll,
  CategoryTitle,
  FoodButton,
  SearchBarContainer,
  SearchText,
  SearchButton,
  FilterContainer,
  TextWrapper,
  CompanyLogo,
} from '../Components/styles'

//Routes
import { MainRoutes } from '../Navigators/routes'

//Cardview
import CardView from '../Components/CardView'

//Data
import FrequentlyPurchased from '../Data/FrequentlyPurchased'

// icons
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Ionicons, Fontisto } from '@expo/vector-icons'

// Colors
const { primary, white, grey, black, greyDark, blueSysco } = Colors

//Slider
import HorizontalSwiper from '../Components/HorizontalSwiper'

const Sysco = ({ navigation }): React.ReactElement => {
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

  const aboveFlatList = () => {
    return (
      <View>
        <View>
          <TextWrapper>
            <CompanyTitle style={{ color: blueSysco }}>Sysco</CompanyTitle>
            <CompanyLogo
              source={require('../Assets/Sysco.png')}
              resizeMode="center"
            />
          </TextWrapper>
          <CompanySlogan>At the heart of food service.</CompanySlogan>
          <ScrollView
            horizontal={true}
            style={{
              paddingBottom: 20,
              marginTop: 20,
              backgroundColor: white,
            }}
          >
            <FoodButton style={{ alignItems: 'center' }}>
              <Image
                source={require('../Assets/FoodIcons/meatColor.png')}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <CategoryTitle>Meat</CategoryTitle>
            </FoodButton>

            <FoodButton>
              <Image
                source={require('../Assets/FoodIcons/seafoodColor.png')}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <CategoryTitle>Seafood</CategoryTitle>
            </FoodButton>

            <FoodButton style={{ alignItems: 'center' }}>
              <Image
                source={require('../Assets/FoodIcons/poultryColor.png')}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <CategoryTitle>Poultry</CategoryTitle>
            </FoodButton>

            <FoodButton style={{ alignItems: 'center' }}>
              <Image
                source={require('../Assets/FoodIcons/dairyColor.png')}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <CategoryTitle>Dairy</CategoryTitle>
            </FoodButton>

            <FoodButton style={{ alignItems: 'center' }}>
              <Image
                source={require('../Assets/FoodIcons/produceColor.png')}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <CategoryTitle>Produce</CategoryTitle>
            </FoodButton>

            <FoodButton style={{ alignItems: 'center' }}>
              <Image
                source={require('../Assets/FoodIcons/cannedColor.png')}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <CategoryTitle>Canned {'&'} Dry</CategoryTitle>
            </FoodButton>

            <FoodButton style={{ alignItems: 'center' }}>
              <Image
                source={require('../Assets/FoodIcons/frozenColor.png')}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <CategoryTitle>Frozen</CategoryTitle>
            </FoodButton>

            <FoodButton style={{ alignItems: 'center' }}>
              <Image
                source={require('../Assets/FoodIcons/beverageColor.png')}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <CategoryTitle>Beverages</CategoryTitle>
            </FoodButton>

            <FoodButton style={{ alignItems: 'center' }}>
              <Image
                source={require('../Assets/FoodIcons/equipmentColor.png')}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <CategoryTitle>Equipment</CategoryTitle>
            </FoodButton>

            <FoodButton style={{ alignItems: 'center' }}>
              <Image
                source={require('../Assets/FoodIcons/paperColor.png')}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <CategoryTitle>Paper {'&'} Disposable</CategoryTitle>
            </FoodButton>

            <FoodButton style={{ alignItems: 'center' }}>
              <Image
                source={require('../Assets/FoodIcons/cleaningColor.png')}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <CategoryTitle>Janitorial</CategoryTitle>
            </FoodButton>

            <FoodButton style={{ alignItems: 'center' }}>
              <Image
                source={require('../Assets/FoodIcons/healthColor.png')}
                resizeMode="contain"
                style={{ width: 50, height: 50 }}
              />
              <CategoryTitle>Healthcare {'&'} Hospitallity</CategoryTitle>
            </FoodButton>
          </ScrollView>
          <SearchBarContainer>
            <SearchButton
              onPress={() => navigation.navigate(MainRoutes.SearchSysco)}
            >
              <SearchIcon />
              <SearchText>What are you craving?</SearchText>
            </SearchButton>
            <View
              style={{
                borderLeftColor: grey,
                borderLeftWidth: 1,
                height: '100%',
                justifyContent: 'center',
                padding: 10,
              }}
            >
              <FilterContainer onPress={() => {}}>
                <FontAwesome name="filter" size={15} />
              </FilterContainer>
            </View>
          </SearchBarContainer>
        </View>
        <Text
          style={{
            fontWeight: '800',
            marginLeft: 20,
            fontSize: 20,
            padding: 5,
            paddingLeft: 0,
          }}
        >
          Frequently Purchased
        </Text>
        <CompanySlogan style={{ marginLeft: 20 }}>
          See Sysco's most popular items.
        </CompanySlogan>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: white }}>
      <FlatList
        data={FrequentlyPurchased}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={aboveFlatList}
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          flex: 1,
          paddingBottom: 50,
          marginTop: 10,
        }}
      />
    </SafeAreaView>
  )
}

const SearchIcon = () => {
  return <Ionicons name={'search'} size={25} color={black} />
}

export default Sysco
