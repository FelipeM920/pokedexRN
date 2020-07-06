import React from 'react';
import { StatusBar } from 'react-native';

export function StatusBarStyle(props) {
  const { color, barStyle, translucent = false } = props;

  return <StatusBar translucent backgroundColor={color} barStyle={barStyle} />
}