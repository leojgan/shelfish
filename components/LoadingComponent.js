import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

const Loading = () => {
    return (
            <View style={StyleSheet.loadingView} >
                <ActivityIndicator size='large' color='#006F80' />
                <Text style='styles.loadingText'></Text>
            </View>
    )
};

const styles = StyleSheet.create({
    loadingView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    loadingText: {
        color: '#006F80',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default Loading;