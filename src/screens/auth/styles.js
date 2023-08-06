import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background
    },

    content: {
        width: '80%',
        maxWidth: 400,
        padding: 15,
        minHeight: 335,
        margin: 15,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
        borderRadius: 5,
    },
    header: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        textAlign: 'center',
        color: COLORS.text,
        paddingVertical: 10,
    },
    label: {
        fontFamily: 'Montserrat-Light',
        fontSize: 14,
        color: COLORS.text,
    },
    input: {
        height: 45,
        borderBottomColor: COLORS.primary,
        borderBottomWidth: 1,
        width: '90%',
        fontFamily: 'Montserrat-Regular',
        marginBottom: 5,
    },
    linkContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    link: {

    },
    linkText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        textAlign: 'center',
        color: COLORS.primary,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,

    },
    button: {
        backgroundColor: COLORS.secondary,
        width: 200,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,


    },
    buttonText: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 14,
        textAlign: 'center',
        color: COLORS.white,

    }

})