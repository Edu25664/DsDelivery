import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Routes from './Routes/Routes';

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
      <StatusBar style="auto" />
      <Routes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
})
