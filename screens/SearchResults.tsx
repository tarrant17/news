import { Alert, Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { appelNewsSearchAPI } from '../backend/api';
import NewsCard from '../components/NewsCard';
import {  SearchResultsScreenProps } from '../navigation/navigationType';;
import { stylesCommuns } from '../styles/stylesCommuns';
import { StatusBar } from 'expo-status-bar';
import SearchBarAndBell from '../components/SearchBarAndBell';
import { Article } from '../types/article';
import { ThemeProvider } from 'react-native-elements';

type SearchResultsState = {
    articles : Article[],
    keyword: string,
    page: number
}

const SearchResults = ({ route, navigation }: SearchResultsScreenProps) => {
    console.log("ici")
    //const navigation = useNavigation<articleScreenProp>();
    let searchStateInitial : SearchResultsState =  { articles: [], keyword: route.params.keyword, page:1}
    const [searchState, setSearchState] = useState(searchStateInitial)
    
    const searchArticles = (keyword, callback) => {
        appelNewsSearchAPI(keyword).then(data => callback(transformArticleToLightVersion(data.value))).catch(error => Alert.alert('Petit problème de communication avec l\'API', error.message))
    }

    const transformArticleToLightVersion = (articles: Article[]) => {
        let articlesLight = []
        let articleLight
        articles.forEach(article=>{
            articleLight = {
                id: article.id,
                title: article.title,
                body: article.body,
                description: article.description,
                provider: {name: article.provider.name},
                image: { url: article.image.url, thumbnail: article.image.thumbnail}
            }
            articlesLight.push(articleLight)
        })
        return articlesLight
    }

    useEffect(() => {
        if (__DEV__) console.log("useEffect")
        searchArticles(searchState.keyword, (data)=>setSearchState({
            ...searchState,
            articles: data
        }))
    }, [])

    const cumulerArticlesAvecState = (articlesAAjouter) => {
        let articlesCumul = [...searchState.articles, ...articlesAAjouter]
        setSearchState({
            ...searchState,
            articles: articlesCumul
        })
    }

    const onEndReached = () => {
        if (__DEV__) console.log("onEndReached")
        searchArticles(searchState.keyword, (data)=>cumulerArticlesAvecState(data))
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
                    searchArticles(text, (data)=>setSearchState({
                        articles: data,
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