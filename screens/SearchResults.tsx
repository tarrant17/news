import { Alert, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { appelNewsSearchAPI } from '../backend/api';
import NewsCard from '../components/NewsCard';
import {  SearchResultsScreenProps } from '../navigation/navigationType';;
import { stylesCommuns } from '../styles/stylesCommuns';
import { StatusBar } from 'expo-status-bar';
import SearchBarAndBell from '../components/SearchBarAndBell';
import { Article } from '../types/article';
import { transformArticleToLightVersion } from '../backend/APITools';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

type SearchResultsState = {
    articles : Article[],
    keyword: string,
    page: number
}

const SearchResults = ({ route, navigation }: SearchResultsScreenProps) => {
    //const navigation = useNavigation<articleScreenProp>();
    let searchStateInitial : SearchResultsState =  { articles: [], keyword: route.params.keyword, page:1}
    const [searchState, setSearchState] = useState(searchStateInitial)
    
    const searchArticles = async (keyword, pageNumber) => {
        try {
            let data = await appelNewsSearchAPI(keyword, pageNumber)
            return transformArticleToLightVersion(data.value)
        }
        catch (error) {
            Alert.alert('Petit problème de communication avec l\'API', error.message)
            console.error (error)
            return []
        }
        
    }

    useEffect(() => {
        searchArticles(searchState.keyword, searchState.page).then((articlesFromAPI)=>setSearchState({
            ...searchState,
            articles: articlesFromAPI
        }))
    }, [])

    const ajouterNouvellePageArticleAuState = (articlesAAjouter) => {
        let articlesCumul = [...searchState.articles, ...articlesAAjouter]
        setSearchState({
            keyword: searchState.keyword,
            page: searchState.page+1,
            articles: articlesCumul
        })
    }

    const onEndReached = () => {
        searchArticles(searchState.keyword, searchState.page).then((articlesFromAPI)=>ajouterNouvellePageArticleAuState(articlesFromAPI))
    }

    const NewsCardWrapper = (props) => {
        return (
            <Pressable onPress={() => navigation.navigate('Article', { article: props.item })}>
                <NewsCard item={props.item} style={{ marginBottom: 10, height: 200 }} />
            </Pressable >
        )
    }

    return (
        <>
            <StatusBar style="auto" />
            <View style={{ ...stylesCommuns.mainContainer, flex: 1 }}>
                <SearchBarAndBell onSearch={(text) => {
                    searchArticles(text, 1).then((articlesFromAPI)=>setSearchState({
                        articles: articlesFromAPI,
                        keyword: text,
                        page: 1
                    }))}
                 } />
                <View style={{ marginTop: 21, marginBottom: 21 }}>
                    <Text style={styles.searchResultsText}>Search results for "{searchState.keyword}"</Text>
                </View>
                <FlatList
                    onEndReachedThreshold={0.7}
                    onEndReached={()=>onEndReached()}
                    keyExtractor= {(item, index) => Math.random().toString()}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    data={searchState.articles}
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