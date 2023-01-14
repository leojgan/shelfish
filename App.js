import Main from './screens/MainComponents'
import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  )
}

// prop example: <Foo style={styles.container}>**bar**</Foo>
// Need to import {StyleSheet} from 'react-native';
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
