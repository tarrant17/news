import { Alert, Button, Dimensions, FlatList, Pressable, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { appelNewsSearchAPI, appelTrendingNewsAPI } from '../backend/api';
import NewsCard from '../components/NewsCard';
import { HomeScreenProps, RootStackParamList, SearchResultsScreenProps } from '../navigation/navigationType';;
import { stylesCommuns } from '../styles/stylesCommuns';
import { StatusBar } from 'expo-status-bar';
import SearchBarAndBell from '../components/SearchBarAndBell';


const SearchResults = ({ route, navigation }: SearchResultsScreenProps) => {

    //const navigation = useNavigation<articleScreenProp>();
    const [articles, setArticles] = useState()
   
    const searchArticles = (keyword) => {
        appelNewsSearchAPI(keyword).then(data => {
            setArticles(data.value)
        }).catch(error => Alert.alert('Petit problème de communication avec l\'API', error.message))
    }

    useEffect(() => {
        if (__DEV__) console.log("useEffect")
        searchArticles(route.params.keyword)
    }, [])

    const NewsCardWrapper = (props) => {
        return (
            <Pressable onPress={() => navigation.navigate('Article', { article: props.item })}>
                <NewsCard item={props.item} style={{ marginBottom: 5, height: 128 }} />
            </Pressable >
        )
    }

    return (
        <>
            <StatusBar style="auto" />
            <View style={{ ...stylesCommuns.mainContainer, flex: 1 }}>
                <SearchBarAndBell onSearch={(text) => searchArticles(text)} />
                <View style={{ marginTop: 21, marginBottom: 21 }}>
                    <Text style={styles.searchResultsText}>Search results</Text>
                </View>
                <FlatList
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    data={articles}
                    renderItem={(item) => <NewsCardWrapper item={item.item} />}
                />
            </View>
        </>
    )
}

export default SearchResults

const styles = StyleSheet.create({

    searchResultsText: {
        fontSize: 18,
        fontFamily: "Newsreader_700Bold"
    }
})