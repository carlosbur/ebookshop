import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import { styles } from './styles';
import { Input } from '../../components';
import { COLORS } from '../../themes';
import { useGetProductsByCategoryQuery } from '../../store/products/api';

function Product({ navigation, route }) {
    const { categoryId, color } = route.params;
    const {data, error, isLoading } = useGetProductsByCategoryQuery(categoryId)
    const [search, setSearch] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [borderColor, setBorderColor] = useState(COLORS.primary);
    const onHandleBlur = () => {};
    const onHandleChangeText = (text) => {
        setSearch(text);
        filterBySearch(text);
    };
    const onHandleFocus = () => {};

    const filteredProductsByCategory = data?.filter(
        (product) => product.categoryId === categoryId
    );

    const filterBySearch = (query) => {
        let updatedProductList = [...filteredProductsByCategory];

        updatedProductList = updatedProductList.filter((product) => {
        return product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });

        setFilteredProducts(updatedProductList);
    };

    const clearSearch = () => {
        setSearch('');
        setFilteredProducts([]);
    };

    const onSelectProduct = ({ productId, name }) => {
        navigation.navigate('ProductDetail', { productId, color, name })
    }


    if (isLoading) 
    return (
        <View style={styles.containerLoader}>
            <ActivityIndicator size={'large'} color={COLORS.primary} />
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Input
                onHandleBlur={onHandleBlur}
                onHandleChangeText={onHandleChangeText}
                onHandleFocus={onHandleFocus}
                value={search}
                placeholder="Buscar"
                borderColor={borderColor}
                />
                {search.length > 0 && (
                <Ionicons
                    style={styles.clearIcon}
                    onPress={clearSearch}
                    name="close-circle"
                    size={20}
                    color={COLORS.black}
                />
                )}
        </View>
        <FlatList
            style={styles.products}
            data={search.length > 0 ? filteredProducts : filteredProductsByCategory}
            renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onSelectProduct({ productId: item.id, name: item.name, auhtor: item.author })} style={styles.productContainer}>
                <ImageBackground
                source={{ uri: item.image }}
                style={[styles.productImage, { backgroundColor: color }]}
                resizeMethod="resize"
                resizeMode="contain"
                />
                <View style={styles.productDetail}>
                <Text style={styles.author} numberOfLines={2}>
                    {item.author}
                </Text>    
                <Text style={styles.productName} numberOfLines={2} ellipsizeMode="tail">
                    {item.name}
                </Text>
                <Text style={styles.productPrice}>{`${item.currency.code} ${item.price}`}</Text>
                </View>
            </TouchableOpacity>
            )}
            contentContainerStyle={styles.productsContent}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            showsVerticalScrollIndicator={false}
        />
        {filteredProducts.length === 0 && search.length > 0 && (
            <View style={styles.notFound}>
            <Text style={styles.notFoundText}>No se encontró ningún producto</Text>
            </View>
        )}
        </View>
    );
}

export default Product;