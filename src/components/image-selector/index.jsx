import { TouchableOpacity, View, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { COLORS } from "../../themes";
import { requestCameraPermissionsAsync, launchCameraAsync, launchImageLibraryAsync, requestMediaLibraryPermissionsAsync} from 'expo-image-picker';

const ImageSelector = ({image, onSelect}) => {
    const verifyPermission = async () => {
        const {status} = await requestCameraPermissionsAsync();
        if (status !== 'granted'){
            Alert.alert(
                "Permission denied",
                "You need to grant camera permissions to use this app.", [
                {text: "Okay"},
                ]);
            return false;
        }
        return true;
    };

    const onHandleTakePhoto = async () => {
        const isCameraPermission = await verifyPermission();
        if(!isCameraPermission) return;
        const result = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
            base64: true,   
        });
        console.warn({result})
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.content} onPress={onHandleTakePhoto}>
                {image ? (
                    <Image source={{ uri: image}} style={styles.image} />
                ) : (
                    <Ionicons name="ios-camera" size={24} color={COLORS.primary} />
                )}
            </TouchableOpacity>

        </View>
    )
}
export default ImageSelector;