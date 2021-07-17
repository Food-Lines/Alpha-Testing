import React from 'react'


//Components
import { 
  Colors, 
  Card, 
  CardImageWrapper, 
  CardImage, 
  CardInfo, 
  TextWrapper, 
  CardTitle, 
  CardDetails } from './styles'

// Colors
const { grey } = Colors

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

export default CardView
