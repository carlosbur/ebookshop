import { StyleSheet } from "react-native";
import { COLORS } from "../../../themes";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        height: 130,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        padding: 10,
        marginHorizontal: 15,
        marginTop: 15,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 10,
        gap: 15,
        },

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.primary,
        maxWidth: 120,
        borderRadius: 10,


    },

    image:{
        width: 100,
        height: 100,

    },
    detailContainer:{
        justifyContent: 'space-between',
        maxWidth: 190,
    },
    name:{},
    price:{},
    qty:{},
    stock:{},
    increaseButton:{},
    decreaseButton:{},
    decreaseButtonText:{},
    deleteContainer:{

    },
})