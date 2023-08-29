import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "../screens";
import { COLORS } from "../themes";

const Stack = createNativeStackNavigator();

const CartNavigator = () =>{
    return (
        <Stack.Navigator initialRouteName="Cart" screenOptions= {{ 
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
            <Stack.Screen name="Carrito" component={Cart} />
        </Stack.Navigator>
    )
};

export default CartNavigator;