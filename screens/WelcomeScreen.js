import ShelfishLogo from '../assets/ShelfishLogo.png';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Welcome = ({ navigation }) => {
    return(
        <View style={styles.view}>
            <Image source={ShelfishLogo} style={styles.image} />
            <Text style={styles.header}>Welcome to Shelfish</Text>
            <Text style={styles.subheader}>Your Virtual Game Shelf</Text>
            <View style={styles.textbox}>
                <Text style={styles.text}>Swipe to view a quick list of features, or click the button to dive right in!</Text>
            </View>
            <TouchableOpacity
                style = {styles.button}
                activeOpacity = {'0.7'}
                onPress = { () => navigation.navigate('Home') }
            >
                <Text style={styles.btnText}>Get Started!</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F0DF99' 
    },
    image: {
        resizeMode: 'contain',
        height: 200,
        margin: 40,
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    subheader: {
        fontSize: 20,
        fontStyle: 'italic',
        margin: 20,
    },
    textbox: {
        width: 300,
    },
    text: {

    },
    button: {
        margin: 40,
        padding: 10,
        width: 120,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#1F5363',
        backgroundColor: '#1A748E'
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    }
})

export default Welcome