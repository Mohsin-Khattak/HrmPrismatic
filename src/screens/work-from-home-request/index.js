import messaging from '@react-native-firebase/messaging';
import {PrimaryButton} from 'components/atoms/buttons';
import PrimaryInput, {TextAreaInput} from 'components/atoms/inputs';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview/index';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {Formik} from 'formik';
import {useAppDispatch} from 'hooks/use-store';
import {navigate} from 'navigation/navigation-ref';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {requestNotifications} from 'react-native-permissions';
import {onLogin} from 'services/api/auth-api-actions';
import i18n from 'translation';
import Bold from 'typography/bold-text';
import Medium from 'typography/medium-text';
import {signinFormValidation} from 'validations';
import styles from './styles';
import {checkimg, forgotbackgroundimg, loginbackgroundimg} from 'assets/images';
import Regular from 'typography/regular-text';
import {Row} from 'components/atoms/row';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import AntDesign from 'react-native-vector-icons/AntDesign';
const WorkFromHomeRequest = props => {
  const {t} = i18n;
  const [rember, setRemember] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const initialValues = {
    name: '',
    date_from: '',
    date_to: '',
    nodays: '',
    performing_person: '',
    document: '',
    reason: '',
    password: '',
  };

  const handleFormSubmit = async values => {
    try {
      navigate('Drawer');
      // setLoading(true)
    } catch (error) {
      console.log('error=>', error);
    } finally {
      // setLoading(false);
    }
  };
  return (
    <View style={styles.container}>
      <Header1x2x title={'Work From Home Request'} />
      <KeyboardAvoidScrollview
        contentContainerStyle={styles.keyboradscrollcontent}>
        <Formik
          initialValues={initialValues}
          validationSchema={signinFormValidation}
          onSubmit={handleFormSubmit}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            setFieldValue,
            touched,
            values,
            errors,
          }) => (
            <>
              {console.log('errror2', errors)}

              <PrimaryInput
                containerStyle={{marginTop: mvs(25)}}
                error={touched?.name ? t(errors.name) : ''}
                placeholder={'Employe Name'}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              <PrimaryInput
                error={touched?.date_from ? t(errors.date_from) : ''}
                placeholder={'Date From'}
                onChangeText={handleChange('date_from')}
                onBlur={handleBlur('date_from')}
                value={values.date_from}
                isCalendar
                editable={false}
              />
              <PrimaryInput
                error={touched?.date_to ? t(errors.date_to) : ''}
                placeholder={'Date To'}
                onChangeText={handleChange('date_to')}
                onBlur={handleBlur('date_to')}
                value={values.date_to}
                isCalendar
                editable={false}
              />
              <PrimaryInput
                error={touched?.nodays ? t(errors.nodays) : ''}
                placeholder={'No of Days'}
                onChangeText={handleChange('nodays')}
                onBlur={handleBlur('nodays')}
                value={values.nodays}
                editable={false}
              />

              <TextAreaInput
                error={
                  touched?.performing_person ? t(errors.performing_person) : ''
                }
                placeholder={'Reason'}
                onChangeText={handleChange('performing_person')}
                onBlur={handleBlur('performing_person')}
                value={values.performing_person}
              />

              <PrimaryButton
                containerStyle={{
                  borderRadius: mvs(10),
                  marginTop: mvs(60),
                }}
                loading={loading}
                onPress={handleSubmit}
                title={'Rise Request'}
              />
            </>
          )}
        </Formik>
      </KeyboardAvoidScrollview>
    </View>
  );
};
export default WorkFromHomeRequest;
