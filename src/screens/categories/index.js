import { Button, Text, View } from "react-native";

import React from "react";
import { styles } from "./styles";

const CategoriesScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Lista de categorías</Text>
            <Button title="VER PRODUCTOS" onPress={() => navigation.navigate("Products")} />
        </View>
    );
}

export default CategoriesScreen;
