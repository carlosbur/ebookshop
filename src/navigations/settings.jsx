import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../themes";
import { Address, Profile, Settings } from '../screens';

const Stack = createNativeStackNavigator();

const SettingsNavigator = () =>{
    return (
        <Stack.Navigator initialRouteName="Settings" screenOptions= {{ 
            headerShown: false
            }}>
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Address" component={Address} />
        </Stack.Navigator>
    )
};

export default SettingsNavigator;