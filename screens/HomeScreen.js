import ShelfishLogo from '../assets/ShelfishLogo.png';
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

const Home = ({ navigation }) => {

    const homeNav = [
        {
            id: 0,
            name: 'Favorite Games',
            component: 'Favorites'
        },
        {
            id: 1,
            name: 'Game Shelf',
            component: 'Library'
        },
        {
            id: 2,
            name: 'Help Me Choose',
            component: 'QueryGames'
        },
        {
            id: 3,
            name: 'Random Game',
            component: 'RandomGame'
        }
    ]

    const RenderNav = ({ array }) => array.map(screen => {
        return (
            <TouchableOpacity
                key={screen.id}
                style = {styles.button}
                activeOpacity={0.5}
                onPress = { () => navigation.navigate(screen.component) }
            >
                <Text style={styles.btnText}>{screen.name}</Text>
            </TouchableOpacity>
        )
    })

    return (
        <View style={styles.view}>
                <RenderNav array={homeNav} />
                <Image source={ShelfishLogo} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F0DF99',
    },
    button: {
        padding: 15,
        marginTop: 20,
        width: 250,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#1F5363',
        backgroundColor: '#1A748E',
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
    },
    image: {
        resizeMode: 'contain',
        height: 450,
        width: 250,
        marginTop: 30,
    }
})

export default Home