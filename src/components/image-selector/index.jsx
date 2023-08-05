import { TouchableOpacity, View, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { COLORS } from "../../themes";
import { } from 'expo-image-picker'

const ImageSelector = ({image, onSelect}) => {
    const verifyPermission = async () => {};
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.content} onPress={onSelect}>
                {image ? (
                    <Image source={{ uri: image}} style={styles.image} />
                ) : (
                    <Ionicons name="ios-camera" size={24} color={COLORS.secondary} />
                )}
            </TouchableOpacity>

        </View>
    )
}
export default ImageSelector;