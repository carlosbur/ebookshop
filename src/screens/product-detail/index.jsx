import { View, Text, Image } from "react-native";
import PRODUCTS from '../../constants/data/products.json'
import { styles } from "./styles";

function ProductDetail({ navigation, route }) {
    const { color, productId } = route.params;

    const product = PRODUCTS.find((product) => product.id == productId);

    return(
        <View style={styles.container}>
            <View style={[styles.containerImage, {backgroundColor: color}]}>
                <Image source={{uri: product.image}} style={styles.image} resizeMode="contain" />
            </View>
            <View style={styles.content}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <Text style={styles.price}>ARS {product.price}</Text>
                <Text style={styles.tagTitle}>Tags</Text>
                <View style={styles.containerTags}>
                    {product.tags.map((tag) => ( 
                        <View key={tag} style={[styles.containerTag, {backgroundColor:color}]}>
                            <Text style={styles.tag}>{tag}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>       
    )
}

export default ProductDetail