import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { addItem } from "../../store/actions/cart.action";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const ProductDetailsScreen = ({ route }) => {
    const dispatch = useDispatch();
    const product = useSelector((state) => state.product.selected);
    const { productId } = route.params;

    const onHandlerAddToCart = (item) => {
        dispatch(addItem(product));
    };

    return (
        <View style={styles.container}>
            <View style={styles.details}>
                <Text style={styles.text}>id: {product.id}</Text>
                <Text style={styles.text}>{product.name}</Text>
                <Text style={styles.text}>{product.description}</Text>
                <Text style={styles.text}>weight: {product.weight}</Text>
                <Text style={styles.text}>price: $ {product.price.toFixed(2)}</Text>
                <Button color={colors.secondary} title="AÑADIR AL CARRITO" onPress={() => onHandlerAddToCart(product)} />
            </View>
        </View>
    );
}

export default ProductDetailsScreen;