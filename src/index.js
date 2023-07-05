import { FlatList, SafeAreaView, StyleSheet, View, Text } from "react-native";
import { CategoryItem, Header } from "./components";
import CATEGORIES from "./constants/data/categories.json"


export default function App() {
    const onSelectCategory = (categoryId) =>{
        console.warn({categoryId})
    }
    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.container}>
            <Header title='Categories'/>
            <FlatList
            data={CATEGORIES}
            renderItem={({item}) => <CategoryItem {...item} onSelectCategory={onSelectCategory} />}
            keyExtractor={(item) => item.id}
            />
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
});
