import { NavigationContainer } from "@react-navigation/native";
import ShopNavigator from "./shop";
import TabNavigator from "./tabs";
import { useState } from "react";
import AuthNavigator from "./auth";
import { useSelector } from "react-redux";


function RootNavigator(){
    const state  = useSelector((state) => state)

    return(
        <NavigationContainer>
             <AuthNavigator/> 
        </NavigationContainer>
    )    
}

export default RootNavigator;