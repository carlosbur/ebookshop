import { View, Text, ActivityIndicator, } from "react-native";
import { styles } from "./styles";
import { ImageSelector } from "../../components";
import { useSelector } from "react-redux";
import { useGetProfileQuery, useUpdateImageProfileMutation } from "../../store/settings/api";
import { COLORS } from "../../themes";



const Profile = () => {
    const localId = useSelector((state) => state.auth.user.localId)
    const [uploadImageProfile, {data, isLoading, error}] = useUpdateImageProfileMutation(); 
    const { data: userData, isLoading: isLoadingUserData } = useGetProfileQuery({localId});
    const onHandleImage = async ({uri, base64}) => {
        await uploadImageProfile({localId, image: `data:image/jpg;base64,${base64}` })
    };
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <ImageSelector profileImage={userData?.profileImage} onSelect={onHandleImage}/>
                {isLoading &&  (
                    <View style={styles.loading}>
                        <ActivityIndicator size={"large"} color={COLORS.primary}/>
                    </View>
                )
                }
            </View>
        </View>
    )
};

export default Profile;