import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../themes";
import { Settings } from '../screens';

const Stack = createNativeStackNavigator();

const SettingsNavigator = () =>{
    return (
        <Stack.Navigator initialRouteName="Settings" screenOptions= {{ 
            headerShown: false
            }}>
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    )
};

export default SettingsNavigator;