import React from 'react'

import { MainRoutes } from '../Navigators/routes'

//react native elements
import { Card } from 'react-native-elements'

//Components
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'

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
const { primary, white, darkLight, grey, black } = Colors

//Icons
import { Ionicons, Fontisto } from '@expo/vector-icons'

const Home = ({ navigation }): React.ReactElement => {
  //Placeholder Variable
  const name = 'Bob'
  return (
    <View style={{ flex: 1, backgroundColor: white}}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: white, alignContent: 'center', marginTop: 10 }}
      >
        <ScrollView style={{ marginTop: 10 }}>
          <VerticalSwiper />
          <CategoryContainer>
            <Categories label="Meat" icon="restaurant-outline" navigation={navigation} title="Meat"/>
            <Categories label="Seafood" icon="restaurant-outline" navigation={navigation} title="Seafood"/>
            <Categories label="Poultry" icon="restaurant-outline" navigation={navigation} title="Poultry"/>
          </CategoryContainer>
          <CategoryContainer>
            <Categories label="Produce" icon="restaurant-outline" navigation={navigation} title="Produce"/>
            <Categories label="Frozen" icon="restaurant-outline" navigation={navigation} title="Frozen"/>
            <Categories label="Dairy" icon="restaurant-outline" navigation={navigation} title="Dairy"/>
          </CategoryContainer>
          <CardWrapper>
            <Text
              style={{ fontWeight: 'bold', padding: 5, alignSelf: 'center' }}
            >
              Recently Viewed
            </Text>
            <CardView
              foodName="Mixed Vegetables"
              price="$10.99"
              id="#46928"
              minPurchase="50 Cases"
              shelfLife="14 days"
              weight="40 lb"
              image="../Assets/slider1.jpg"
            />
            <CardView
              foodName="Pizza"
              price="$10.99"
              id="#46928"
              minPurchase="50 Cases"
              shelfLife="14 days"
              weight="40 lb"
              image="../Assets/slider2.jpg"
            />
            <CardView
              foodName="Mixed Vegetables"
              price="$10.99"
              id="#46928"
              minPurchase="50 Cases"
              shelfLife="14 days"
              weight="40 lb"
              image="../Assets/slider3.jpg"
            />
          </CardWrapper>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const Categories = ({ label, icon, navigation, title }) => {
  return (
    <CategoryButton onPress={() => navigation.navigate(MainRoutes.CardListScreen, {title: title })}>
      <CategoryIcon>
        <Ionicons name={icon} size={35} color={primary} />
      </CategoryIcon>
      <CategoryButtonText>{label}</CategoryButtonText>
    </CategoryButton>
  )
}

//Reusable Components
const CardView = ({
  foodName,
  price,
  id,
  minPurchase,
  weight,
  shelfLife,
  image,
}) => {
  return (
    <Card
      containerStyle={{
        borderRadius: 8,
        height: 100,
        marginVertical: 10,
        shadowColor: grey,
        shadowOffset: { width: 0, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.8,
        elevation: 5,
        padding: 0,
        marginLeft: 0,
        width: '100%',
      }}
      wrapperStyle={{ flexDirection: 'row' }}
    >
      <CardImageWrapper>
        <CardImage
          source={require('../Assets/slider1.jpg')}
          resizeMode="cover"
        />
      </CardImageWrapper>
      <CardInfo>
        <TextWrapper>
          <CardTitle>{foodName}</CardTitle>
          <CardTitle>{price + '/lb'}</CardTitle>
        </TextWrapper>
        <CardDetails>{id}</CardDetails>
        <CardDetails style={{ marginTop: 5 }}>
          {'Minimum Purchase Amount: ' + minPurchase}
        </CardDetails>
        <CardDetails>{'Average Weight per Case: ' + weight}</CardDetails>
        <CardDetails>{'Shelf Life: ' + shelfLife}</CardDetails>
      </CardInfo>
    </Card>
  )
}


export default Home
