import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { stylesCommuns } from '../../styles/stylesCommuns'
import { TextInput } from 'react-native-gesture-handler'
import colors from '../../assets/colors/colors'
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

type Props = {
  onSearch: any
}

const SearchBarAndBell = (props: Props) => {
    return (
      <View style={styles.componentWrapper}>
        <View style={styles.searchBarWrapper}>
          <TextInput style={styles.searchBarTextInput} placeholder='Dogecoin to the moon ...' onSubmitEditing={(value) => props.onSearch(value.nativeEvent.text)} />
          <View style={styles.searchBarIconWrapper}>
            <EvilIcons name="search" size={24} color="lightgrey" />
          </View>
        </View>
        <View style={styles.searchBarIconBellWrapper}>
          <Feather name="bell" size={20} color="white" />
        </View>  
      </View>
    )
}

export default SearchBarAndBell

const styles = StyleSheet.create({
  componentWrapper: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: 20,
    marginTop: 20
  },
  searchBarWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width:'90%'
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
    borderRadius: 40/2,
  },
})