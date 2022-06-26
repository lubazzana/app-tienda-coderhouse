import { CategoriesScreen, ProductDetailsScreen, ProductsScreen } from "../screens/index";

import { Platform } from "react-native";
import React from "react";
import { colors } from "../constants/themes/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === 'ios';

const MainNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Categories"
            screenOptions={{
                headerStyle: {
                    backgroundColor: isIOS ? colors.secondary : colors.primary,
                    height: 100,
                },
                headerTintColor: isIOS ? colors.black : colors.white,
                headerTitleStyle: {
                    fontFamily: 'SourceSansPro-Bold',
                }
            }}
        >
            <Stack.Screen 
                name="Categories" 
                component={CategoriesScreen} 
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name="Products" 
                component={ProductsScreen}
                options={({ route }) => ({
                    title: route.params.title,
                })}
            />
            <Stack.Screen 
                name="ProductDetails" 
                component={ProductDetailsScreen}
                options={({ route }) => ({
                    title: route.params.name,
                })} 
            />
        </Stack.Navigator>
    );
}

export default MainNavigator;