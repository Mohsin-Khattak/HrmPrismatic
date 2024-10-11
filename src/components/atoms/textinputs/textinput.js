import { colors } from 'config/colors';
import { mvs } from 'config/metrices';
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can choose another icon set if needed

const Primaryinput = ({ iconName,placeholder, ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        {...props} 
      />
      <Icon name={iconName} size={24} color={colors.primary} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: mvs(1),
    borderColor: '#D3D3D3',
    borderRadius: mvs(10),
    paddingHorizontal: mvs(10),
    backgroundColor: 'white',
    width:'90%',
    alignSelf:'center'
  },
  input: {
    flex: 1, 
    paddingVertical: mvs(10),
    paddingHorizontal: mvs(10),
    fontSize: mvs(16),
  },
  icon: {
    marginLeft: mvs(10), // Space between TextInput and the icon
  },
});

export default Primaryinput;
