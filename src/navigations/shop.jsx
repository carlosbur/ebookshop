import { createNativeStackNavigator} from "@react-navigation/native-stack";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { Categories, Products } from '../screens'
import { COLORS } from "../themes";
import { Ionicons } from '@expo/vector-icons'
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Stack = createNativeStackNavigator();

function ShopNavigator(){
    return (
        <Stack.Navigator initialRouteName="Categories" screenOptions= {{ CardStyleInterpolators : CardStyleInterpolators.forRevealFromBottomAndroid,
        presentation: 'card',
        headerStyle: {
            backgroundColor: COLORS.primary,
        },
        headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 20,
        },
        headerTintColor: COLORS.white,
        }}>
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Products" component={Products} options={ ({navigation, route}) => ({
                headerStyle:{
                    backgroundColor: route.params.color,                    
                },
                headerLeft: () => (
                    <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle" size={30} color={COLORS.black} />
                    </TouchableOpacity>
                ),
            })} 
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    goBack: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
})

export default ShopNavigator;