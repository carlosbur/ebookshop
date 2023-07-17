import { SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';
import {useFonts} from 'expo-font';

import { COLORS } from './themes';
import RootNavigator from './navigations';

// const categoryDefault = {
//     categoryId: null,
//     color: COLORS.primary,
//     };
export default function App() {
    const [loaded, error] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),

    })
    // const [isCategorySelected, setIsCategorySelected] = useState(false);
    // const [selectedCategory, setSelectedCategory] = useState(categoryDefault);

    // const headerTitle = isCategorySelected ? 'Products' : 'Categories';

    // const onHandleSelectCategory = ({ categoryId, color }) => {
    //     setSelectedCategory({ categoryId, color });
    //     setIsCategorySelected(!isCategorySelected);
    // };
    // const onHandleNavigate = () => {
    //     setIsCategorySelected(!isCategorySelected);
    //     setSelectedCategory(categoryDefault);
    // };

    if (!loaded) {
        return (
        <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size={'large'}/>
        </View>
        )    }

    return (
        <SafeAreaView style={styles.container}>
            <RootNavigator/>
        </SafeAreaView>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loaderContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});