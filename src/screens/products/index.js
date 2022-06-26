import { FlatList, View } from "react-native";

import { ProductItem } from "../../components/index";
import React from "react";
import { products } from "../../data/products";
import { styles } from "./styles";

const ProductsScreen = ({ navigation, route }) => {
    const { categoryId } = route.params;

    const filterProducts = products.filter(
        product => product.categoryId === categoryId
    );

    const renderItem = ({ item }) => (
        <ProductItem item={item} onSelected={onSelected}/>
    )

    const onSelected = (item) => {
        navigation.navigate("ProductDetails", {
            productId: item.id,
            name: item.name,
        })
    }
    
    return (
        <View style={styles.container}>
            <FlatList
                data={filterProducts}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    );
}

export default ProductsScreen;