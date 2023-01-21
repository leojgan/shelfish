import Landing from './LandingScreen'
import Login from './LoginScreen'
import GameShelf from './GameShelf'
import Home from './HomeScreen'
import Welcome from './WelcomeScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'

const Stack = createNativeStackNavigator()

const Main = () => {
    return (
        <Stack.Navigator initialRouteName='Library'>
            <Stack.Screen name='Landing' component={Landing} options={styles.nav} />
            <Stack.Screen name='Login' component={Login} options={styles.nav} />
            <Stack.Screen name='Home' component={Home} options={styles.nav} />
            <Stack.Screen name='Welcome' component={Welcome} options={styles.nav} />
            <Stack.Screen name='Library' component={GameShelf} options={styles.nav} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    nav: {
        headerStyle: {
            backgroundColor: '#1A748E',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            textAlign: 'center',
            fontWeight: 'bold',
        }
    }
})

export default Main