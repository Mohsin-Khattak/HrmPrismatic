import Header1x2x from 'components/atoms/headers/header-1x-2x';
import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import SelfPortalCard from 'components/molecules/self-portal-card';
import {mvs} from 'config/metrices';
import {colors} from 'config/colors';
import {navigate} from 'navigation/navigation-ref';
const SelfServicePortal = props => {
  return (
    <View style={styles.container}>
      <Header1x2x back={true} title={'Self-Service Portal'} />
      <View style={{paddingHorizontal: mvs(20)}}>
        <SelfPortalCard
          containerStyle={{backgroundColor: colors.homecard2}}
          title={'1.'}
          title1={'Leave Request'}
          onPress={() => navigate('LeaveRequestList')}
        />
        <SelfPortalCard
          onPress={() => navigate('WorkFromHomeRequestList')}
          containerStyle={{backgroundColor: colors.homecard1}}
          title={'2.'}
          title1={'Work From Home Request'}
        />
        <SelfPortalCard
          onPress={() => navigate('AdvanceRequestList')}
          containerStyle={{backgroundColor: colors.homecard2}}
          title={'3.'}
          title1={'Advances'}
        />
        <SelfPortalCard
          onPress={() => navigate('LoanRequestList')}
          containerStyle={{backgroundColor: colors.homecard1}}
          title={'4.'}
          title1={'Loan'}
        />
        <SelfPortalCard
          containerStyle={{backgroundColor: colors.homecard2}}
          title={'5.'}
          title1={'Reimbursement Request'}
        />
        <SelfPortalCard
          containerStyle={{backgroundColor: colors.homecard1}}
          title={'6.'}
          title1={'Attendance Correction'}
        />

        <SelfPortalCard
          containerStyle={{backgroundColor: colors.homecard2}}
          title={'7.'}
          title1={'Event Calendar'}
        />
        <SelfPortalCard
          containerStyle={{backgroundColor: colors.homecard1}}
          title={'8.'}
          title1={'Complaints'}
        />
        <SelfPortalCard
          containerStyle={{backgroundColor: colors.homecard2}}
          title={'9.'}
          title1={'Resource Request'}
        />
      </View>
    </View>
  );
};
export default SelfServicePortal;
