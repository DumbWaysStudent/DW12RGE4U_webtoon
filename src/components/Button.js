import React from 'react';
import { Button as CustomButton, Text } from 'native-base';

const Button = ({ onPress, children, styling, disabled }) => {
  return (
    <CustomButton
      style={[styles.buttonStyle, styling]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text>{children}</Text>
    </CustomButton>
  );
};
export default Button;

const styles = {
  buttonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  }
};

