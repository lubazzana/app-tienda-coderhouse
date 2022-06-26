import { Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const ProductItem = ({ item, onSelected }) => {
    return(
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.containerTouchable}
                onPress={() => onSelected(item)}
            >
                <View>
                    <Text style={styles.name}>{item.name}</Text>
                </View>
                <View>
                    <Text style={styles.details}>$ {item.price.toFixed(2)}</Text>
                    <Text style={styles.details}>{item.weight}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ProductItem;