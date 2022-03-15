import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../navigation/routes';


type Props = {}

const MenuBar = (props: Props) => {
    const navigation = useNavigation()
  return (
    <View style={styles.menuWrapper}>
        <TouchableOpacity onPress={()=>navigation.navigate(routes.Home)}>
            <MaterialIcons name="home" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate(routes.Favourites)}>
            <MaterialIcons name="favorite" size={24} color="red" />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    menuWrapper: {
        borderWidth: 1,
        borderRadius: 50,
        padding: 8,
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        position: "absolute",
        width: '40%',
        alignSelf: 'center',
        bottom:0,
        backgroundColor: 'rgba(0,0,0,0.6)'    
        
    }
})

export default MenuBar