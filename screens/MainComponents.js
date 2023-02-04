import Constants from 'expo-constants';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchGames } from '../redux/slices/gamesSlice';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"
import GamesList from './GamesList';
import GameInfoScreen from './GameInfoScreen';
import { Image } from '@rneui/themed';
import { Icon } from '@rneui/base';

const Drawer = createDrawerNavigator();

const GamesListNavigator = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
            <Stack.Screen name='GamesList' component={GamesList} />
            <Stack.Screen
                name = 'GameInfo'
                component = {GameInfoScreen}
                options = { ({ route }) => ({ title: route.params.game.name})}
            />
        </Stack.Navigator>
    )
}

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerHeader}>
                <View style={{flex: 1}}>
                    <Image source={require('../assets/ShelfishLogoS.png')} style={styles.drawerHeaderImage} />
                </View>
                <View style={{flex: 2}}>
                    <Image source={require('../assets/titles.png')} style={styles.drawerHeaderText} />
                </View>
            </View>
            <DrawerItemList {...props} labelStyle={styles.labelStyle} />
        </DrawerContentScrollView>
    )
}

const Main = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchGames())
    }, [])

    return (
        <View style={{ flex: 1 , paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <Drawer.Navigator
                initialRouteName = 'Games'
                drawerStyle = {styles.drawerStyle}
                drawerContent = {CustomDrawerContent}
                screenOptions = {styles.screenHeader}
            >
                <Drawer.Screen name='Games' component={GamesListNavigator}
                    options={{
                        title: 'Game Shelf', // Header / Drawer Name
                        drawerIcon: ({ color }) => (
                            <Icon
                                name = 'th-list'
                                type = 'font-awesome'
                                size = {24}
                                color = {color}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    screenHeader: {
        headerStyle: {backgroundColor: '#B91F22'},
        headerTintColor: '#E9EBE7',
        headerTitleAlign: 'center',
    },
    drawerHeader: {
        backgroundColor: '#3B4055',
        height: 120,
        alighItems: 'center',
        jsutifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderImage: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
        marginTop: 10
    },
    drawerHeaderText:{
        resizeMode: 'contain',
        width: 150,
        height: 50,
        marginTop: 35,
        marginLeft: 10,
    },
    drawerStyle: {
        backgroundColor: '#5AB9C9'
    },
    labelStyle: {
        fontWeight: 'bold'
    }
})

export default Main;