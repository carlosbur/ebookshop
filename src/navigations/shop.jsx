import { createNativeStackNavigator} from "@react-navigation/native-stack";

import { Categories, Products, ProductDetail } from '../screens'
import { COLORS } from "../themes";
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import SettingsNavigator from "./settings";
import { logout } from '../store/auth/auth.slice';

const Stack = createNativeStackNavigator();

function ShopNavigator(){
    const dispatch = useDispatch();
    return (
        <Stack.Navigator initialRouteName="Categories" screenOptions= {({navigation}) => ({ 
        headerStyle: {
            backgroundColor: COLORS.primary,
        },
        headerTitleStyle: {
            fontFamily: 'Montserrat-Bold',
            fontSize: 16,
            numberOfLines: 2,
            ellipsizeMode: 'tail'

        },
        headerTintColor: COLORS.white,
        animation: 'slide_from_bottom',
        headerRight: () => (
            <TouchableOpacity style={styles.icon}>
                <Ionicons name="settings-outline" size={24} color={COLORS.white} onPress={() => navigation.navigate('SettingsStack')}/>
            </TouchableOpacity>
        ),
        headerLeft: () => (
            <TouchableOpacity style={styles.icon} onPress={() => dispatch(logout())}>
                <Ionicons name="ios-log-out-outline" size={24} color={COLORS.white} />
            </TouchableOpacity>
        ),
        })}>
            <Stack.Screen name="Categorías" component={Categories} />
            <Stack.Screen name="Products" component={Products} options={ ({navigation, route}) => ({
                headerStyle:{
                    backgroundColor: route.params.color,                    
                },
                headerLeft: () => (
                    <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
                    </TouchableOpacity>
                ),
                title: route.params.name
            })} 
            />
            <Stack.Screen name="ProductDetail" component={ProductDetail} options={ ({navigation, route}) => ({
                headerStyle:{
                    backgroundColor: route.params.color,
                },

                headerLeft: () => (
                    <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
                    </TouchableOpacity>
                ),
                title: route.params.name,
            })} 
            />
            <Stack.Screen
            name="SettingsStack"
            component={SettingsNavigator}
            options={({navigation, route}) => ({
                    headerShown: false,
                })
            }
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    goBack: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: Platform.OS === 'android' ? 15 : 0,
    },
    goBackText: {
        fontSize: 14,
        color: COLORS.text
    },
    icon:{
        marginRight: Platform.OS === 'android' ? 15 : 0,
    }
})

export default ShopNavigator;