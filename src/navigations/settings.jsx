import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../themes";
import { Address, Profile, Settings } from '../screens';
import { TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

const SettingsNavigator = () =>{
    return (
        <Stack.Navigator initialRouteName="Settings" screenOptions= {({navigation}) => ({ 
            headerStyle: {
                backgroundColor: COLORS.primary,
            },
            headerTitleStyle: {
                fontFamily: 'Montserrat-Bold',
                fontSize: 20,
            },
            headerTintColor: COLORS.white,
            animation: 'slide_from_bottom',
            headerLeft: () => (
                <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back-circle" size={30} color={COLORS.white} />
                </TouchableOpacity>
            ),
            title: 'Settings',
            headerRight: null,
            })}>
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Address" component={Address} />
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
    goBack: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
    },
})


export default SettingsNavigator;