import { View, Text, } from "react-native";
import { styles } from "./styles";
import { ImageSelector } from "../../components";


const Profile = () => {
    const onHandleImage = () => {};
    return(
        <View style={styles.container}>
            <View style={styles.header}>
            <ImageSelector image={''} onSelect={onHandleImage}/>
            </View>
        </View>
    )
};

export default Profile;