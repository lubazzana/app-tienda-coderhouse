import { Button, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const ProductsScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Lista de productos</Text>
            <Button title="VER DETALLE DEL PRODUCTO" onPress={() => navigation.navigate("ProductDetails")} />
        </View>
    );
}

export default ProductsScreen;