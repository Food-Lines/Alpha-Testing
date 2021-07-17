import React from 'react'
import { SafeAreaView, Text, View, ImageBackground } from 'react-native'
import { MainRoutes } from '../Navigators/routes'

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
  Action,
  EditProfileTextInput,
  CommandButton,
  PanelButtonTitle,
} from '../Components/styles'
import { TouchableOpacity } from 'react-native'
import { TouchableRipple } from 'react-native-paper'

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

const EditProfile = ({ navigation }): React.ReactElement => {
  const bs = React.createRef()
  const fall = new Animated.Value(1)

  return (
    <SafeAreaView style={{ backgroundColor: white, flex: 1 }}>
      <View style={{ margin: 20 }}>
        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                height: 100,
                width: 100,
                borderRadius: 15,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ImageBackground
                source={require('../Assets/mockPFP.jpg')}
                style={{ height: 100, width: 100 }}
                imageStyle={{ borderRadius: 15 }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Ionicons
                    name="camera"
                    size={35}
                    color={white}
                    style={{
                      opacity: 0.6,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: white,
                      borderRadius: 10,
                    }}
                  />
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
          <Text style={{ marginTop: 10, fontSize: 18, fontWeight: 'bold' }}>
            Bob Smith
          </Text>
        </View>
        <StyledTextInput
          icon="user-o"
          placeholder="First Name"
          keybaordType="default"
        />
        <StyledTextInput
          icon="user-o"
          placeholder="Last Name"
          keybaordType="default"
        />
        <StyledTextInput
          icon="phone"
          placeholder="Phone"
          keybaordType="phone-pad"
        />
        <StyledTextInput
          icon="envelope-o"
          placeholder="Email"
          keybaordType="email-address"
        />
        <StyledTextInput
          icon="globe"
          placeholder="Country"
          keybaordType="default"
        />
        <StyledTextInput
          icon="map-marker"
          placeholder="City"
          keybaordType="default"
        />
      </View>
      <CommandButton onPress={() => {}}>
        <PanelButtonTitle>Submit</PanelButtonTitle>
      </CommandButton>
    </SafeAreaView>
  )
}

const SearchIcon = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Ionicons name={'search'} size={30} color={darkLight} />
    </TouchableOpacity>
  )
}

const StyledTextInput = ({ icon, placeholder, keybaordType }) => {
  return (
    <Action>
      <FontAwesome name={icon} size={20} />
      <EditProfileTextInput
        placeholder={placeholder}
        placeholderTextColor={grey}
        autoCorrect={false}
        keyboardType={keybaordType}
        onChange={() => {}}
      />
    </Action>
  )
}

export default EditProfile
