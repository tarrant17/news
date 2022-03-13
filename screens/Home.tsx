import { Alert, FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { appelNewsSearchAPI, appelTrendingNewsAPI } from '../backend/api';
import NewsCard from '../components/NewsCard';
import { HomeScreenProps } from '../navigation/navigationType';;
import { stylesCommuns } from '../styles/stylesCommuns';
import { StatusBar } from 'expo-status-bar';
import SearchBarAndBell from '../components/SearchBarAndBell';
import { Article } from '../types/article';

type NewsTrendState = {
    newsTrend: Article[],
    pageNumber: number
}
type newsFilteredByCategoryState = {
    newsFilteredByCategory: Article[],
    pageNumber: number,
    categorySelected: string
}

const Home = ({ route, navigation }: HomeScreenProps) => {
    if (__DEV__) console.log("render HOME")

    const categories = ["Technology", "Healthy", "Finance", "Arts", "Spectacles"]

    let [newsTrendState, setNewsTrendState] = useState({ newsTrend: null, pageNumber: 0 })
    let [newsFilteredByCategoryState, setNewsFilteredByCategoryState] = useState({ newsFilteredByCategory: null, pageNumber: 0, categorySelected: categories[0] })

    const appelerApiTrendingNewsAndMajState = (ajouterNouvellePageArticleAuState = false) => {
        appelTrendingNewsAPI(ajouterNouvellePageArticleAuState ? newsTrendState.pageNumber : 1)
            .then(data => {
                if (ajouterNouvellePageArticleAuState) {
                    setNewsTrendState({
                        newsTrend: [...newsTrendState.newsTrend, ...data.value],
                        pageNumber: newsTrendState.pageNumber + 1
                    })
                } else {
                    setNewsTrendState({
                        newsTrend: data.value,
                        pageNumber: 1
                    })
                }
            })
            .catch(error => Alert.alert('Petit problème de communication avec l\'API', error.message))
    }

    const appelerApiNewsSearchAPIAndMajState = (keyword?, ajouterNouvellePageArticleAuState = false) => {
        appelNewsSearchAPI(keyword, ajouterNouvellePageArticleAuState ? newsFilteredByCategoryState.pageNumber : 1)
            .then(data => {
                if (ajouterNouvellePageArticleAuState) {
                    setNewsFilteredByCategoryState({
                        newsFilteredByCategory: [...newsFilteredByCategoryState.newsFilteredByCategory, ...data.value],
                        pageNumber: newsFilteredByCategoryState.pageNumber + 1,
                        categorySelected: newsFilteredByCategoryState.categorySelected
                    })

                } else {
                    setNewsFilteredByCategoryState({
                        newsFilteredByCategory: data.value,
                        pageNumber: 1,
                        categorySelected: keyword
                    })
                }

            })
            .catch(error => Alert.alert('Petit problème de communication avec l\'API', error.message))
    }

    useEffect(() => {
        if (newsTrendState.newsTrend == null) appelerApiTrendingNewsAndMajState()
        if (newsFilteredByCategoryState.newsFilteredByCategory == null) appelerApiNewsSearchAPIAndMajState()
    }, [])

    const onSearch = (text) => {
        navigation.navigate("SearchResults", { keyword: text })
    }

    const onEndReachedFlatListNewsByCategory = () => {
        appelerApiNewsSearchAPIAndMajState(newsFilteredByCategoryState.categorySelected, true)
    }

    const onEndReachedFlatListnewsTrend = () => {
        appelerApiTrendingNewsAndMajState(true)
    }

    const NewsTrendCardWrapper = (props) => {
        return (
            <Pressable onPress={() => navigation.navigate('Article', { article: props.item })}>
                <NewsCard item={props.item} style={{ marginRight: 5, height: 200, width: 220 }} />
            </Pressable>
        )
    }

    const NewsCategoryCardWrapper = (props) => {
        return (
            <Pressable onPress={() => navigation.navigate('Article', { article: props.item })}>
                <NewsCard item={props.item} style={{ marginBottom: 8, height: 200 }} />
            </Pressable >
        )
    }

    const Category = (props) => {
        return (
            <Pressable onPress={() => {
                appelerApiNewsSearchAPIAndMajState(props.label)
            }}>
                <Text style={(props.label == newsFilteredByCategoryState.categorySelected) ? { ...styles.categorieText, ...styles.categorieSelectedText } : { ...styles.categorieText }}>{props.label}</Text>
            </Pressable>
        )
    }

    return (
        <>
            <StatusBar style="auto" />
            <View style={{ ...stylesCommuns.mainContainer, flex: 1 }}>
                <SearchBarAndBell onSearch={(text) => onSearch(text)} />
                <View style={styles.newsTrendWrapper}>
                    <Text style={styles.newsTrendText}>Trending news</Text>
                    <TouchableOpacity style={styles.newsTrendSeeAllWrapper} onPress={() => navigation.navigate('TrendingNews')}>
                        <Text style={styles.newsTrendSeeAllText}>See All</Text>
                        <AntDesign name="arrowright" color="blue" />
                    </TouchableOpacity>
                </View>
                <View style={styles.newsTrendFlatList}>
                    <FlatList
                        onEndReachedThreshold={0.7}
                        onEndReached={() => onEndReachedFlatListnewsTrend()}
                        horizontal={true}
                        keyExtractor={() => Math.random().toString()}
                        showsHorizontalScrollIndicator={false}
                        data={newsTrendState.newsTrend}
                        renderItem={(item) => <NewsTrendCardWrapper item={item.item} />}
                    />
                </View>
                <View style={{ marginTop: 21, marginBottom: 21 }}>
                    <Text style={styles.newsTrendText}>All news</Text>
                </View>
                <View style={styles.categoriesWrapper}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item) => item}
                        data={categories}
                        renderItem={(item) => <Category label={item.item} />}
                    />
                </View>
                <FlatList
                    onEndReachedThreshold={0.7}
                    onEndReached={() => onEndReachedFlatListNewsByCategory()}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => Math.random().toString()}
                    data={newsFilteredByCategoryState.newsFilteredByCategory}
                    renderItem={(item) => <NewsCategoryCardWrapper item={item.item} />}
                />
            </View>
        </>
    )
}

export default Home

const styles = StyleSheet.create({

    newsTrendWrapper: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    newsTrendText: {
        fontSize: 18,
        fontFamily: "Newsreader_700Bold"
    },
    newsTrendSeeAllWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    newsTrendSeeAllText: {
        color: "blue",
        fontFamily: "Nunito_400Regular",
        marginRight: 10
    },
    newsTrendFlatList: {
        marginTop: 21
    },
    categoriesWrapper: {
        marginBottom: 21
    },
    categorieText: {
        marginHorizontal: 8,
        padding: 8,
        color: "black",
        fontFamily: "Nunito_400Regular",
        fontSize: 12
    },
    categorieSelectedText: {
        backgroundColor: "red",
        color: "white",
        borderRadius: 20,
    }
})