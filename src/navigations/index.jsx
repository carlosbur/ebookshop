import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./shop";
import TabNavigator from "./tabs";
import { useState } from "react";
import AuthNavigator from "./auth";

function RootNavigator(){
    const [userId, setUserId] = useState(null);
    return(
        <NavigationContainer>
            { userId ? <TabNavigator /> : <AuthNavigator/> }
        </NavigationContainer>
    )    
}

export default RootNavigator;