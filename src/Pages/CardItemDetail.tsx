import React from 'react'

import { MainRoutes } from '../Navigators/routes'

//Image Scroll View
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view'

//Components
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Platform,
  Dimensions,
  StatusBar,
} from 'react-native'

import {
  Colors,
} from '../Components/styles'


//Sizes
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 :55
const MAX_HEIGHT = 350  

// Colors
const { primary, white, darkLight, grey, black } = Colors

const CardItemDetails = ({ route }): React.ReactElement => {
    const itemData = route.params.itemData

 
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: white }}>
            <StatusBar barStyle="light-content" />

            <ImageHeaderScrollView
                maxHeight={200}
                minHeight={MIN_HEIGHT}
                headerImage={require("../Assets/slider2.jpg")}
                renderForeground={() => {
                    return(
                        <View style={{ height: 150, justifyContent: "center", alignItems: "center" }} >
                            <TouchableOpacity onPress={() => console.log("tap!!")}>
                                <Text style={{ backgroundColor: "transparent" }}>Tap Me!</Text>
                            </TouchableOpacity>
                        </View>
                        )}
                }         
            >
                <View style={{ height: 1000 }}>
                    <TriggeringView onHide={() => console.log("text hidden")}>
                        <Text>Scroll Me!</Text>
                    </TriggeringView>
                </View>
            </ImageHeaderScrollView>
        </SafeAreaView>
    )
}


export default CardItemDetails

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      height: MAX_HEIGHT,
      width: Dimensions.get('window').width,
      alignSelf: 'stretch',
      resizeMode: 'cover',
    },
    title: {
      fontSize: 20,
    },
    name: {
      fontWeight: 'bold',
    },
    section: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#cccccc',
      backgroundColor: 'white',
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    sectionContent: {
      fontSize: 16,
      textAlign: 'justify',
    },
    categories: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
    },
    categoryContainer: {
      flexDirection: 'row',
      backgroundColor: '#FF6347',
      borderRadius: 20,
      margin: 10,
      padding: 10,
      paddingHorizontal: 15,
    },
    category: {
      fontSize: 14,
      color: '#fff',
      marginLeft: 10,
    },
    titleContainer: {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'center',
      alignItems: 'center',
    },
    imageTitle: {
      color: 'white',
      backgroundColor: 'transparent',
      fontSize: 24,
    },
    navTitleView: {
      height: MIN_HEIGHT,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: Platform.OS === 'ios' ? 40 : 5,
      opacity: 0,
    },
    navTitle: {
      color: 'white',
      fontSize: 18,
      backgroundColor: 'transparent',
    },
    sectionLarge: {
      minHeight: 300,
    },
  });
  
