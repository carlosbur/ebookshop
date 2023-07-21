import { SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';
import {useFonts} from 'expo-font';
import { Provider } from 'react-redux';
import { COLORS } from './themes';
import RootNavigator from './navigations';
import { store } from './store';

export default function App() {
    const [loaded, error] = useFonts({
        'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
        'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
        'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),

    })
    
    if (!loaded) {
        return (
        <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size={'large'}/>
        </View>
        )    }

    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <RootNavigator/>
            </SafeAreaView>
        </Provider>
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