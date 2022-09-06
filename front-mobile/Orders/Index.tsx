import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { StyleSheet, View, Alert, Text } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import { fechtOrders } from "../api";

import Header from "../Header";
import OrderCard from "../OrderCard/Index";
import { Order } from "../types";

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const fetchData = () =>{
    setIsLoading(true);
    fechtOrders()
      .then((response) => setOrders(response.data))
      .catch(() => Alert.alert("Houver um erro ao buscar os pedidos!"))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    if(isFocused){
      fetchData();
    }
  }, [isFocused]);

  const HendleOnPress = (order: Order) => {
    // @ts-ignore
    navigation.navigate("OrderDetails", { order });
  };

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading ? (
          <Text style={styles.text}>CARREGANDO...</Text>
        ) : (
          orders.map((order) => (
            <TouchableWithoutFeedback
              key={order.id}
              onPress={() => {
                HendleOnPress(order)
              }}
            >
              <OrderCard order={order} />
            </TouchableWithoutFeedback>
          ))
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: "5%",
    paddingLeft: "5%",
  },
  text: {
    textAlign: "center",
    marginTop: 100,
    marginLeft: 5,
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: 19,
    letterSpacing: -0.24,
    color: "#9E9E9E",
    fontFamily: "OpenSans_400Regular",
  },
});

export default Orders;
