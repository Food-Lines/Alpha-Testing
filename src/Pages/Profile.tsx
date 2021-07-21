import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { MainRoutes } from '../Navigators/routes'
//Redux
import { useReduxDispatch } from '../Redux'
import { logout } from '../Redux/slices/user'

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
import { TouchableOpacity } from 'react-native'
import { TouchableRipple } from 'react-native-paper'

//react native elements
import { Card, Header } from 'react-native-elements'

// Colors
const { greyLight, white, darkLight, grey, primary, black } = Colors

//Icons
import { Ionicons, Fontisto } from '@expo/vector-icons'
import { flex } from 'styled-system'



const Profile = ({ navigation }): React.ReactElement => {
  const dispatch = useReduxDispatch()
  return (
    <SafeAreaView style={{ backgroundColor: white, flex: 1 }}>
      <UserInfoSection>
        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Avatar
            source={require('../Assets/mockPFP.jpg')}
            resizeMode="cover"
          />
          <View style={{ marginLeft: 15 }}>
            <StyledTitle style={{ marginTop: 15, marginBottom: 5 }}>
              Bob Smith
            </StyledTitle>
            <Caption>@Deez_Nuts</Caption>
          </View>
        </View>
      </UserInfoSection>
      <UserInfoSection>
        <Row>
          <Ionicons name="mail-outline" size={15} color={grey} />
          <Text style={{ marginLeft: 15, fontSize: 12, color: grey }}>
            greendog21@gmail.com
          </Text>
        </Row>
        <Row>
          <Ionicons name="calendar-outline" size={15} color={grey} />
          <Text style={{ marginLeft: 15, fontSize: 12, color: grey }}>
            August 30, 1969
          </Text>
        </Row>
        <Row>
          <Ionicons name="navigate-outline" size={15} color={grey} />
          <Text style={{ marginLeft: 15, fontSize: 12, color: grey }}>
            Dallas, Texas
          </Text>
        </Row>
      </UserInfoSection>
      <InfoBoxWrapper>
        <InfoBox style={{ borderRightColor: greyLight, borderRightWidth: 1 }}>
          <StyledTitle>140$</StyledTitle>
          <Caption>Wallet</Caption>
        </InfoBox>
        <InfoBox>
          <StyledTitle>12</StyledTitle>
          <Caption>Orders</Caption>
        </InfoBox>
      </InfoBoxWrapper>
      <MenuWrapper>
        <TouchableRipple onPress={() => {}}>
          <MenuItem>
            <Ionicons name="heart-outline" size={25} color={primary} />
            <MenuItemText>Your Favorites</MenuItemText>
          </MenuItem>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <MenuItem>
            <Ionicons name="card-outline" size={25} color={primary} />
            <MenuItemText>Payment</MenuItemText>
          </MenuItem>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <MenuItem>
            <Ionicons name="arrow-undo-outline" size={25} color={primary} />
            <MenuItemText>Tell Your Friends</MenuItemText>
          </MenuItem>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <MenuItem>
            <Ionicons name="people-outline" size={25} color={primary} />
            <MenuItemText>Customer Support</MenuItemText>
          </MenuItem>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <MenuItem>
            <Ionicons name="cog-outline" size={25} color={primary} />
            <MenuItemText>Settings</MenuItemText>
          </MenuItem>
        </TouchableRipple>
        <TouchableRipple onPress={async() => {await dispatch(logout())}}>
          <MenuItem>
            <Ionicons name="cog-outline" size={25} color={primary} />
            <MenuItemText>Log Out</MenuItemText>
          </MenuItem>
        </TouchableRipple>
      </MenuWrapper>
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

export default Profile
