import { Text, TouchableOpacity, View } from "react-native";

import IonicIcons from "@expo/vector-icons/Ionicons";
import React from "react";
import { colors } from "../../constants/themes/colors";
import { styles } from "./styles";

const formatDate = (time) => {
    const date = new Date(time);
    return date.toLocaleDateString();
}

const OrderItem = ({ item, onDelete }) => {
    return (
        <View style={styles.container}>
            <View style={styles.detail}>
                <Text style={styles.date}>{formatDate(item.date)}</Text>
                <Text style={styles.total}>${item.total}</Text>
            </View>
            <TouchableOpacity onPress={() => onDelete(item.id)}>
                <IonicIcons
                    name="trash" 
                    size={24} 
                    color={colors.primary}
                />
            </TouchableOpacity>
        </View>
    )
}

export default OrderItem;