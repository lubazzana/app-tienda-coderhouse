import { FlatList, Text, View } from "react-native";

import { OrderItem } from "../../components";
import React from "react";
import { orders } from "../../data/orders";
import { styles } from "./styles";

const OrdersScreen = () => {
    const onHandlerDeleteItem = (id) => {
        console.log(id);
    }
    
    const renderItem = ({ item }) => <OrderItem item={item} onDelete={onHandlerDeleteItem} />

    return (
        <View style={styles.container}>
            <FlatList
                    data={orders}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
        </View>
    )
};

export default OrdersScreen;