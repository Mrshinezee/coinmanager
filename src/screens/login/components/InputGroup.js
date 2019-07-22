import React from 'react';
import { Text, TextInput, View, StyleSheet, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


 const InputGroup = ({
  value, inputContainerStyle, label, style, ...rest
}) => {
  const inputLabel = typeof label === 'string'
    ? <Text style={styles.textLabel}>{label}</Text>
    : label;
  return (
    <View style={[styles.container, inputContainerStyle]}>
      <View style={styles.label}>
        {inputLabel}
      </View>
      <TextInput
        {...rest}
        style={[styles.inputText, style]}
        value={value}
      />
    </View>
  );
};

 export default InputGroup;

 const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 10,
    marginBottom: 11,
  },
  label: {
    textAlignVertical: 'center',
    marginTop: Platform.OS === 'ios' ? 4 : 0,
    marginRight: 15,
  },
  textLabel: {
    color: '#B2B2B2',
  },
  input: {
    flexDirection: 'row',
  },
  inputText: {
    backgroundColor: '#F7F7F7',
    height: 34,
    fontSize: 12,
    position: 'absolute',
    paddingTop: Platform.OS === 'ios' ? 0 : 8,
    left: wp('20%'),
  },
  children: {
    flexDirection: 'row',
  },
});
