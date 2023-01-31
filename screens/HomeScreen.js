import { FlatList, Text, View } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import Loading from '../components/LoadingComponent';

const Home = () => {
    const library = useSelector(state => state.library);

    const RenderLibraryItem = ({ item: game }) => {
        const players = game.min_players === game.max_players ? game.min_players : `${game.min_players}-${game.max_players}`;
        const gameTime = game.min_playtime === game.max_playtime ? game.min_playtime : `${game.min_playtime}-${game.max_playtime}`;
        return (
            <ListItem>
                <Avatar rounded source = {{ uri: game.thumb_url }} />
                <ListItem.Content>
                    <ListItem.Title>{game.name}</ListItem.Title>
                    <ListItem.Subtitle>Players: {players}  |  Time: {gameTime} min  |  Ages: {game.min_age}+</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    if (library.isLoading) return (
        <Loading />
    )
    if (library.errMess) {
        return (
            <View>
                <Text>{library.errMess}</Text>
            </View>
        )
    }

    return(
        <View>
            <FlatList
                data={library.libraryArray}
                renderItem = {RenderLibraryItem}
                keyExtractor = {item => item.id}
            />
        </View>
    )
};

export default Home;