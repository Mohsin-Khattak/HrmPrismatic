import moment from 'moment';
import React from 'react';
import { KeyboardTypeOptions, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
type IProps = {
  label?: string | number;
  value?: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  containerStyle?: object;
  secureTextEntry?: boolean;
  editable?: boolean;
  disabled?: boolean;
  maxLength?: number | undefined;
  keyboardType?: KeyboardTypeOptions | undefined;
  style?: object;
  setValue?: (arg: any) => void;
  isRequire?: boolean;
  children?: JSX.Element | JSX.Element[];
  ref?: any;
  mode?: 'date' | 'time';
  onPress?: () => void;
  onBlur?: any;
  isVisible?:boolean,
  minimumDate? : Date ;
  onCancel: () => void; 
  onConfirm?:(date: Date) => void |undefined;
};
// export const DatePicker = (props: IProps) => {
//   const {
//     style,
//     onChangeText = (arg: string) => {},
//     value,
//     mode = 'date',
//     children,
//     onPress = () => {},
//   } = props;
//   const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);

//   const hideDatePicker = () => {
//     setDatePickerVisibility(false);
//   };

//   const handleConfirm = (date: any) => {
//     onChangeText(moment(date).format(DATE_FORMAT.yyyy_mm_dd));
//     hideDatePicker();
//   };
//   return (
//     <TouchableOpacity
//       activeOpacity={0.7}
//       onPress={() => {
//         onPress();
//         setDatePickerVisibility(true);
//       }}
//       style={style}>
//       {children}
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode={mode}
//         date={new Date()}
//         onConfirm={handleConfirm}
//         onCancel={hideDatePicker}
//         // maximumDate={new Date(moment().subtract(18, 'years'))}
//         // minimumDate={new Date(moment().subtract(50, 'years'))}
//       />
//     </TouchableOpacity>
//   );
// };
export const DatePicker = (props: IProps) => {
  const {style, onChangeText, mode = 'date', children,isVisible,onCancel, minimumDate,onConfirm  } = props;
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  // const handleConfirm = (date: Date) => {
  //   onChangeText(moment(date).format('YYYY-MM-DD'));
  //   hideDatePicker();
  // };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={showDatePicker}
      style={style}>
      {children}
      <DateTimePickerModal
        isVisible={isVisible}
        // isVisible={isDatePickerVisible}
        mode={mode}
        onConfirm={onConfirm}
        onCancel={onCancel}
        minimumDate={minimumDate}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({});