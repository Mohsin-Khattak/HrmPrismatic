import * as IMG from 'assets/images';
import AppHeader from 'components/atoms/headers/index';
import ServiceCard from 'components/molecules/service-card';
import {colors} from 'config/colors';
import {useAppSelector} from 'hooks/use-store';
import React, {useState, useEffect} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {getDashbaord} from 'services/api/auth-api-actions';
import {UTILS} from 'utils';
import styles from './styles';
import Medium from 'typography/medium-text';
import {mvs} from 'config/metrices';
import {Row} from 'components/atoms/row';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Regular from 'typography/regular-text';
import Bold from 'typography/bold-text';
import moment from 'moment';
import {PrimaryButton} from 'components/atoms/buttons';
import Bargraph from 'components/atoms/graph/bargraph';
import {HomeList} from 'config/constants';
const HomeTab = props => {
  const user = useAppSelector(s => s?.user);
  const [select, setSelect] = useState('checkin');
  const [currentTime, setCurrentTime] = useState(new Date());

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  const datshow = [
    {title: '2323'},
    {title: 'sdgds'},
    // {title: '2323'},
    // {title: 'sdgds'},
    // {title: '2323'},
    // {title: 'sdgds'},
  ];
  const [order, setOrder] = React.useState([]);
  const getList = async () => {
    try {
      setLoading(true);
      const res = await getDashbaord();
      setDashboardDetails(res?.data || []);
    } catch (error) {
      console.log('dashboard and homebanners get error', error);
      Alert.alert('Error', UTILS?.returnError(error));
    } finally {
      setLoading(false);
    }
  };
  // React.useEffect(() => {
  //   getList();
  // }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once
  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMG.homebackgroundimg}
        resizeMode="stretch"
        style={styles.backgroundimg}>
        <AppHeader
          title={'Prismatic HRMS'}
          style={{backgroundColor: colors.primary}}
        />
        <View style={{paddingHorizontal: mvs(20)}}>
          <View style={styles.infoContainer}>
            <Row>
              <View style={{flex: 1}}>
                <Bold
                  label={'Welcome Back'}
                  color={colors.primary}
                  fontSize={mvs(18)}
                />
                <Row style={{justifyContent: 'flex-start', marginTop: mvs(10)}}>
                  <View style={{width: '35%'}}>
                    <Regular color={colors.placeholder} label={'Name:'} />
                  </View>
                  <View style={{flex: 1}}>
                    <Bold color={colors.primary} label={'Muhammad Waqas'} />
                  </View>
                </Row>
                <Row style={{justifyContent: 'flex-start', marginTop: mvs(10)}}>
                  <View style={{width: '35%'}}>
                    <Regular color={colors.placeholder} label={'Position:'} />
                  </View>
                  <View style={{flex: 1}}>
                    <Bold
                      color={colors.primary}
                      label={'Graphic & UIUX Designer'}
                    />
                  </View>
                </Row>
                <Row style={{justifyContent: 'flex-start', marginTop: mvs(10)}}>
                  <View style={{width: '35%'}}>
                    <Regular color={colors.placeholder} label={'Department:'} />
                  </View>
                  <Bold color={colors.primary} label={'Marketing'} />
                </Row>
                <Row style={styles.timeContainer}>
                  <Fontisto name="clock" size={25} color={colors.black} />
                  <Medium
                    color={colors.primary}
                    fontSize={mvs(18)}
                    label={currentTime.toLocaleTimeString()}
                  />
                </Row>
              </View>
              <Image
                style={{
                  width: mvs(70),
                  height: mvs(70),
                  borderRadius: mvs(35),
                }}
                source={IMG.userimg}
              />
            </Row>
            <Regular
              label={'You’re not check in yet today'}
              color={colors.placeholder}
              style={{marginTop: mvs(10)}}
            />
            <Row style={{marginTop: mvs(10)}}>
              <PrimaryButton
                onPress={() => setSelect('checkin')}
                textStyle={{color: colors.white}}
                containerStyle={{
                  ...styles.checkBtn,
                  backgroundColor:
                    select === 'checkin' ? colors.primary : colors.blur,
                }}
                title="Check In"
              />
              <PrimaryButton
                onPress={() => setSelect('checkout')}
                containerStyle={{
                  ...styles.checkBtn,
                  backgroundColor:
                    select === 'checkout' ? colors.primary : colors.blur,
                }}
                title="Check Out"
                textStyle={{color: colors.white}}
              />
            </Row>
          </View>

          <View style={{marginTop: mvs(20)}}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{flexGrow: 1}}>
              <Medium
                color={colors.primary}
                fontSize={mvs(14)}
                label={'Attendance Month (October,2024)'}
              />
              <Bargraph />
              <View
                style={{
                  width:'90%',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  // justifyContent: 'space-between',
                  marginTop: mvs(20),
                  // backgroundColor:'red',
                }}>
                {HomeList.map((item, index) => {
                  return (
                    <ServiceCard
                      backgroundColor={
                        index % 4 === 0 || index % 4 === 3
                          ? colors.homecard2
                          : colors.homecard1
                      }
                      item={item}
                    />
                  );
                })}
              </View>
              <View style={{height: mvs(100)}} />
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default HomeTab;
