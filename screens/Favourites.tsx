import { View, Text, FlatList, StyleSheet, TouchableOpacity, Touchable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FavouritesScreenProps } from '../navigation/navigationType'
import { stylesCommuns } from '../styles/stylesCommuns'
import { supprimerRechercheFavorite, toutesLesRecherchesFavorites } from '../backend/RecherchesFavorites'
import { FontAwesome } from '@expo/vector-icons';
import SearchBarAndBell from '../components/SearchBarAndBell'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const Favourites = (props: FavouritesScreenProps) => {

    const [recherchesFavorites, setRecherchesFavorites] = useState([])

    useEffect(() => {
        toutesLesRecherchesFavorites().then(recherches => setRecherchesFavorites(recherches))
    }, [])

    const ItemRecherche = (props) => {
        let navigation = useNavigation()
        if (props.recherche == null || props.recherche == "") return null
        return (
            <View style={styles.itemRechercheWrapper}>
                <TouchableOpacity style={{flex:8}}  onPress={() => navigation.navigate("SearchResults", { keyword: props.recherche })} >
                    <Text numberOfLines={1} style={styles.rechercheTexte}>{props.recherche}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1}} onPress={() => supprimerRechercheFavorite(props.recherche).then(recherchesApresSuppression=>setRecherchesFavorites(recherchesApresSuppression))} >
                    <FontAwesome name="trash" size={24} color="red" />
                </TouchableOpacity>
            </View>
        )

    }

    return (
        <View style={stylesCommuns.mainContainer}>
            <SearchBarAndBell onSearch={text => props.navigation.navigate("SearchResults", { keyword: text })} />
            <Text style={styles.favouritesTitleText}>Favourites searches</Text>
            <FlatList
                data={recherchesFavorites}
                showsVerticalScrollIndicator={false}
                keyExtractor={item => Math.random().toString()}
                renderItem={item => <ItemRecherche recherche={item.item} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    itemRechercheWrapper: {
        flexDirection: 'row',
        borderColor: 'lightgrey',
        borderWidth: 1,
        borderRadius: 25,
        padding: 10,
        marginBottom: 10,
    },
    rechercheTexte: {
        fontFamily: "Nunito_600SemiBold_Italic"
    },
    favouritesTitleText: {
        fontSize: 18,
        fontFamily: "Newsreader_700Bold",
        marginBottom: 20
    }
})

export default Favourites