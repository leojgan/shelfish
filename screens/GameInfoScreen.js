import { Avatar, Card, Header, Icon, Text } from '@rneui/themed';
import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { Image } from '@rneui/themed';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';

const GameInfoScreen = ({ route }) => {
    const { game } = route.params;
    const rating = game.average_user_rating === 0 ? 'N/A' : `${game.average_user_rating.toPrecision(3)} / 5`;
    const learning = game.average_learning_complexity === 0 ? 'N/A' : `${game.average_learning_complexity.toPrecision(3)} / 5`;
    const strategy = game.average_strategy_complexity === 0 ? 'N/A' : `${game.average_strategy_complexity.toPrecision(3)} / 5`;

    const mechanicsEx = ['Cooperative', 'Deck-Building', 'Campaign', 'Trading', 'Worker Placement' ];
    const categoriesEx = ['Adventure', 'Dungeon Crawl', 'Economic', 'Path-Building', 'Tile Placement'];

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Image
                source={{ uri: game.image_url }}
                containerStyle={styles.image}
            />
            <View style={styles.ratingsContainer}>
                <Card containerStyle={styles.ratingCard}>
                    <Card.Title style={styles.cardTitle}>Rating</Card.Title>
                    <Card.Divider/>
                    <Text style={styles.ratingText}>{rating}</Text>
                </Card>
                <Card containerStyle={styles.ratingCard}>
                    <Card.Title style={styles.cardTitle}>Learning{'\n'}Complexity</Card.Title>
                    <Card.Divider/>
                    <Text style={styles.ratingText}>{learning}</Text>
                </Card>
                <Card containerStyle={styles.ratingCard}>
                    <Card.Title style={styles.cardTitle}>Gameplay{'\n'}Complexity</Card.Title>
                    <Card.Divider/>
                    <Text style={styles.ratingText}>{strategy}</Text>
                </Card>
            </View>
            <View style={styles.listsContainer}>
                <Card containerStyle={styles.listCard}>
                    <Card.Title>Mechanics</Card.Title>
                    <Card.Divider/>
                    {mechanicsEx.map(mechanic => <Text>{'\u2022'} {mechanic}</Text>)}
                </Card>
                <Card containerStyle={styles.listCard}>
                    <Card.Title>Categories</Card.Title>
                    <Card.Divider/>
                    {categoriesEx.map(category => <Text>{'\u2022'} {category}</Text>)}
                </Card>
            </View>
            <View style={styles.ratingsContainer}>
                <Card containerStyle={styles.ratingCard}>
                    <Card.Title>Game Page</Card.Title>
                    <Card.Divider/>
                    <View style={{ alignItems: 'center' }}>
                        <Icon
                            raised
                            reverse
                            name='home'
                            color='#006F80'
                        />
                    </View>
                </Card>
                <Card containerStyle={styles.ratingCard}>
                    <Card.Title>Rules Page</Card.Title>
                    <Card.Divider/>
                    <View style={{ alignItems: 'center' }}>
                        <Icon
                            raised
                            reverse
                            name='gavel'
                            color='#006F80'
                        />
                    </View>
                </Card>
                <Card containerStyle={styles.ratingCard}>
                    <Card.Title>Store Link</Card.Title>
                    <Card.Divider/>
                    <View style={{ alignItems: 'center' }}>
                        <Icon
                            raised
                            reverse
                            name='shopping-cart'
                            color='#006F80'
                        />
                    </View>
                </Card>
            </View>
            <View style={{alignItems: 'center'}}>
                <Card containerStyle={{ minWidth: '95%', marginTop: 5 }}>
                    <Card.Title>About {game.name}:</Card.Title>
                    <Text style={{fontSize: 14}}>{game.description_preview}.</Text>
                </Card>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
        aspectRatio: 1,
        width: '95%',
        flex: 1,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 5
    },
    scrollContainer: {
        alignContent: 'center',
        backgroundColor: '#3B4055',
        flexGrow: 1
    },
    ratingsContainer: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 5
    },
    ratingCard: {
        minWidth: '30%',
        margin: 5,
    },
    ratingText: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    listsContainer: {
        flexGrow: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 5
    },
    listCard: {
        minWidth: '45%',
        margin: 5
    },
    cardTitle: {
        fontSize: 12,
        minHeight: 30,
    }
})

export default GameInfoScreen;