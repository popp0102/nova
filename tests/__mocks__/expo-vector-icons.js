import React from 'react';
import { Text } from 'react-native';

const MockIcon = ({ name, size: _size, color: _color, ...props }) => {
  return <Text {...props}>{`Icon: ${name}`}</Text>;
};

export const MaterialIcons = MockIcon;
export const Ionicons = MockIcon;
export const AntDesign = MockIcon;
export const Entypo = MockIcon;
export const EvilIcons = MockIcon;
export const Feather = MockIcon;
export const FontAwesome = MockIcon;
export const FontAwesome5 = MockIcon;
export const Foundation = MockIcon;
export const MaterialCommunityIcons = MockIcon;
export const Octicons = MockIcon;
export const SimpleLineIcons = MockIcon;
export const Zocial = MockIcon;
