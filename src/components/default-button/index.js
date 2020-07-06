import React from 'react';
import styles from './styles';
import { TouchableOpacity, Text } from 'react-native';

export function DefaultButton(props) {
  const { text, color = '#fff', backgroundColor, onPress = (() => { }) } = props;

  return (
    <TouchableOpacity style={[styles.defaultButton, { backgroundColor }]} onPress={onPress}>
      <Text style={[styles.defaultButtonText, { color }]}>{text}</Text>
    </TouchableOpacity>
  )
}