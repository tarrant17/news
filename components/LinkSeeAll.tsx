import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

type Props = {
    onPress: any
}

const LinkSeeAll = (props: Props) => {
    let navigation = useNavigation()
    return (
        <TouchableOpacity style={styles.newsTrendSeeAllWrapper} onPress={() => props.onPress()}>
            <Text style={styles.newsTrendSeeAllText}>See All</Text>
            <AntDesign name="arrowright" color="blue" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    newsTrendSeeAllWrapper: {
        flexDirection: "row",
        alignItems: "center"
    },
    newsTrendSeeAllText: {
        color: "blue",
        fontFamily: "Nunito_400Regular",
        marginRight: 10
    },
})

export default LinkSeeAll