import React from 'react'
import { BottomNavigation } from 'react-native-paper'
import { Dimensions } from 'react-native'
import Sysco from './Sysco'
import UserSettings from './UserSettings'
import UsFood from './UsFood'

const Home = () => {
  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home', color: '#3F51B5' },
    { key: 'sysco', title: 'Sysco', icon: 'food', color: '#008cd2' },
    { key: 'usFood', title: 'US Foods', icon: 'food', color: '#558618' },
    { key: 'settings', title: 'Settings', icon: 'cog', color: '#607D8B' },
  ])

  const windowHeight = Dimensions.get('window').height

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    sysco: Sysco,
    usFood: UsFood,
    settings: UserSettings,
  })

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      labeled
    />
  )
}

export default Home
