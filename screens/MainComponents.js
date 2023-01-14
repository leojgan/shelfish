import Constants from 'expo-constants'
import HomeScreen from './HomeScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import { Platform, View } from 'react-native'

const Drawer = createDrawerNavigator()
const screenOptions = { headerStyle: {backgroundColor:'#1A748E'}, headerTintColor:'#fff'}

const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Home' }} />
        </Stack.Navigator>
    )
}

const Main = () => {
    return (
        <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <Drawer.Navigator initialRouteName='Home' drawerStyle={{ backgroundColor:'#707070'}}>
                <Drawer.Screen name='Home' component = {HomeNavigator} options={{ title: 'Home' }} />
            </Drawer.Navigator>
        </View>
    )
}

export default Main