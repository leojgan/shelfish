import ShelfishLogo from '../assets/ShelfishLogo.png';
import { useState } from 'react'
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Login = ({ navigation }) => {
    const [ username, setUsername ] = useState(null)
    const [ password, setPassword ] = useState(null)

    const clickOpacity = '0.7'

    return (
        <View style={styles.view}>
            <View style={styles.section}>
                <Text style={styles.text}>
                    Username:
                </Text>
                <TextInput
                value = {username}
                style = {styles.input}
                onChangeText = { () => setUsername(username) }
                />
            </View>
            <View style={styles.section}>
            <Text style={styles.text}>Password:</Text>
            <TextInput
                value = {password}
                style = {styles.input}
                onChangeText = { () => setPassword(password) }
                />
            </View>
            <View style={styles.buttons}>
                <TouchableOpacity
                    style = {styles.signup}
                    activeOpacity = {clickOpacity}
                    onPress = { () => navigation.navigate('Welcome') }
                    >
                    <Text style={styles.btnText}>Sign Up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style = {styles.signin}
                    activeOpacity = {clickOpacity}
                    onPress = { () => navigation.navigate('Home') }
                    >
                    <Text style={styles.btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
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
    section: {
        margin: 20,
        width: 300,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 5,
    },
    input: {
        padding: 5,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
    },
    buttons: {
        width: 300,
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    signup: {
        padding: 10,
        width: 120,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#BF3C26',
        backgroundColor: '#EB5724',
    },
    signin: {
        padding: 10,
        width: 120,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#1F5363',
        backgroundColor: '#1A748E',
    },
    image: {
        resizeMode: 'contain',
        width: 275,
    }
})

export default Login