import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./shop";
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import { COLORS } from "../themes";
import { Ionicons } from "@expo/vector-icons"

const BottomTab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <BottomTab.Navigator initialRouteName='ShopTab' screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
                fontFamily: 'Montserrat-Regular',
                fontSize: 10,
            },
            tabBarStyle:{
                backgroundColor: COLORS.white,
            
            },
            tabBarActiveTintColor: COLORS.primary,
            tabBarInactiveTintColor: COLORS.grey,
            tabBarIconStyle: {
                fontSize: 22,
            }
        }}>
            <BottomTab.Screen name="ShopTab" component={ShopNavigator} options={{
                tabBarLabel: 'Shop',
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name={focused ? 'home' : 'home-outline'} size={size} color={color} />
                )
            }}/>
            <BottomTab.Screen name="CartTab" component={CartNavigator} options={{
                tabBarLabel: 'Cart',
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name={focused ? 'cart' : 'cart-outline'} size={size} color={color} />
                )
            }} />
            <BottomTab.Screen name="OrdersTab" component={OrdersNavigator} options={{
                tabBarLabel: 'Orders',
                tabBarIcon: ({focused, color, size}) => (
                    <Ionicons name={focused ? 'file-tray' : 'file-tray-outline'} size={size} color={color} />
                )
            }} />
        </BottomTab.Navigator>
    )
};

export default TabNavigator;