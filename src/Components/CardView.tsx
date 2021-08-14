import React, { useState, useEffect } from 'react'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'

//Components
import {
  Colors,
  CardImageWrapper,
  CardImage,
  CardInfo,
  TextWrapper,
  CardTitle,
  CardDetails,
  CardDetailsDark,
} from './styles'

//react native elements
import { Card } from 'react-native-elements'
import { Alert, Platform, ToastAndroid, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import LoadingSpinner from './LoadingSpinner'

// Colors
const { grey, primary, greenUSFood, blueSysco, white } = Colors

const CardView = ({ itemData, onPress }) => {
  const [data, setData] = useState({
    isFav: false,
    isSysco: itemData.supplier === 'Sysco' ? true : false,
    imageUrl: '',
  })

  useEffect(() => {
    const storage = getStorage()
    getDownloadURL(itemData.image)
      .then((url) => {
        setData({ ...data, imageUrl: url })
      })
      .catch((error) => {
        console.log(error.message)
      })
  }, [itemData.image])

  const onPressHandler = () => {
    setData({
      ...data,
      isFav: !data.isFav,
    })
    if (data.isFav) {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Removed from to Favorites', ToastAndroid.SHORT)
      } else {
        Alert.alert('Removed from Favorites')
      }
    } else {
      if (Platform.OS === 'android') {
        ToastAndroid.show('Added to Favorites', ToastAndroid.SHORT)
      } else {
        Alert.alert('Added to Favorites')
      }
    }
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        containerStyle={{
          borderRadius: 8,
          height: 100,
          shadowColor: grey,
          shadowOffset: { width: 1, height: 6 },
          shadowRadius: 2,
          shadowOpacity: 0.8,
          elevation: 5,
          padding: 0,
          marginLeft: 0,
          width: '100%',
          marginBottom: 10,
          marginVertical: 10,
        }}
        wrapperStyle={{ flexDirection: 'row' }}
      >
        {data.imageUrl != '' ? (
          <CardImageWrapper>
            <CardImage source={{ uri: data.imageUrl }} resizeMode="cover" />
          </CardImageWrapper>
        ) : (
          <LoadingSpinner color={primary} />
        )}

        <CardInfo>
          <TextWrapper>
            <CardTitle>{itemData.title}</CardTitle>
            <TouchableOpacity onPress={onPressHandler}>
              {data.isFav ? (
                <FontAwesome
                  name="heart"
                  size={15}
                  style={{ marginRight: 5 }}
                  color={primary}
                />
              ) : (
                <FontAwesome
                  name="heart-o"
                  size={15}
                  style={{ marginRight: 5 }}
                />
              )}
            </TouchableOpacity>
          </TextWrapper>
          <TextWrapper style={{ justifyContent: 'flex-start' }}>
            <CardTitle
              style={{
                marginRight: 8,
                color: data.isSysco ? blueSysco : greenUSFood,
              }}
            >
              {itemData.supplier}
            </CardTitle>
            <CardDetails>{'#' + itemData.id}</CardDetails>
          </TextWrapper>

          <CardDetailsDark style={{ marginTop: 5 }}>
            {'Min Purchase Amount: ' + itemData.minimumPurchase + ' Cases'}
          </CardDetailsDark>
          <CardDetailsDark>
            {'Avg Weight/Case: ' + itemData.weight + 'lb'}
          </CardDetailsDark>
          <CardDetailsDark>
            {'Shelf Life: ' + itemData.shelfLife + ' Days'}
          </CardDetailsDark>
          <CardDetails numberOfLines={1}>{itemData.description}</CardDetails>
        </CardInfo>
      </Card>
    </TouchableOpacity>
  )
}

export default CardView
