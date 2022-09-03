import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Home from './Home/Index';

export default function App() {

    let [fontsLoaded] = useFonts({
      OpenSans_700Bold,
      OpenSans_400Regular
    });

    if (!fontsLoaded) {
      return null;
    }

  return (
    <View style={styles.container}>
      <Header/>
      <Home/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
