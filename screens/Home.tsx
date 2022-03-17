import { Alert, Dimensions, FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { appelNewsSearchAPI, appelTrendingNewsAPI } from '../backend/api';
import NewsCard from '../components/NewsCard';
import { HomeScreenProps } from '../navigation/navigationType';;
import { stylesCommuns } from '../styles/stylesCommuns';
import SearchBarAndBell from '../components/SearchBarAndBell';
import { Article } from '../types/article';
import { categories } from '../backend/Categories';
import LinkSeeAll from '../components/LinkSeeAll';
import { isVeryBigDevice, isVerySmallDevice } from './Tools';

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
    let [newsTrendState, setNewsTrendState]: [NewsTrendState, any] = useState({ newsTrend: null, pageNumber: 0 })
    let [newsFilteredByCategoryState, setNewsFilteredByCategoryState]: [newsFilteredByCategoryState, any] = useState({ newsFilteredByCategory: null, pageNumber: 0, categorySelected: categories[0] })

    
    const flatListNewsCategory = useRef()

    const appelerApiTrendingNewsAndMajState = (ajouterNouvellePageArticleAuState = false) => {
        if (__DEV__) console.log('appelerApiTrendingNewsAndMajState')
       
        appelTrendingNewsAPI(ajouterNouvellePageArticleAuState ? newsTrendState.pageNumber + 1 : 1)
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

        if (__DEV__) console.log('appelerApiNewsSearchAPIAndMajState')

        appelNewsSearchAPI(keyword, ajouterNouvellePageArticleAuState ? newsFilteredByCategoryState.pageNumber + 1 : 1)
            .then(data => {
                if (ajouterNouvellePageArticleAuState) {
                    setNewsFilteredByCategoryState({
                        newsFilteredByCategory: [...newsFilteredByCategoryState.newsFilteredByCategory, ...data.value],
                        pageNumber: newsFilteredByCategoryState.pageNumber + 1,
                        categorySelected: newsFilteredByCategoryState.categorySelected
                    })

                } else {
                    if (newsFilteredByCategoryState.newsFilteredByCategory?.length > 0) 
                        flatListNewsCategory?.current?.scrollToIndex({ index: 0, animated: false })
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
        if (newsFilteredByCategoryState.newsFilteredByCategory == null) setTimeout(()=>appelerApiNewsSearchAPIAndMajState(newsFilteredByCategoryState.categorySelected), 1500)
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

    const CardWrapper = (props) => {
        let styleNewsCard = (props.horizontal) ? styles.horizontalCardWrapper : styles.verticalCardWrapper
        if (isVerySmallDevice()) styleNewsCard = { ...styleNewsCard, height: 120 }
        return (
            <Pressable onPress={() => navigation.navigate('Article', { article: props.item })}>
                <NewsCard hideDescription={isVerySmallDevice()} item={props.item} style={styleNewsCard} />
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
            <View style={{ ...stylesCommuns.mainContainer, flex: 1 }}>
                <SearchBarAndBell onSearch={(text) => onSearch(text)} />
                <View style={styles.newsTrendWrapper}>
                    <Text style={styles.newsTrendText}>Trending news</Text>
                    <LinkSeeAll onPress={() => navigation.navigate('TrendingNews')} />
                </View>
                <View style={styles.newsTrendFlatList}>
                    <FlatList
                        horizontal={true}
                        onEndReachedThreshold={0.4}
                        onEndReached={() => onEndReachedFlatListnewsTrend()}
                        keyExtractor={() => Math.random().toString()}
                        showsHorizontalScrollIndicator={false}
                        data={newsTrendState.newsTrend}
                        renderItem={(item) => <CardWrapper horizontal={true} item={item.item} />}
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
                <View style={styles.categoriesNewsSeeAllWrapper}>
                    <LinkSeeAll onPress={() => navigation.navigate('SearchResults', { keyword: newsFilteredByCategoryState.categorySelected })} />
                </View>
                <FlatList
                    ref={flatListNewsCategory}
                    horizontal={isVerySmallDevice()}
                    onEndReachedThreshold={0.4}
                    onEndReached={() => onEndReachedFlatListNewsByCategory()}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => Math.random().toString()}
                    data={newsFilteredByCategoryState.newsFilteredByCategory}
                    renderItem={(item) => <CardWrapper horizontal={isVerySmallDevice()} item={item.item} />}
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
    newsTrendFlatList: {
        marginTop: 21
    },
    categoriesWrapper: {
        marginBottom: 5
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
    },
    categoriesNewsSeeAllWrapper: {
        alignItems: 'flex-end', marginBottom: 5
    },
    verticalCardWrapper: {
        marginBottom: 8,
        height: 200
    },
    horizontalCardWrapper: {
        marginRight: 5,
        height: 200,
        width: 250
    }
})