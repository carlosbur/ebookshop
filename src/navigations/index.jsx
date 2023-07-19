import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./shop";
import TabNavigator from "./tabs";

function RootNavigator(){
    return(
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    )    
}

export default RootNavigator;