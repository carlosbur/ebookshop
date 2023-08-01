import { StyleSheet } from "react-native";
import { COLORS } from '../../../themes'

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    orderItemContainer:{
        flex: 1,
        flexDirection: 'row',
        height: 145,
        backgroundColor: COLORS.white,
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        padding: 15,
        marginHorizontal: 15,
        marginTop: 15,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 5,
        },
orderHeaderContainer:{
    flex: 1,
},
orderItemDate:{
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: COLORS.text
},
orderBody:{
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
},
orderItemTotal:{
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: COLORS.text
},
orderItemId:{
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: COLORS.text
},
})