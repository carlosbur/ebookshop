import { View, Text, } from "react-native";
import { styles } from "./styles";
import { ImageSelector } from "../../components";
import { useState } from "react";


const Profile = () => {
    const [imageUri, setImageUri] = useState('');
    const onHandleImage = () => {};
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <ImageSelector profileImage={''} onSelect={onHandleImage}/>
            </View>
        </View>
    )
};

export default Profile;