import React from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';
import { MyIcon } from '../../components/my-icon';

export function ItemListCard(props) {
  const { name, image, cost, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.pokeballsInfo}>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={{ uri: image }}>
              </Image>
            </View>
            <Text>{name}</Text>
          </View>
          <View style={styles.pokeballsCost}>
            <Text style={styles.costValue}>{cost}</Text>
            <MyIcon name={'coin'} color={'#4F4F4F'} size={15}></MyIcon>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}