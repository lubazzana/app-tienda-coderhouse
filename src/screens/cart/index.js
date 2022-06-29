import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { CartItem } from "../../components";
import React from "react";
import { cart } from "../../data/cart";
import { styles } from "./styles";

const CartScreen = () => {
    const total = 1000;

    const onHandlerDeleteItem = (id) => {
        console.log(id);
    }

    const onHandlerConfirmCart = () => {
        console.log('Confirm cart');
    }

    const renderItem = ({ item }) => <CartItem item={item} onDelete={onHandlerDeleteItem} />

    return (
        <View style={styles.container}>
            <View style={styles.cartList}>
                <FlatList
                    data={cart}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity 
                    style={styles.buttonConfirm} 
                    onPress={() => onHandlerConfirmCart()}
                >
                    <Text style={styles.buttonText}>Confirmar</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalTitle}>Total:</Text>
                        <Text style={styles.total}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default CartScreen;