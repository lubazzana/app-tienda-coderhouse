import { OrdersScreen } from "../screens/index";
import { Platform } from "react-native";
import React from "react";
import { colors } from "../constants/themes/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const isIOS = Platform.OS === 'ios';

const OrdersNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Orders"
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
                name="Orders" 
                component={OrdersScreen} 
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default OrdersNavigator;