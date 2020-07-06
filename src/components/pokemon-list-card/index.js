import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { MyIcon } from '../../components/my-icon';

export function PokemonListCard(props) {
  const { image, name, id, types = [], onPress } = props;
  const [pressed, setPressed] = useState(false);

  function renderTypes() {
    return types.map((type) => {
      return (
        <View key={type} style={styles.elementIcon}>
          <MyIcon name={type}></MyIcon>
        </View>
      );
    });
  }

  return (
    <TouchableOpacity
      style={{ backgroundColor: pressed ? '#a2e9fc' : '#fafafa' }}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.pokemonInfoContainer}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={{ uri: image }}>
            </Image>
          </View>
          <View style={styles.nameIdContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.id}>#{id.padStart(3, '0')}</Text>
          </View>
        </View>
        <View style={styles.pokemonTypeContainer}>
          {renderTypes()}
        </View>
      </View>
    </TouchableOpacity>
  );
}