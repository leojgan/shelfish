import { View, StyleSheet } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import { ListItem, Card } from 'react-native-elements' 

const homeNav = [
    {
        id: 0,
        name: 'Help Me Choose',
        component: 'HelpMeChoose'
    },
    {
        id: 1,
        name: 'Favorites!',
        component: 'Favorites'
    },
    {
        id: 2,
        name: 'What\'s New?',
        component: 'WhatsNew'
    },
    {
        id: 3,
        name: 'Browse Library',
        component: 'BrowseLibrary'
    }
]

const NavCatalogue = (props) => {
    const renderButton = ({ item }) => {
        return (
            <ListItem onPress={()=>props.onPress(item.id)}>
                <Card style={styles.navCard}>
                    <Card.Title>{item.name}</Card.Title>
                </Card>
            </ListItem>
        )
    }
    return (
        <Card title="Nav Buttons">
            <FlatList
                data={homeNav}
                renderItem={renderButton}
                keyExtractor={item=>item.id.toString()}
            />
        </Card>
    )
}


const HomeScreen = () => {
    return(
        <View style={{alignItems:'center'}}>
            <NavCatalogue />
        </View>
    )
}

const styles = StyleSheet.create({
    navCard: {
        flex: 1,
        padding: 3,
        color: '#1A748E'
    },
})

export default HomeScreen