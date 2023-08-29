import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../themes";
import { Address, Profile, Settings, CreateAddress, Maps } from '../screens';
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
            title: 'Configuración',
            headerRight: null,
            })}>
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen
                name="CreateAddress"
                component={CreateAddress}
                options={{
                    headerTitle: 'Guardar tu dirección',
                }}
            />
            <Stack.Screen name="Address" component={Address} />
            <Stack.Screen name="Maps" component={Maps} />
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({
    goBack: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: Platform.OS === 'android' ? 15 : 0,
    },
    goBackText: {
        fontSize: 14,
        color: COLORS.text,
    },
})


export default SettingsNavigator;