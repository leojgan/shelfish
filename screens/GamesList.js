import { View, FlatList, StyleSheet } from 'react-native';
import { Avatar, Icon, ListItem, Text } from '@rneui/themed';
import { useSelector } from "react-redux";
import { Button } from '@rneui/base';

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
            <ListItem.Swipeable
                minSlideWidth = {10}
                leftWidth = {70}
                leftContent={() => {
                    <Button
                        containerStyle={{
                            flex: 1,
                            justifyContent: 'center',
                            backgroundColor: '#00FF00'
                        }}
                        type = 'clear'
                        icon = {{
                            name: 'archive-outline',
                            type: 'material-community'
                        }}
                    />
                }}
                rightWidth = {90}
                RightContent={() => {
                    <Button
                        title = 'Delete'
                        onPress = {() => console.log('Reset')}
                        icon = {{ name: 'delete', color: 'white' }}
                        buttonStyle = {{ minHeight: '100%', backgroundColor: 'red' }}
                    />
                }}
                bottomDivider
                containerStyle = {styles.container}
            >
                <Avatar
                    size={36}
                    source={{ uri: game.thumb_url }}
                    rounded
                    avatarStyle={styles.avatarStyle}
                />
                <ListItem.Content onPress={ () => navigation.navigate('GameInfo', {game})}>
                    <ListItem.Title style={styles.title}>{game.name}</ListItem.Title>
                    <ListItem.Subtitle>
                        <View style={{flex: 1, flexDirection: 'row', paddingTop: 5}}>
                            <View style={{flex:1}}>
                                <Text style={styles.subtitle}>{game.year_published}</Text>
                            </View>
                            <View style={{flexDirection: 'row', flex:2}}>
                                <Icon
                                    color = '#F0F8FF'
                                    name = 'users'
                                    size = {16}
                                    type = 'font-awesome'
                                />
                                <Text style={styles.subtitle}>{players}</Text>
                            </View>
                            <View style={{flexDirection: 'row', flex:3}}>
                                <Icon
                                    color = '#F0F8FF'
                                    name = 'clock-o'
                                    size = {16}
                                    type = 'font-awesome'
                                />
                                <Text style={styles.subtitle}>{playTime} min.</Text>
                            </View>
                            <View style={{flexDirection: 'row', flex:2}}>
                                <Icon
                                    color = '#F0F8FF'
                                    name = 'child'
                                    size = {16}
                                    type = 'font-awesome'
                                />
                                <Text style={styles.subtitle}>{minAge} +</Text>
                            </View>
                        </View>
                    </ListItem.Subtitle>
                </ListItem.Content>
            </ListItem.Swipeable>
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
        borderColor: '#B91F22'
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
        color: '#E9EBE7',
        marginRight: 20
    }
})

export default GamesList;