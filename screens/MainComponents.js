import { useEffect } from 'react';
import { Icon } from 'react-native-elements';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Constants from 'expo-constants';
import logo from '../assets/ShelfishLogo.png';
import Home from './HomeScreen';
import Search from './SearchScreen';
import { fetchLibrary } from '../redux/sliceLibrary';

const Drawer = createDrawerNavigator();
const screenOptions = { headerStyle: {backgroundColor: '#5637DD' , headerTintColor: '#fff' }};

const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props} >
            <DrawerItemList {...props} labelStyle={{ fontWeight: 'bold' }} />
        </DrawerContentScrollView>

    )
}

const Main = () => {

    const dispatch = useDispatch();
    useEffect(() => {dispatch(fetchLibrary())}, [dispatch]);
    
    return (
        <View style={{ flex: 1 , paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}>
            <Drawer.Navigator initialRouteName='Home' drawerStyle={{ backgroundColor:'#CEC8FF' }} drawerContent={CustomDrawerContent} >
                <Drawer.Screen name='Home' component={Home}
                    options={{
                        title: 'Game Shelf', // Header / Drawer Name
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='home'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 28 }}
                                color={color}
                            />
                        )
                    }}
                />
                <Drawer.Screen name='Search' component={Search}
                    options={{
                        title: 'Search', // Header / Drawer Name
                        drawerIcon: ({ color }) => (
                            <Icon
                                name='search'
                                type='font-awesome'
                                size={24}
                                iconStyle={{ width: 28 }}
                                color={color}
                            />
                        )
                    }}
                />
            </Drawer.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerHeader: {
        backgroundColor: '#5637DD',
        height: 140,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row'
    },
    drawerHeaderText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    drawerImage: {
        margin: 10,
        height: 60,
        width: 60
    },
    stackIcon: {
        marginLeft: 10,
        color: '#fff',
        fontSize: 24
    }
})

export default Main;