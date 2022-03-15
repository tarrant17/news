import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { ArticleScreenProps, RootStackParamList } from '../navigation/navigationType';
import { LinearGradient } from 'expo-linear-gradient';

const Article = ({ route, navigation }: ArticleScreenProps) => {
    return (
        <>
        <ScrollView bounces={false} alwaysBounceHorizontal={false}
            alwaysBounceVertical={false} style={styles.articleMainContainer}>
            <Image resizeMode="cover"
                style={styles.imageBackgroundView}
                source={{ uri: route.params.article.image.url }}>
            </Image>
            
            
            <View style={styles.bodyWrapper}>
                <Text style={styles.bodyText}>{route.params.article.body}</Text>
            </View>
            {/* elements en position absolute, a mettre à la fin*/}
            <View style={styles.titleWrapper}>
                <LinearGradient colors={['rgba(120,120,120,0.5)', 'rgba(180,180,180,0.5)', 'rgba(210,210,210,0.5)',  'rgba(240,240,240,0.5)', 'rgba(270,270,270,0.5)',  'transparent']} style={styles.titleBorderWrapper}>
                    <Text style={styles.dateTitleText}>{new Date(route.params.article.datePublished).toDateString()}</Text>
                    <Text numberOfLines={5} style={styles.titleText}>{route.params.article.title}</Text>
                    <Text style={styles.sourceTitleText}>From {route.params.article.provider.name}</Text>
                </LinearGradient>
            </View>
            <View style={styles.backButtonWrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="leftcircleo" size={32} color="rgba(255,255,255,0.8)" />
                </TouchableOpacity>
            </View>
        </ScrollView>
        </>
    )
}

export default Article

const styles = StyleSheet.create({
    articleMainContainer: {
        flex: 1,
        backgroundColor:"white"
    },
    backButtonWrapper: {
        position: 'absolute',
        top: 52,
        left: 15,
        opacity: 10,
        backgroundColor:'rgba(0,0,0,0.5)',
        borderRadius:32/2
    },
    imageBackgroundView: {
        width: '100%',
        height: (Dimensions.get('window').height) * 0.5,
        marginBottom: 0,
    },
    titleWrapper: {
        width:"100%",
        position:"absolute",
        top: (Dimensions.get('window').height) * 0.4,
        alignItems:"center",
    },
    titleBorderWrapper: {
        width: "75%",
        borderStyle: 'solid',
        borderColor: 'black',
        borderRadius: 16,
        backgroundColor: "#dfdfdf",
        paddingVertical: 16,
        paddingHorizontal: 24
    },
    dateTitleText: {
        fontFamily: "Nunito_800ExtraBold",
        fontSize: 10
    },
    titleText: {
        fontFamily: "Newsreader_700Bold",
        fontSize: 16,
        lineHeight: 19.2,
        marginTop: 8
    },
    sourceTitleText: {
        fontFamily: "Nunito_800ExtraBold",
        fontSize: 10,
        marginTop:8
    },
    bodyWrapper: {
        backgroundColor: "white",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 30,
        paddingTop: 120,
        top: -20
    },
    bodyText: {
        fontFamily: "Nunito_400Regular",
        lineHeight: 20
    }
})