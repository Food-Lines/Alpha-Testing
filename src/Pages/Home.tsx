import React from 'react'

import { MainRoutes } from '../Navigators/routes'

//Cardview
import CardView from '../Components/CardView'

//Data
import RecentlyViewed from '../Data/RecentlyViewed'

//Components
import { SafeAreaView, Text, View, ScrollView, FlatList } from 'react-native'

import {
  Colors,
  StyledHeader,
  ProfilePicture,
  TextWrapper,
  CategoryContainer,
  CategoryIcon,
  CategoryButton,
  CategoryButtonText,
  CardImage,
  CardInfo,
  CardWrapper,
  CardImageWrapper,
  CardTitle,
  CardDetails,
} from '../Components/styles'

//Slider
import VerticalSwiper from '../Components/VerticalSwiper'

// Colors
const { primary, white, grey, black } = Colors

//Icons
import { Ionicons, Fontisto } from '@expo/vector-icons'

const Home = ({ navigation }): React.ReactElement => {
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
    <View style={{ flex: 1, backgroundColor: white }}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: white,
          alignContent: 'center',
          marginTop: 10,
        }}
      >
        <VerticalSwiper />
        <CategoryContainer>
          <Categories
            label="Meat"
            icon="restaurant-outline"
            navigation={navigation}
            title="Meat"
          />
          <Categories
            label="Seafood"
            icon="restaurant-outline"
            navigation={navigation}
            title="Seafood"
          />
          <Categories
            label="Poultry"
            icon="restaurant-outline"
            navigation={navigation}
            title="Poultry"
          />
        </CategoryContainer>
        <CategoryContainer>
          <Categories
            label="Produce"
            icon="restaurant-outline"
            navigation={navigation}
            title="Produce"
          />
          <Categories
            label="Frozen"
            icon="restaurant-outline"
            navigation={navigation}
            title="Frozen"
          />
          <Categories
            label="Dairy"
            icon="restaurant-outline"
            navigation={navigation}
            title="Dairy"
          />
        </CategoryContainer>

        <Text style={{ fontWeight: 'bold', padding: 5, alignSelf: 'center' }}>
          Recently Viewed
        </Text>
        <FlatList
          data={RecentlyViewed}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{
            paddingLeft: 20,
            paddingRight: 20,
            flex: 1,
            paddingBottom: 50,
            marginTop: 10,
          }}
        />
      </SafeAreaView>
    </View>
  )
}

const Categories = ({ label, icon, navigation, title }) => {
  return (
    <CategoryButton
      onPress={() =>
        navigation.navigate(MainRoutes.CardListScreen, { title: title })
      }
    >
      <CategoryIcon>
        <Ionicons name={icon} size={35} color={primary} />
      </CategoryIcon>
      <CategoryButtonText>{label}</CategoryButtonText>
    </CategoryButton>
  )
}

export default Home
