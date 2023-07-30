import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useGetOrdersQuery } from "../../store/orders/api";
import { FlatList } from "react-native-gesture-handler";

const Orders = () => {
    const {data, error, isLoading} = useGetOrdersQuery();
    
    const renderItem = ({item}) => (
        <TouchableOpacity onPress={() => {}} style={styles.orderItem}>
            <Text style={styles.orderItemId}>item.id</Text>
            <Text style={styles.orderItemId}>item.total</Text>

        </TouchableOpacity> 
    )
    return (
        <View style={styles.container}>
            <FlatList 
                data={data}
                renderItem={renderItem}
            
            
            />

        </View>
    )
};

export default Orders;