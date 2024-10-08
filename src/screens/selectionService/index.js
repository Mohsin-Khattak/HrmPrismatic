import * as IMG from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {ImageBackground, View} from 'react-native';
import i18n from 'translation';
import styles from './styles';

const ServiceSelection = props => {
  const {service_id} = props?.route?.params;
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  const language = user?.language;
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const [loading, setLoading] = React.useState(false);

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={IMG.signupheader}
        style={styles.logobackground}>
        <Header1x2x
          style={{backgroundColor: colors.transparent}}
          title={t('service_selection')}
        />
      </ImageBackground>

      <View style={styles.contentContainerStyle}>
        <View style={styles.contentContainerStyleNew}>
          <View style={{}}>
            <PrimaryButton
              onPress={() => {
                navigate('WhereToMoveScreen', {
                  service_id: service_id,
                  type: 'hour_price',
                });
              }}
              title="Continue with Hourly Price"
            />
          </View>
          <View style={{marginTop: mvs(20)}}>
            <PrimaryButton
              onPress={() => {
                navigate('WhereToMoveScreen', {
                  service_id: service_id,
                  type: 'fixed_price',
                });
              }}
              title="Continue with Fixed Price with Items Wise"
            />
          </View>
        </View>
      </View>
    </View>
  );
};
export default ServiceSelection;
