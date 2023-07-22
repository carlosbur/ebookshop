import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerTags:{
        flexWrap:'wrap',
        flexDirection: 'row',
        gap: 5,  
    },
    image: {
        width: '100%',
        height: 200
    },
    containerImage: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    content: {
        flex: 1,
        padding: 20,
        gap: 10,
    },  
    name: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 18,
    },
    price: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
    },
    description: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
    },
    containerTag:{
        padding: 10,
        borderRadius: 10,
    },
    tagTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
    },
    tag: {
        color: COLORS.white
    },
    containerButton: {
        marginVertical: 10,

    },
    addToCartButton: {
        width: '100%',
        backgroundColor: COLORS.primary,
        padding: 15,
        borderRadius: 5, 
        justifyContent: 'center',
        alignItems: 'center',

    },
    addToCartText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        color: COLORS.white
    },

});