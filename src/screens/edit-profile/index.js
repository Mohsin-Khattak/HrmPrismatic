import * as IMG from 'assets/images';
import {PrimaryButton} from 'components/atoms/buttons';
import Header1x2x from 'components/atoms/headers/header-1x-2x';
import PrimaryInput from 'components/atoms/inputs';
import {KeyboardAvoidScrollview} from 'components/atoms/keyboard-avoid-scrollview';
import {Loader} from 'components/atoms/loader';
import {Row} from 'components/atoms/row';
import showToast from 'components/atoms/show-toast';
import CountryCodemOdal from 'components/molecules/modals/country-code-modal';
import {colors} from 'config/colors';
import {mvs} from 'config/metrices';
import {Formik} from 'formik';
import {useAppDispatch, useAppSelector} from 'hooks/use-store';
import {goBack} from 'navigation/navigation-ref';
import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  getCountryCode,
  updatePassword,
  updateProfile,
  uploadImage,
} from 'services/api/auth-api-actions';
import {setCountries} from 'store/reducers/user-reducer';
import i18n from 'translation';
import Medium from 'typography/medium-text';
import Regular from 'typography/regular-text';
import {UTILS} from 'utils';
import {
  updatePasswordFormValidation,
  updateProfileFormValidation,
} from 'validations';
import styles from './styles';
import Primaryinput from 'components/atoms/textinputs/textinput';

const EditProfileScreen = props => {
  const [loading, setLoading] = React.useState(false);
  const [profileBtnLoading, setProfileBtnLoading] = React.useState(false);
  const user = useAppSelector(s => s?.user);
  const userInfo = user?.userInfo;
  console.log('user ifno===>', userInfo);
  const {countries} = user;
  const dispatch = useAppDispatch();
  const {t} = i18n;
  const [firstname, setfirstname] = React.useState();
  const [password, setpassword] = React.useState();
  const [role, setRole] = React.useState(false);
  const [company, setCompany] = React.useState(false);

  const onSubmit = async values => {
    dispatch(
      updateProfile(
        {
          ...values,
          id: userInfo?.id,
          fcm_token: userInfo?.fcm_token,
          type: 'User',
          country_code: countries?.find(x => x?.selected)?.code || 'PK',
        },
        setProfileBtnLoading,
      ),
    );
  };
  
  const openGallery = async () => {
    try {
      const res = await UTILS._returnImageGallery(false, true);
      console.log('image path get', res);
      dispatch(
        uploadImage(
          {
            filename: 'crisp.jpg',
            avatar: res,
          },
          // () => {},
          setLoading,
        ),
      );
      showToast({
        type: 'success',
        text1: 'Upload Successful',
        text2: 'Your image has been uploaded!',
      });
    } catch (error) {
      console.log('upload image error', error);
      // Alert.alert('Error', UTILS?.returnError(error));
      showToast({
        type: 'error',
        text1: 'Upload Failed',
        text2: UTILS?.returnError(error),
      });
    }
  };

  const onPress=() => {
    console.log("running");
    openGallery()}
  // const onSubmit = async values => {
  //   dispatch(
  //     updateProfile(
  //       {
  //         ...values,
  //         id: userInfo?.id,
  //         fcm_token: userInfo?.fcm_token,
  //         type: 'User',
  //         country_code: countries?.find(x => x?.selected)?.code || 'PK',
  //       },
  //       setProfileBtnLoading,
  //     ),
  //   );
  // };
  // const onSubmitPassword = async values => {
  //   try {
  //     const valuess = {
  //       ...values,
  //       fcm_token: userInfo?.fcm_token,
  //       type: 'User',
  //     };
  //     setPassLoading(true);
  //     await updatePassword(valuess);
  //     goBack();
  //     showToast({
  //       type: 'success',
  //       text1: 'Update Successful',
  //       text2: 'Your password has been changed!',
  //     });
  //   } catch (error) {
  //     console.log('update password error', error);
  //     showToast({
  //       type: 'error',
  //       text1: 'Password Failed',
  //       text2: UTILS?.returnError(error),
  //     });
  //     Alert.alert('Error', UTILS?.returnError(error));
  //   } finally {
  //     setPassLoading(false);
  //   }
  // };
  // React.useEffect(() => {
  //   getCountryCodeDetails();
  // }, []);
  // const getCountryCodeDetails = async () => {
  //   try {
  //     dispatch(getCountryCode());
  //   } catch (error) {}
  // };
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <Header1x2x back={true} title={'Profile'} />
        <View style={{...styles.img}}>
          <Image
            source={IMG.userimg}
            style={styles.imgUpload}
            resizeMode="cover"
          />
          
          <TouchableOpacity
            style={styles.editbtn}
            onPress={onPress}
          >
            <FontAwesome name="edit" color={colors.primary} size={mvs(20)} />
          </TouchableOpacity>
        </View>
        <Medium color={colors.primary} label={'New User'} style={styles.name}/>
      </View>
      {/* <View style={styles.inputcontainer}>
        <Primaryinput iconName={"edit"} placeholder={"User Name"}/>
      </View> */}
      <KeyboardAvoidScrollview
            contentContainerStyle={styles.keyboardcontentcontainer}>
      <Formik
        onSubmit={onSubmit}
        initialValues={{
          firstname: '',
          phone: '',
          email: '',
          password: '',
          role: '',
          company: '',
        }}
        validationSchema={updateProfileFormValidation}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          setTouched,
          setFieldValue,
          values,
          touched,
          errors,
        }) => (
          <View style={styles.inputcontainer}>
            <PrimaryInput
              editIcons={true}
              placeholder={'User Name'}
              style={styles.textinput}
              placeholderTextColor={colors.secondary}
              onBlur={handleBlur('firstname')}
              error={touched.firstname && errors.firstname}
              onChangeText={handleChange('firstname')}
              value={values.firstname}
            />
            <PrimaryInput
              isEmail={true}
              placeholder={'Email'}
              style={styles.textinput}
              placeholderTextColor={colors.secondary}
              onBlur={handleBlur('email')}
              error={touched.email && errors.email}
              onChangeText={handleChange('email')}
              value={values.email}
            />
            <PrimaryInput
              isPassword={true}
              placeholder={'Password'}
              style={styles.textinput}
              placeholderTextColor={colors.secondary}
              onBlur={handleBlur('password')}
              error={touched.password && errors.password}
              onChangeText={handleChange('password')}
              value={values.password}
            />
            <PrimaryInput
              placeholder={'Role'}
              style={styles.textinput}
              placeholderTextColor={colors.secondary}
            />
            <PrimaryInput
              placeholder={'Company'}
              style={styles.textinput}
              placeholderTextColor={colors.secondary}
            />
            <View style={{marginTop: mvs(50), gap: mvs(18)}}>
              <PrimaryButton
                title="Save Task"
                containerStyle={styles.containerStyle}
                onPress={handleSubmit}
              />
              <PrimaryButton
                title="Cancel"
                containerStyle={styles.containerStyle2}
                textStyle={styles.textStyle}
              />
            </View>
          </View>
        )}
      </Formik>
      </KeyboardAvoidScrollview>

    </View>
  );
};
export default EditProfileScreen;
