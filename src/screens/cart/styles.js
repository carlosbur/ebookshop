import { StyleSheet } from "react-native";
import { COLORS } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyCartText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
      },
    listContainer:{
        flex: 1,
        backgroundColor: COLORS.white,
    },
    footerContainer: {
        backgroundColor: COLORS.background,
        borderTopColor: COLORS.secondary,
        borderTopWidth: 4,
        padding: 10,
    },

checkoutButton: {
    backgroundColor: COLORS.secondary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
},

checkoutButtonText: {
    color: COLORS.white,
    fontFamily: 'Montserrat-Bold',
},

totalContainer: {
    flexDirection: 'row',
    gap: 5,
},

totalText: {
    color: COLORS.white,
    fontFamily: 'Montserrat-Bold',
},

totalPrice: {
    color: COLORS.white,
    fontFamily: 'Montserrat-Bold',
},
});