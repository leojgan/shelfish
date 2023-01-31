import { useState } from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import { Input, Rating } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/LoadingComponent';
import { fetchSearch } from '../redux/sliceSearch';
import { Card } from '@rneui/themed';

const Search = () => {
    const dispatch = useDispatch();
    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = () => {
        const newSearch = {
            query: searchInput
        };
        dispatch(fetchSearch(newSearch))
        
    }

    return(
        <View>
            <Text>Search Board Game Atlas for games to add to your library:</Text>
            <Input
                placeholder = 'game title'
                onChangeText = {searchInput => setSearchInput(searchInput)}
                value = {searchInput}
            />
            <Text>You have input: {searchInput}</Text>
            <Button
                title = 'Search'
                onPress = {() => handleSubmit()}
            />
        </View>
    )
};


export default Search;