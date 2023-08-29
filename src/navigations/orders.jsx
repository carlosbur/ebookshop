import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Orders } from "../screens";
import { COLORS } from "../themes";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Orders" screenOptions= {{ 
            headerStyle: {
                backgroundColor: COLORS.primary,
            },
            headerTitleStyle: {
                fontFamily: 'Montserrat-Bold',
                fontSize: 20,
            },
            headerTintColor: COLORS.white,
            animation: 'slide_from_bottom'
            }}>
            <Stack.Screen name="Tus compras" component={Orders} />
        </Stack.Navigator>
    )
};

export default OrdersNavigator;