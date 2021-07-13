import React from 'react'
import { Text, View, Image } from 'react-native'

//Components
import { SafeAreaView } from 'react-native'
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
} from '../Components/styles'

//Slider
import Swiper from 'react-native-swiper'

// Colors
const { primary, grey, white } = Colors

const Home = (): React.ReactElement => {
  //Placeholder Variable
  const name = 'Bob'
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: white }}>
      <StyledContainer>
        <SliderContainer>
          <Swiper height={200}>
            <Slide>
              <SliderImage
                resizeMode="cover"
                source={require('../Assets/backgroundImage.png')}
              />
            </Slide>
            <Slide>
              <SliderImage
                resizeMode="cover"
                source={require('../Assets/backgroundImage.png')}
              />
            </Slide>
          </Swiper>
        </SliderContainer>
      </StyledContainer>
    </SafeAreaView>
  )
}

export default Home
