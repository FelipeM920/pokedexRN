import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import styles from './styles';
import { MyIcon } from '../../components/my-icon';

export function MoveListCard(props) {
  const { name, type, onPress } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.moveName}>{name}</Text>
        <MyIcon name={type}></MyIcon>
      </View>
    </TouchableOpacity>
  )
}