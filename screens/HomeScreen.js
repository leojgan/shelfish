import { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/LoadingComponent';

import { Card } from '@rneui/themed';

const Home = () => {
    const library = useSelector(state => state.library);

    const RenderLibraryItem = ({ item: game }) => {
        const isFavorite = game.isFavorite ? 'Favorite' : 'Not a Favorite';
        return (
            <Card>
                <Text>{game.title}</Text>
                <Text>ID #: {game.id}; {isFavorite}</Text>
            </Card>
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
            <Text>Will this ever work?</Text>
            <FlatList
                data={library.libraryArray}
                renderItem = {RenderLibraryItem}
                keyExtractor = {item => item.id}
            />
        </View>
    )
};

export default Home;