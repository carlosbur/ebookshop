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
    }


});