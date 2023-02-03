import { View, FlatList, StyleSheet } from 'react-native';
import { Avatar, ListItem } from '@rneui/themed';
import { useSelector } from "react-redux";

const GamesList = () => {
    const GAMES = useSelector(state => state.games.gamesList.games);
    const sortedGames = [...GAMES].sort((a, b) => (a.name > b.name) ? 1 : (a.name < b.name) ? -1 : 0);

    const renderGameItem = ({ item: game }) => {
        const players = (game.min_players !== game.max_players)
            ? `${game.min_players}-${game.max_players}`
            : game.min_players;
        const playTime = (game.min_playtime !== game.max_playtime)
            ? `${game.min_playtime}-${game.max_playtime}`
            : `${game.min_playtime}`;
        const minAge = `${game.min_age}`
        const gameInfo = `${game.year_published}  |  ${players} Players  |  ${playTime} min.  |  ${minAge}+`

        return (
            <ListItem
                bottomDivider
                containerStyle = {styles.container}
                onPress
            >
                <Avatar
                    size={36}
                    source={{ uri: game.thumb_url }}
                    rounded
                    avatarStyle={styles.avatarStyle}
                />
                <ListItem.Content>
                    <ListItem.Title style={styles.title}>{game.name}</ListItem.Title>
                    <ListItem.Subtitle style={styles.subtitle}>{gameInfo}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                data = {sortedGames}
                renderItem = {renderGameItem}
                keyExtractor = {item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    avatarStyle: {
        borderWidth: 1,
        borderColor: '#ED1F24'
    },
    container: {
        backgroundColor: '#3B4055'
    },
    title: {
        fontWeight: 'bold',
        fontFamily: 'serif',
        color: '#F0F8FF',

    },
    subtitle: {
        fontStyle: 'italic',
        paddingLeft: 10,
        color: '#E9EBE7'
    }
})

export default GamesList;