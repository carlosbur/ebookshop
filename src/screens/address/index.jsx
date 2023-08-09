import { View, Text, } from "react-native";
import { styles } from "./styles";
import { LocationSelector } from "../../components";
import { useState } from "react";


const Address = () => {
    const [location, setLocation] = useState(null);
    const onLocation = () => {
        setLocation(location);
    };
    return(
        <View style={styles.container}>
            <LocationSelector onLocation={onLocation}/>
        </View>
    )
};

export default Address;