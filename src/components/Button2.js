import React from 'react';

import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function elevationShadowStyle(elevation) {
  return {
    elevation,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0.5 * elevation },
    shadowOpacity: 0.3,
    shadowRadius: 0.8 * elevation
  };
}

const Button2 = ({ onPress, children, styling, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonStyle, styling]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.titleButton}>{children}</Text>
    </TouchableOpacity>
  );
};
export default Button2;

const styles = StyleSheet.create({
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'white',
    width: 300,
    alignSelf: 'center',
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    elevation: 10
  },
  titleButton: {
    fontSize: 21,
    paddingVertical: 7
  }
});

