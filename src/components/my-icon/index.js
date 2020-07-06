import React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
import { Text } from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { GetPokemonTypeColors } from '../get-pokemon-type-colors';

export function MyIcon(props) {
  const {
    size = 15,
    color = '#fff',
    height = 35,
    width = 35,
    justifyContent = 'center',
    iconText = '',
    elevation = 10,
    borderWidth = 0,
    borderColor = '#fff',
    ...otherProps
  } = props;
  const Icon = createIconSetFromIcoMoon(icoMoonConfig);
  const pokemonTypeColor = GetPokemonTypeColors(props.name);

  function renderIcon(colors) {
    return (
      <LinearGradient
        colors={colors}
        style={[styles.container, { height, width, justifyContent, elevation, borderWidth, borderColor }]}>
        <Icon size={size} color={color} {...otherProps} />
        <Text style={styles.text}>{iconText}</Text>
      </LinearGradient>
    )
  }

  if (pokemonTypeColor) {
    return renderIcon(pokemonTypeColor.gradient);
  } else {
    return <Icon size={size} color={color} {...otherProps} />;
  }
}