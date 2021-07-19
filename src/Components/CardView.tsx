import React from 'react'


//Components
import { 
  Colors,  
  CardImageWrapper, 
  CardImage, 
  CardInfo, 
  TextWrapper, 
  CardTitle, 
  CardDetails,
  CardDetailsDark } from './styles'

//react native elements
import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'

// Colors
const { grey } = Colors

const CardView = ({
  itemData, 
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        containerStyle={{
          borderRadius: 8,
          height: 100,
          marginVertical: 10,
          shadowColor: grey,
          shadowOffset: { width: 1, height: 1 },
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
            source={itemData.image}
            resizeMode="cover"
          />
        </CardImageWrapper>
        <CardInfo>
          <TextWrapper>
            <CardTitle>{itemData.title}</CardTitle>
            <CardTitle>{itemData.price + '/lb'}</CardTitle>
          </TextWrapper>
          <CardDetails>{'#' + itemData.id}</CardDetails>
          <CardDetailsDark style={{ marginTop: 5 }}>
            {'Min Purchase Amount: ' + itemData.minimumPurchase + ' Cases'}
          </CardDetailsDark>
          <CardDetailsDark>{'Avg Weight/Case: ' + itemData.weight + 'lb'}</CardDetailsDark>
          <CardDetailsDark>{'Shelf Life: ' + itemData.shelfLife + ' Days'}</CardDetailsDark>
          <CardDetails numberOfLines={1}>{itemData.description}</CardDetails>
        </CardInfo>
      </Card>
    </TouchableOpacity>
  )
}

export default CardView
