import React from 'react'

import { MainRoutes } from '../Navigators/routes'

//react native elements
import { Card, Header } from 'react-native-elements'

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
  SubTitle,
  StyledTitle,
  ProfilePicture,
  TextWrapper,
  StyledContainer,
  SliderContainer,
  Slide,
  SliderImage,
  RightIcon,
  SearchIcon,
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
import Swiper from 'react-native-swiper'

// Colors
const { primary, white, darkLight, grey } = Colors

//Icons
import { Ionicons, Fontisto } from '@expo/vector-icons'

const Home = ({ navigation }): React.ReactElement => {
  //Placeholder Variable
  const name = 'Bob'
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: white, alignContent: 'center' }}
    >
      <StyledHeader>
        <TouchableOpacity
          onPress={() => navigation.navigate(MainRoutes.UserSettings)}
        >
          <ProfilePicture
            source={require('../Assets/mockPFP.jpg')}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <Text style={{ fontWeight: 'bold', paddingTop: 5 }}>Overview</Text>
        <SearchIcon onPress={() => {}}>
          <Ionicons name={'search'} size={30} color={darkLight} />
        </SearchIcon>
      </StyledHeader>
      <ScrollView style={{ marginTop: 10 }}>
        <SliderContainer>
          <Swiper
            autoplay
            height={200}
            horizontal={false}
            activeDotColor={primary}
          >
            <Slide>
              <SliderImage
                resizeMode="cover"
                source={require('../Assets/slider1.jpg')}
              />
            </Slide>
            <Slide>
              <SliderImage
                resizeMode="cover"
                source={require('../Assets/slider2.jpg')}
              />
            </Slide>
            <Slide>
              <SliderImage
                resizeMode="cover"
                source={require('../Assets/slider3.jpg')}
              />
            </Slide>
            <Slide>
              <SliderImage
                resizeMode="cover"
                source={require('../Assets/slider4.jpg')}
              />
            </Slide>
          </Swiper>
        </SliderContainer>
        <CategoryContainer>
          <CategoryButton onPress={() => {}}>
            <CategoryIcon>
              <Ionicons name="ios-restaurant" size={35} color={primary} />
            </CategoryIcon>
            <CategoryButtonText>Meats</CategoryButtonText>
          </CategoryButton>
          <CategoryButton onPress={() => {}}>
            <CategoryIcon>
              <Ionicons name="ios-restaurant" size={35} color={primary} />
            </CategoryIcon>
            <CategoryButtonText>Meats</CategoryButtonText>
          </CategoryButton>
          <CategoryButton onPress={() => {}}>
            <CategoryIcon>
              <Ionicons name="ios-restaurant" size={35} color={primary} />
            </CategoryIcon>
            <CategoryButtonText>Meats</CategoryButtonText>
          </CategoryButton>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryButton onPress={() => {}}>
            <CategoryIcon>
              <Ionicons name="ios-restaurant" size={35} color={primary} />
            </CategoryIcon>
            <CategoryButtonText>Meats</CategoryButtonText>
          </CategoryButton>
          <CategoryButton onPress={() => {}}>
            <CategoryIcon>
              <Ionicons name="ios-restaurant" size={35} color={primary} />
            </CategoryIcon>
            <CategoryButtonText>Meats</CategoryButtonText>
          </CategoryButton>
          <CategoryButton onPress={() => {}}>
            <CategoryIcon>
              <Ionicons name="ios-restaurant" size={35} color={primary} />
            </CategoryIcon>
            <CategoryButtonText>Meats</CategoryButtonText>
          </CategoryButton>
        </CategoryContainer>
        <CardWrapper>
          <Text style={{ fontWeight: 'bold', padding: 5, alignSelf: 'center' }}>
            Recently Viewed
          </Text>
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
                <CardTitle>Mixed Vegetables</CardTitle>
                <CardTitle>$10.99/lb</CardTitle>
              </TextWrapper>
              <CardDetails>#45687</CardDetails>
              <CardDetails style={{ marginTop: 5 }}>
                Minimum Purchase Amount: 50 Cases
              </CardDetails>
              <CardDetails>Average Weight per Case: 40lb </CardDetails>
              <CardDetails>Shelf Life: 14 days</CardDetails>
            </CardInfo>
          </Card>
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
                <CardTitle>Mixed Vegetables</CardTitle>
                <CardTitle>$10.99/lb</CardTitle>
              </TextWrapper>
              <CardDetails>#45687</CardDetails>
              <CardDetails style={{ marginTop: 5 }}>
                Minimum Purchase Amount: 50 Cases
              </CardDetails>
              <CardDetails>Average Weight per Case: 40lb </CardDetails>
              <CardDetails>Shelf Life: 14 days</CardDetails>
            </CardInfo>
          </Card>
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
                <CardTitle>Mixed Vegetables</CardTitle>
                <CardTitle>$10.99/lb</CardTitle>
              </TextWrapper>
              <CardDetails>#45687</CardDetails>
              <CardDetails style={{ marginTop: 5 }}>
                Minimum Purchase Amount: 50 Cases
              </CardDetails>
              <CardDetails>Average Weight per Case: 40lb </CardDetails>
              <CardDetails>Shelf Life: 14 days</CardDetails>
            </CardInfo>
          </Card>
        </CardWrapper>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
