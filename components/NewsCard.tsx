import { View, Text, ImageBackground, Dimensions, StyleSheet } from 'react-native'
import React from 'react'
import { Article } from '../types/article'


type Props = { 
  item: Article,
  hideDescription?: boolean,
  style: object
}

const NewsCard = (props: Props) => {

  const defaultUriImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
  let uriImage = props.item.image.url ? {uri:props.item.image.url} : {uri:defaultUriImage}

  return (
        <View style={{...styles.cardNewsWrapper, ...props.style}}>
          <ImageBackground resizeMode="cover" 
            style={styles.cardNewsImageBackgroundView} 
            imageStyle={styles.cardNewsImageBackgroundImage}
            source={uriImage}>
            <View style={styles.cardNewsOpacityWrapper}>
            <View style={styles.cardNewsAuthorTitleWrapper}>
              <Text style={styles.cardNewsAuthorText}>by {props.item.provider.name}</Text>
              <Text style={styles.cardNewsTitleText}>{props.item.title}</Text>
            </View>
            <View style={styles.cardNewsDescriptionWrapper}>
              {!props.hideDescription && <Text numberOfLines={3} style={styles.cardNewsDescriptionText}>{props.item.description}</Text>}
            </View>
            </View>
          </ImageBackground>
        </View>
     
  )
}

const styles = StyleSheet.create({
    cardNewsWrapper: {
      borderRadius: 8,
    },
    cardNewsImageBackgroundView: {
      flex:1,
    },
    cardNewsImageBackgroundImage: {
      borderRadius: 8,
    },
    cardNewsOpacityWrapper: {
        backgroundColor: 'rgba(52, 52, 52, 0.4)' ,
        borderRadius: 8,
        flex:1
    },
    cardNewsAuthorTitleWrapper: {
      justifyContent: "center",
      flex: 1,
      paddingHorizontal: 8,
      opacity: 1,
    },
    cardNewsAuthorText: {
      fontFamily: "Nunito_800ExtraBold",
      fontSize: 10,
      color: "white",
    },
    cardNewsTitleText: {
      color: "white",
      fontFamily: "Newsreader_400Regular",
      fontSize:16,
    },
    cardNewsDescriptionWrapper: {
      marginBottom: 8,
      paddingHorizontal: 8,
    },
    cardNewsDescriptionText: {
      fontFamily: "Nunito_400Regular",
      fontSize: 10,
      color: "white",
    }
  });
export default NewsCard