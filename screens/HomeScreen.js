import { Button, ScrollView } from "react-native"

const Favorites = () => {
    return (
        <Button title="Favorites!" />
    )
}

const BrowseLibrary = () => {
    return (
        <Button title="Browse Library" />
    )
}

const HelpMeChoose = () => {
    return (
        <Button title="Help Me Choose" />
    )
}

const WhatsNew = () => {
    return (
        <Button title="What's New?" />
    )
}

const HomeScreen = () => {
    return(
        <ScrollView>
            <HelpMeChoose />
            <Favorites />
            <WhatsNew />
            <BrowseLibrary />
        </ScrollView>
    )
}

export default HomeScreen