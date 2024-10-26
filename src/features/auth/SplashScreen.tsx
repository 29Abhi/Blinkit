import {View, StyleSheet, Image, Alert} from 'react-native';
import React, {FC, useEffect} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {screenHeight, screenWidth} from '@utils/Scalling';
import Logo from '@assets/images/splash_logo.jpeg';
import GeoLocation from '@react-native-community/geolocation';
import {resetAndNavigate} from '@utils/NavigationUtils';
// import { resetAndNavigate } from '@utils/NavigationUtils';
// import {useAppSelector} from '@redux/hooks';
// import {noteSelector} from '@redux/slice';

GeoLocation.setRNConfiguration({
  skipPermissionRequests: false,
  authorizationLevel: 'always',
  enableBackgroundLocationUpdates: true,
  locationProvider: 'auto',
});

// const notes = useAppSelector(noteSelector);
// console.log(notes);

const SplashScreen: FC = () => {
  const tokenCheck = async () => {
    const accessToken = false;
    const refereshToken = false;

    if (accessToken) {
    }
    resetAndNavigate('CustomerLogin');
    return false;
  };

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        GeoLocation.requestAuthorization();
        tokenCheck();
      } catch (error) {
        Alert.alert(
          'sorry we need location service to give you better shopping experionace',
          error
        );
      }
    };
    const timeoutId = setTimeout(fetchUserLocation, 1000);
    return () => clearTimeout(timeoutId);
    
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logoImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7CA49',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    height: screenHeight * 0.7,
    width: screenWidth * 0.7,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
