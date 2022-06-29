import CartNavigator from "./cart";
import IonicIcons from "@expo/vector-icons/Ionicons";
import MainNavigator from './main';
import OrdersNavigator from './orders';
import React from "react";
import { Text } from "react-native";
import { colors } from "../constants/themes/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const BottomTabs = createBottomTabNavigator();

const LabelBottomTab = (focused, label) => (
    <Text
        style={{
            color: focused ? colors.primary : colors.gray,
            fontFamily: focused ? 'SourceSansPro-Bold' : 'SourceSansPro-Regular',
        }}
    >
        {label}
    </Text>
);

const TabNavigator = () => {
    return (
        <BottomTabs.Navigator
            initialRouteName='ShopTab'
            screenOptions={{
                headerShown: false,
            }}
        >
            <BottomTabs.Screen
                name='ShopTab'
                component={MainNavigator}
                options={{
                    tabBarLabel: ({ focused }) => LabelBottomTab(focused, 'Tienda'),
                    tabBarIcon: ({ focused }) => (
                        <IonicIcons 
                            name={ focused ? 'home' : 'home-outline' } 
                            size={24}
                            color={ focused ? colors.primary : colors.gray }
                        />
                    )
                }}
            />
            <BottomTabs.Screen
                name='CartTab'
                component={CartNavigator}
                options={{
                    tabBarLabel: ({ focused }) => LabelBottomTab(focused, 'Carrito'),
                    tabBarIcon: ({ focused }) => (
                        <IonicIcons 
                            name={ focused ? 'cart' : 'cart-outline' } 
                            size={24}
                            color={ focused ? colors.primary : colors.gray }
                        />
                    )
                }}
                
            />
            <BottomTabs.Screen
                name='OrdersTab'
                component={OrdersNavigator}
                options={{
                    tabBarLabel: ({ focused }) => LabelBottomTab(focused, 'Órdenes'),
                    tabBarIcon: ({ focused }) => (
                        <IonicIcons 
                            name={ focused ? 'document-text' : 'document-text-outline' } 
                            size={24}
                            color={ focused ? colors.primary : colors.gray }
                        />
                    )
                }}
            />
        </BottomTabs.Navigator>
    )
};

export default TabNavigator;
