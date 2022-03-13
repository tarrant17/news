import { Alert, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { appelNewsSearchAPI, appelTrendingNewsAPI } from '../backend/api';
import NewsCard from '../components/NewsCard';
import {  SearchResultsScreenProps } from '../navigation/navigationType';;
import { stylesCommuns } from '../styles/stylesCommuns';
import { StatusBar } from 'expo-status-bar';
import SearchBarAndBell from '../components/SearchBarAndBell';
import { Article } from '../types/article';
import { transformArticleToLightVersion } from '../backend/APITools';


const TrendingNews = ({ route, navigation }: SearchResultsScreenProps) => {
    
    const [trendingNews, setTrendingNews] = useState([])
    
    const appelerAPITrendingNewsAndMajState = (ajouterArticlesAuStateExistant=false) => {
        appelTrendingNewsAPI()
        .then(data => {
            if (ajouterArticlesAuStateExistant) {
                setTrendingNews([...trendingNews, ...data.value])
            } else {
                setTrendingNews(data.value)
            }
            
        })
        .catch(error => Alert.alert('Petit problème de communication avec l\'API', error.message))
    }

    useEffect(() => {
        appelerAPITrendingNewsAndMajState()
    }, [])

    const onEndReached = () => {
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
            <StatusBar style="auto" />
            <View style={{ ...stylesCommuns.mainContainer, flex: 1 }}>
                <SearchBarAndBell onSearch={text => navigation.navigate("SearchResults", {keyword:text})}/>
                <View style={{ marginTop: 21, marginBottom: 21 }}>
                    <Text style={styles.searchResultsText}>All trending news</Text>
                </View>
                <FlatList
                    onEndReachedThreshold={0.7}
                    onEndReached={()=>onEndReached()}
                    keyExtractor= {(item, index) => Math.random().toString()}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    data={trendingNews}
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