import { FlatList, View } from "react-native";
import React, { useCallback, useEffect } from "react";
import { deleteOrder, getOrders } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";

import { OrderItem } from "../../components";
import { styles } from "./styles";
/*import { FlatList, View } from "react-native";

import { ORDERS } from "../../constants";
import { OrderItem } from "../../components";
import React from "react";
import { styles } from "./styles";

const Orders = () => {
  const keyExtractor = (item) => item.id.toString();
  const onRemove = (id) => {
    console.warn(id);
  };
  const renderItem = ({ item }) => (
    <OrderItem item={item} onRemove={onRemove} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={ORDERS}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Orders;*/
import { useFocusEffect } from "@react-navigation/native";

const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.data);
  const keyExtractor = (item) => item.id.toString();
  const onRemove = (id) => {
    dispatch(deleteOrder(id));
  };
  const renderItem = ({ item }) => <OrderItem item={item} onRemove={onRemove} />;

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );
  return (
    <View style={styles.container}>
      <FlatList data={orders} keyExtractor={keyExtractor} renderItem={renderItem} />
    </View>
  );
};

export default Orders;