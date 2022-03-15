import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { enregistrerNouvelleRechercheFavorite } from '../backend/RecherchesFavorites';
import Toast from 'react-native-toast-message';

type Props = {
  onSearch: any
}

const SearchBarAndBell = (props: Props) => {

  const [valueSearchBar, setValueSearchBar] = useState("")


  const ajouterRechercheAuxFavoris = (recherche) => {
    if (recherche == null || recherche == "") {
      Toast.show({
        type: 'info',
        text1: 'Hello',
        text2: 'Search field is empty, type something before adding !'
      })
    }
    else {
      enregistrerNouvelleRechercheFavorite(valueSearchBar)
        .then(() => Toast.show({
          type: 'info',
          text1: 'Hello',
          text2: valueSearchBar + ' has been added to your favourites 👋'
        }))
    }
  }

  const onSubmitRecherche = (value) => {
    setValueSearchBar("")
    props.onSearch(value)
  }
  
  return (
    <View style={styles.componentWrapper}>
      <View style={styles.searchBarWrapper}>
        <TextInput style={styles.searchBarTextInput} placeholder='News on request ...' value={valueSearchBar} onChangeText={text => setValueSearchBar(text)} onSubmitEditing={(value) => onSubmitRecherche(valueSearchBar)} />
        <View style={styles.searchBarIconWrapper}>
          <EvilIcons name="search" size={24} color="lightgrey" />
        </View>
      </View>
      <TouchableOpacity onPress={() => ajouterRechercheAuxFavoris(valueSearchBar)} style={styles.searchBarIconBellWrapper}>
        <MaterialIcons name="favorite-border" size={20} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default SearchBarAndBell

const styles = StyleSheet.create({
  componentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20
  },
  searchBarWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%'
  },
  searchBarTextInput: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    width: '100%',
  },
  searchBarIconWrapper: {
    left: -40
  },
  searchBarIconBellWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    width: 40,
    height: 40,
    backgroundColor: 'red',
    borderRadius: 40 / 2,
  },
})