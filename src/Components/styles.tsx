import styled from 'styled-components'
import Constants from 'expo-constants'

// Getting Status Bar Height
const StatusBarHeight = Constants.statusBarHeight

// colors
export const Colors = {
  white: '#ffffff',
  secondary: '#E5E7EB',
  tertiary: '#1F2937',
  darkLight: '#9CA3AF',
  brand: '#6D28D9',
  green: '#10B981',
  red: '#EF4444',
  black: '#000000',
  grey: '#999',
  primary: '#FF6347',
  orangeLight: '#fdeae7',
  greyLight: '#dddddd',
}

const {
  white,
  secondary,
  tertiary,
  darkLight,
  brand,
  green,
  grey,
  red,
  black,
  primary,
  orangeLight,
  greyLight,
} = Colors

//Containers
export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 30}px;
  background-color: ${white};
`

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  align-content: center;
`

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
  align-items: center;
  align-content: center;
`

export const TextWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`
export const UserInfoSection = styled.View`
  padding-horizontal: 30px;
  margin-bottom: 25px;
`
export const InfoBoxWrapper = styled.View`
  border-bottom-color: ${greyLight};
  border-bottom-width: 1px;
  border-top-color: ${greyLight};
  border-top-width: 1px;
  flex-direction: row;
  height: 100px;
`
export const InfoBox = styled.View`
  width: 50%;
  align-items: center;
  justify-content: center;
`

export const MenuWrapper = styled.View`
  margin-top: 10px;
`

export const MenuItem = styled.View`
  flex-direction: row;
  padding-vertical: 15px;
  padding-horizontal: 30px;
`

export const MenuItemText = styled.Text`
  color: #777777;
  margin-left: 20px;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
`
export const Row = styled.View`
  flex-direction: row;
  margin-bottom: 10px;
  align-items: center;
`

//Slider Stuff

export const SliderContainer = styled.View`
  height: 200px;
  width: 90%;
  margin-top: 10px;
  justify-content: center;
  align-self: center;
  border-radius: 8px;
`
export const Slide = styled.View`
  height: 100%;
  width: 100%;
  align-self: center;
  border-radius: 8px;
`
export const SliderImage = styled.Image`
  height: 100%;
  width: 100%;
  align-self: center;
  border-radius: 8px;
`

//Category Stuff

export const CategoryContainer = styled.View`
  flex-direction: row;
  width: 90%;
  align-self: center;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 10px;
`
export const CategoryButton = styled.TouchableOpacity`
  flex: 1;
  width: 30%;
  margin-horizontal: 20px;
  align-self: center;
`

export const CategoryIcon = styled.View`
  border-width: 0px;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 70px;
  height: 70px;
  background-color: ${orangeLight};
  border-radius: 50px;
`

export const CategoryButtonText = styled.Text`
  align-self: center;
  margin-top: 5px;
  color: #de4f35;
`

//Card Stuff

export const Card = styled.View`
  height: 100px;
  margin-vertical: 10px;
  flex-direction: row;
  shadow-color: ${grey};
  shadow-offset: {width: 0, height: 1}
  shadow-opacity 0.8;
  shadow-radius: 2px;
  elevation: 5;
`

export const CardWrapper = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  width: 90%;
  align-self: center;
`
export const CardImage = styled.Image`
  height: 100%
  width: 100%;
  align-self: center;
  border-radius: 8px;
  border-bottom-right-radius: 0px;
  border-top-right-radius: 0px;
`

export const CardImageWrapper = styled.View`
  flex: 1;
`

export const CardInfo = styled.View`
  flex: 2;
  padding: 10px;
  border-left-width: 0px;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${white};
`
export const CardTitle = styled.Text`
  font-weight: bold;
`

export const CardDetails = styled.Text`
  font-size: 12px;
  color: ${grey};
`

//Image Stuff

export const Avatar = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${black};
`

export const ProfilePicture = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${black};
`

export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`

export const PageLogo = styled.Image`
  width: 200px;
  height: 150px;
`

//Text Stuff

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;

  ${(props) =>
    props.welcome &&
    `
    font-size:35px;
  `}
`
export const StyledTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${black};
`

export const Caption = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-weight: 500;
  color: ${grey};
`

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${tertiary};

  ${(props) =>
    props.welcome &&
    `
  margin-bottom: 5px;
  font-weight: normal
  `}
`

//Form Stuff

export const StyledFormArea = styled.View`
  width: 90%;
`

export const StyledTextInput = styled.TextInput`
  background-color: ${secondary};
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${black};
`

export const StyledInputLabel = styled.Text`
  color: ${tertiary};
  font-size: 13px;
  text-align: left;
`

export const LeftIcon = styled.View`
  left: 15px;
  top: 35px;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
`

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 35px;
  position: absolute;
  z-index: 1;
`

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${brand};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
  width: 100%;

  ${(props) =>
    props.google === true &&
    `
  background-color: ${green};
  flex-direction: row; 
  `}
`

export const StyledTransparentButton = styled.TouchableOpacity`
  padding: 5px;
  background-color: transparent;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

export const ButtonText = styled.Text`
  color: ${white};
  font-size: 16px;

  ${(props) =>
    props.google === true &&
    `
  margin-left: 10px;
  `}
`

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
`

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 10px;
`

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  text-align: center;
  color: ${tertiary};
  font-size: 15px;
`

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`

export const StyledHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-left: 5%;
  margin-top: 5px;
`
