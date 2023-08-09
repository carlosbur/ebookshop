import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { View, Button, Text, Alert } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { COLORS } from '../../themes';
import MapPreview from '../map-preview';

const LocationSelector = ({onLocation}) => {
    const [ pickedLocation, setPickedLocation ] = useState(null);
    
    const verifyPermissions = async () => {
        const {status} = await requestForegroundPermissionsAsync();
            if(status !== 'granted') {
                Alert.alert(
                    'Insufficient permissions!',
                    'You need to grant location permissions tu use this app',
                    [{text: 'Okay'}]
                );
                return false;
            }
        return true;
    };
    const onHandlerGetLocation = async () => {
        const isLocationPermission = await verifyPermissions();
            if(!isLocationPermission) return;
            const location = await getCurrentPositionAsync({
                accuracy: 6,
                timeInterval: 5000,

            });

        const { latitude, longitude } = location.coords;

        setPickedLocation({lat: latitude, lng: longitude})
    };
    return (
        <View style={styles.container}>
            <MapPreview location={pickedLocation} style={styles.preview}>
                <Text style={styles.text}>No location chosen yet!!!</Text>
            </MapPreview>
            <Button title='Get User Location' onPress={onHandlerGetLocation} color={COLORS.secondary}/>
        </View>
    )
}

export default LocationSelector;