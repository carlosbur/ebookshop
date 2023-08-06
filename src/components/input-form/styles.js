import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        height: 45,
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: 'Montserrat-Regular',
        marginBottom: 5,
    },
    errorContainer: {
        flex: 1,
        marginVertical: 5,
    },
    errorMessage: {
        fontSize: 12,
        fontFamily: "Montserrat-Regular",
        paddingVertical: 5,
        color: COLORS.error
    }
})