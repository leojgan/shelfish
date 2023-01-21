import ShelfishLogo from '../assets/ShelfishLogo.png';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Landing = ({ navigation }) => {
    return (
        <View style={styles.view}>
            <Image source={ShelfishLogo} style={styles.image} />
            <Text style={styles.title}>Shelfish</Text>
            <Text style={styles.subtitle}>Virtual Game Shelf</Text>
            <TouchableOpacity
                style = {styles.button}
                activeOpacity = {0.7}
                onPress = { () => navigation.navigate('Login')}
            >
                <Text style = {styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F0DF99',
    },
    title: {
        fontSize: 42,
        fontWeight: 'bold'
    },
    subtitle: {
        fontsize: 36,
        fontStyle: 'italic'
    },
    button: {
        padding: 10,
        margin: 20,
        width: 150,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#BF3C26',
        backgroundColor: '#EB5724',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    image: {
        resizeMode: 'contain',
        marginTop: 75,
        marginBottom: 40,
        height: 300,
        margin: 20,
    }
})

export default Landing