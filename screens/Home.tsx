import { Alert, FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { appelNewsSearchAPI, appelTrendingNewsAPI } from '../backend/api';
import NewsCard from '../components/NewsCard';
import { HomeScreenProps } from '../navigation/navigationType';;
import { stylesCommuns } from '../styles/stylesCommuns';
import { StatusBar } from 'expo-status-bar';
import SearchBarAndBell from '../components/SearchBarAndBell';

const Home = ({ route, navigation }: HomeScreenProps) => {

    //const navigation = useNavigation<articleScreenProp>();

    const appelerApi = () => {
        if (latestNews == null) appelTrendingNewsAPI().then(data => setNews(data.value)).catch(error => Alert.alert('Petit problème de communication avec l\'API', error.message))
        if (categoryNews == null) appelNewsSearchAPI().then(data => setCategoryNews(data.value)).catch(error => Alert.alert('Petit problème de communication avec l\'API', error.message))
    }

    let [latestNews, setNews] = useState(null)
    let [categoryNews, setCategoryNews] = useState(null)


    //if (latestNews == null || categoryNews == null) {
    useEffect(() => {
        appelerApi()
        /*
        setNews(bouchonData.value)
        setCategoryNews(bouchonData.value)
        */
    }, [])

    const onSearch = (text) => {
        navigation.navigate("SearchResults", { keyword : text})
    }


    const LatestNewsCardWrapper = (props) => {
        return (

            <Pressable onPress={() => navigation.navigate('Article', { article: props.item })}>
                <NewsCard item={props.item} style={{ marginRight: 5, height: 200, width: 220 }} />
            </Pressable>

        )
    }

    const NewsCardWrapper = (props) => {
        return (
            <Pressable onPress={() => navigation.navigate('Article', { article: props.item })}>
                <NewsCard item={props.item} style={{ marginBottom: 8, height: 200 }} />
            </Pressable >
        )
    }



    return (
        <>
            <StatusBar style="auto" />
            <View style={{ ...stylesCommuns.mainContainer, flex: 1 }}>
                <SearchBarAndBell onSearch={(text) => onSearch(text)} />
                <View style={styles.latestNewsWrapper}>
                    <Text style={styles.latestNewsText}>Trending news</Text>
                    <TouchableOpacity style={styles.latestNewsSeeAllWrapper}>
                        <Text style={styles.latestNewsSeeAllText}>See All</Text>
                        <AntDesign name="arrowright" color="blue" />
                    </TouchableOpacity>
                </View>
                <View style={styles.latestNewsFlatList}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={latestNews}
                        renderItem={(item) => <LatestNewsCardWrapper item={item.item} />}
                    />
                </View>
                <View style={{ marginTop: 21, marginBottom: 21 }}>
                    <Text style={styles.latestNewsText}>All news</Text>
                </View>
                <FlatList
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    data={categoryNews}
                    renderItem={(item) => <NewsCardWrapper item={item.item} />}
                />
            </View>
        </>
    )
}

export default Home

const styles = StyleSheet.create({

    latestNewsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    latestNewsText: {
        fontSize: 18,
        fontFamily: "Newsreader_700Bold"
    },
    latestNewsSeeAllWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    latestNewsSeeAllText: {
        color: "blue",
        fontFamily: "Nunito_400Regular",
        marginRight: 10
    },
    latestNewsFlatList: {
        marginTop: 21
    }
})