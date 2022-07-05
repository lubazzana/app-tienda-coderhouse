import { FlatList, SafeAreaView, View } from "react-native";
import React, { useEffect } from "react";
import { deleteOrder, getOrders } from "../../store/actions/order.action";
import { useDispatch, useSelector } from "react-redux";

import { OrderItem } from "../../components/index";
import { styles } from "./styles";

const OrdersScreen = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.order.items);
    
    const onDeleteOrder = (id) => {
        dispatch(deleteOrder(id));
    };

    const renderItem = ({ item }) => (
        <OrderItem item={item} onDelete={onDeleteOrder} />
    );

    useEffect(() => {
        dispatch(getOrders());
    }, []);
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <View style={styles.orderList}>
                    <FlatList
                            data={orders}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id}
                        />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default OrdersScreen;