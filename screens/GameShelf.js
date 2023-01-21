import { GAMES } from '../data/GAMES'
import { useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { ListItem } from 'react-native-elements'

const GameShelf = (props) => {

    return(
        <>
        </>
    )

}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F0DF99',
    },
    button: {
        padding: 5,
        marginTop: 20,
        width: 250,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#1F5363',
        backgroundColor: '#1A748E',
    },
    image: {
        
        height: 50,
        width: 50,
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
    }
})

export default GameShelf