import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container:{
        width: 350,
        marginTop: 15,
        borderRadius: 10,
        backgroundColor: COLORS.background,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    content: {
        height: 70,
        flexDirection: 'row',
        alignItems: "center",   
        gap: 10,
        paddingHorizontal: 20,
        backgroundColor: COLORS.background,
    
    },
    title: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        color: COLORS.text

    }
})