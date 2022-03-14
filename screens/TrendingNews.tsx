import { Alert, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { appelTrendingNewsAPI } from '../backend/api';
import NewsCard from '../components/NewsCard';
import { SearchResultsScreenProps } from '../navigation/navigationType';;
import { stylesCommuns } from '../styles/stylesCommuns';
import SearchBarAndBell from '../components/SearchBarAndBell';
import { Article } from '../types/article';

type TrendingNewsState = {
    trendingNews: Article[],
    pageNumber: number
}
const TrendingNews = ({ route, navigation }: SearchResultsScreenProps) => {
    if (__DEV__) console.log("render")
    let initialState = { trendingNews: [], pageNumber: 1 }
    const [trendingNewsState, setTrendingNewsState] = useState(initialState)

    const appelerAPITrendingNewsAndMajState = (ajouterArticlesAuStateExistant = false) => {
        appelTrendingNewsAPI(ajouterArticlesAuStateExistant ? trendingNewsState.pageNumber + 1 : 1)
            .then(data => {
                if (ajouterArticlesAuStateExistant) {
                    setTrendingNewsState({
                        trendingNews: [...trendingNewsState.trendingNews, ...data.value],
                        pageNumber: trendingNewsState.pageNumber+1
                    })
                } else {
                    setTrendingNewsState({
                        trendingNews: data.value,
                        pageNumber: 1
                    })
                }

            })
            .catch(error => Alert.alert('Petit problème de communication avec l\'API', error.message))
    }

    useEffect(() => {
        appelerAPITrendingNewsAndMajState()
    }, [])

    const onEndReached = () => {
        if (__DEV__) console.log("onEndReached")
        appelerAPITrendingNewsAndMajState(true)
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
            
            <View style={{ ...stylesCommuns.mainContainer, flex: 1 }}>
                <SearchBarAndBell onSearch={text => navigation.navigate("SearchResults", { keyword: text })} />
                <View style={{ marginTop: 21, marginBottom: 21 }}>
                    <Text style={styles.searchResultsText}>All trending news</Text>
                </View>
                <FlatList
                    onEndReachedThreshold={0.7}
                    onEndReached={() => onEndReached()}
                    keyExtractor={(item, index) => Math.random().toString()}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    data={trendingNewsState.trendingNews}
                    renderItem={(item) => <NewsCardWrapper item={item.item} />}
                />
            </View>
        </>
    )
}

export default TrendingNews

const styles = StyleSheet.create({

    searchResultsText: {
        fontSize: 18,
        fontFamily: "Newsreader_700Bold"
    }
})