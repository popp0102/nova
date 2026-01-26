import React from 'react';
import { View } from 'react-native';

export const LinearGradient = ({ children, colors: _colors, style, ...props }) => {
  return <View style={style} {...props}>{children}</View>;
};
