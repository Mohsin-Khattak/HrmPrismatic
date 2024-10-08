import {IconButton} from 'components/atoms/buttons';
import CustomMap from 'components/atoms/custom-map';
import {Row} from 'components/atoms/row';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {t} from 'i18next';
import React from 'react';
import {
  Alert,
  ImageBackground,
  Linking,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import Regular from 'typography/regular-text';
import styles from './styles';
// import Stars from 'components/atoms/stars';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {Loader} from 'components/atoms/loader';
import MapDirections from 'components/atoms/map-directions';
import StarRating from 'components/atoms/starRating';
import {Marker} from 'react-native-maps';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getTracking} from 'services/api/auth-api-actions';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import Bold from 'typography/bold-text';
import {UTILS} from 'utils';
const Tracking = props => {
  const {orderId} = props?.route?.params;
  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({});
  const fetchTracking = async () => {
    try {
      // setLoading(true);
      const res = await getTracking(orderId);
      setData(res);
    } catch (error) {
      console.log('Tracking get error', error);
      Alert.alert('Error', UTILS?.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    const interval = setInterval(() => {
      fetchTracking();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const origin = {
    latitude: data?.driver_current_lat * 1 || 31.560249,
    longitude: data?.driver_current_long * 1 || 74.362284,
  };
  const destination = {
    latitude: data?.order_delivery_lat * 1 || 31.556014,
    longitude: data?.order_delivery_long * 1 || 74.354795,
  };
  const openGoogleMapsDirections = () => {
    const url = `https://www.google.com/maps/dir/?api=1&origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Header1x2x back title={t('Tracking')} />

      {loading ? (
        <Loader />
      ) : (
        <ScrollView
          contentContainerStyle={{paddingHorizontal: mvs(20), flexGrow: 1}}>
          <View style={styles.mapContainer}>
            <CustomMap
              initialRegion={{
                latitude: origin?.latitude,
                longitude: origin?.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}>
              <Marker coordinate={origin}>
                <FontAwesome size={25} color={colors.primary} name="truck" />
              </Marker>
              <Marker coordinate={destination} />
              <MapDirections
                origin={origin}
                destination={destination}
                strokeWidth={3}
                strokeColor="blue"
              />
            </CustomMap>
            <TouchableOpacity
              onPress={openGoogleMapsDirections}
              style={{
                position: 'absolute',
                bottom: mvs(20),
                right: mvs(20),
              }}>
              <Row
                style={{
                  alignItems: 'center',
                  gap: mvs(5),
                  backgroundColor: colors.white,
                  opacity: 0.5,
                  padding: mvs(5),
                }}>
                <Bold color={colors.red} label={'Goto Map'} />
                <FontAwesome5Icon
                  name="directions"
                  size={mvs(30)}
                  color={colors.bluecolor}
                />
              </Row>
            </TouchableOpacity>
          </View>
          <View style={styles.profileContainer}>
            <Row style={{alignItems: 'center'}}>
              <Row>
                <ImageBackground
                  source={{
                    uri:
                      data?.driver_image ||
                      'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg',
                  }}
                  borderRadius={mvs(100)}
                  style={styles.imageBackGround}></ImageBackground>
                <View style={{marginLeft: mvs(10), flex: 1}}>
                  <Bold
                    color={colors.darkBlack}
                    fontSize={mvs(16)}
                    label={data?.driver_name || 'N/A'}
                  />
                  {/* <Regular
                  color={colors.darkBlack}
                  fontSize={mvs(10)}
                  label={'In transit'}
                /> */}
                  {/* <Stars size={10} /> */}
                  <StarRating disabled={true} initialRating={data?.rating} />
                </View>
              </Row>
            </Row>
            <Row style={{gap: mvs(10)}}>
              <View style={{flex: 1}}>
                <Regular
                  label={t('Vehicle No')}
                  fontSize={mvs(12)}
                  color={colors.black}
                />
                <Regular
                  label={data?.vehicle_number || 'N/A'}
                  fontSize={mvs(12)}
                  color={colors.black}
                />
              </View>

              <View style={{flex: 1}}>
                <Regular
                  label={t('Vehicle')}
                  fontSize={mvs(12)}
                  color={colors.black}
                />
                <Regular
                  label={data?.vehicle_name || 'N/A'}
                  fontSize={mvs(12)}
                  color={colors.black}
                />
              </View>
              <IconButton
                Icon={
                  <Ionicons
                    name={'call-outline'}
                    size={13}
                    color={colors.white}
                    style={{marginRight: mvs(5)}}
                  />
                }
                onPress={() => UTILS.dialPhone(data?.driver_phone)}
                textStyle={{fontSize: mvs(14)}}
                containerStyle={styles.chatBtn}
                title={t('call')}
              />
            </Row>
          </View>
        </ScrollView>
      )}
    </View>
  );
};
export default Tracking;
