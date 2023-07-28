import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { FlatList } from "react-native-gesture-handler";
import { CartItem } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity, removeItemFromCart } from "../../store/cart/cart.slice";

const Cart = () => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);
    const total = useSelector((state) => state.cart.total);

    const onIncreaseCartItem = (id) => {
        dispatch(increaseItemQuantity({id}));
    };

    const onDecreaseCartItem = (id) => {
        dispatch(decreaseItemQuantity({id}));
    };

    const onRemoveCartItem = (id) => {
        dispatch(removeItemFromCart({id}))
    };

    const onCreateOrder = () => {
        const newOrder = {
            id: Math.floor(Math.random() * 1000),
            items: cart,
            total,
            user : {
                id: 1,
                name: 'Juan Perez',
                address: '123 Street',
                phone: '1223422',
                email: 'juanperez@gmail.com',
            },
            payment: {
                method: 'VISA',
            },
            delivery: {
                method: 'UPS',
                trackingNumber: Math.floor(Math.random() * 1000),
            },
        };
    };

    if(cart.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyCartText}>Your cart is empty</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            <FlatList 
            data={cart}
            renderItem={({ item }) => (
            <CartItem {...item } 
            onIncreaseCartItem={onIncreaseCartItem} 
            onDecreaseCartItem={onDecreaseCartItem}
            onRemoveCartItem={onRemoveCartItem}
            /> )}
            keyExtractor={(item) => item.id.toString()}
            style={styles.listContainer}
            />
        <View style={styles.footerContainer}>
                <TouchableOpacity onPress={onCreateOrder} style={styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>Checkout</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalText}>Total: </Text>
                        <Text style={styles.totalPrice}>USD {total} </Text>
                    </View>
                </TouchableOpacity>
        </View>
        </View>
    );
};

export default Cart;