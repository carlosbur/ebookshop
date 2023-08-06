import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        minHeight: 40,
    },
    label:{
        fontFamily: "Montserrat-Medium",
        fontSize: 14,
        paddingVertical: 5,
        color: COLORS.text
    },
    subLabel: {
        fontFamily: "Montserrat-Regular",
        fontSize: 12,
        paddingVertical: 5,
        color: COLORS.text
    },
})