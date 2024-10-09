import {NativeStackScreenProps} from '@react-navigation/native-stack';
import * as IMG from 'assets/images';
import {mvs} from 'config/metrices';
import {useAppDispatch} from 'hooks/use-store';
import React from 'react';
import {Image, ImageBackground, View} from 'react-native';
import i18n from 'translation';
import {UTILS} from 'utils';
import {STORAGEKEYS} from '../../config/constants';
import {
  setLanguage,
  setLocation,
  setUserInfo,
} from '../../store/reducers/user-reducer';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';

type props = NativeStackScreenProps<RootStackParamList, 'Splash'>;

// const Splash = (props: props) => {
//   const { navigation } = props;
//   const dispatch = useAppDispatch();

//   React.useEffect(() => { }, []);
//   React.useEffect(() => {
//     (async () => {
//       try {
//         let screen: any = 'Onboarding';
//         UTILS.get_current_location(
//           position => {
//             dispatch(
//               setLocation({
//                 latitude: position?.coords?.latitude,
//                 longitude: position?.coords?.longitude,
//               }),
//             );
//           },
//           error => { },
//         );
//         UTILS.getItem(STORAGEKEYS.lang).then((lang: any) => {
//           i18n.changeLanguage(lang);
//           dispatch(setLanguage(lang ?? 'en'));
//         });

// UTILS.getItem(STORAGEKEYS.user).then((data: any) => {
//   if (data) {
//     const user = JSON.parse(data);
//     screen = 'Onboarding';
//     dispatch(setUserInfo(user));
//   } else {
//     screen = 'Drawer'
//   }

//           setTimeout(() => {
//             navigation?.replace(screen);
//           }, 2000);
//         });
//       } catch (error) { }
//     })();
//   }, []);
const Splash = (props: props) => {
  const {navigation} = props;
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    (async () => {
      try {
        let screen: 'Login' = 'Drawer';
        UTILS.get_current_location(
          position => {
            dispatch(
              setLocation({
                latitude: position?.coords?.latitude,
                longitude: position?.coords?.longitude,
              }),
            );
          },
          error => {},
        );
        UTILS.getItem(STORAGEKEYS.lang).then((lang: any) => {
          i18n.changeLanguage(lang);
          dispatch(setLanguage(lang ?? 'en'));
        });

        UTILS.getItem(STORAGEKEYS.user).then((data: any) => {
          if (data) {
            const user = JSON.parse(data);
            // screen = 'Splash';
            dispatch(setUserInfo(user));
          } else {
            screen = 'Login';
          }
          setTimeout(() => {
            navigation?.replace(screen);
          }, 2000);
        });
      } catch (error) {}
    })();
  }, []);

  return (
    <View style={{...styles.container}}>
      <ImageBackground
        source={IMG.splashbackgroundimg}
        resizeMode="cover"
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '87%',
          }}>
          <Image
            source={IMG.appiconimg}
            resizeMode={'contain'}
            style={{width: mvs(215), height: mvs(168)}}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
export default Splash;
