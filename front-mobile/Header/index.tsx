import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

function Header() {
  const navigation = useNavigation();
  const HendleOnPress = () => {
    // @ts-ignore
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={HendleOnPress}>
      <View style={styles.container}>
        <Image source={require("../assets/logo.png")} />
        <Text style={styles.text}>DS DELIVERY</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DA5C5C",
    height: 100,
    marginTop: 0,
    paddingTop: 60,
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: "#fff",
    marginLeft: 15,
    fontFamily: "OpenSans_700Bold",
  },
});

export default Header;
