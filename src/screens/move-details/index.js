import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { api } from '../../services';
import LinearGradient from 'react-native-linear-gradient';
import { CallLoader, StatusBarStyle, GetPokemonTypeColors } from '../../components';
import { MyIcon } from '../../components/my-icon';

export function MoveDetailsSCreen({ route }) {
  const { moveId } = route.params;
  const [moveDetail, setMoveDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonTypeColor, setPokemonTypeColor] = useState({});

  useEffect(() => {
    async function getMoveDetails() {
      setIsLoading(true);
      const response = await api.get(`/movesDetails/${moveId}`);
      setMoveDetail(response.data);
      setPokemonTypeColor(GetPokemonTypeColors(response.data.type.name));
      setIsLoading(false);
    }
    getMoveDetails();
  }, [moveId])

  function RenderContent() {
    if (isLoading) {
      return (
        <CallLoader />
      );
    }

    return (
      <LinearGradient
        colors={pokemonTypeColor.gradient} style={styles.container}>
        <StatusBarStyle translucent={true} color={'transparent'} barStyle={'light-content'} />
        <View style={styles.bottomContainer}>
          <View style={styles.iconContainer}>
            <MyIcon name={moveDetail.type.name} size={28} width={80} height={80} borderWidth={3} ></MyIcon>
          </View>
          <View style={styles.moveInfos}>
            <Text style={styles.moveName}>{moveDetail.name}</Text>
            <View style={styles.iconInfo}>
              <MyIcon name={moveDetail.type.name} iconText={moveDetail.type.name} justifyContent={'space-evenly'} width={110} elevation={0}></MyIcon>
            </View>
            <Text style={styles.effect}>{moveDetail.effect}</Text>
            <View style={styles.moveStatsContainer}>
              <View style={styles.moveStatsInner}>
                <Text style={[styles.moveStatsText, { color: pokemonTypeColor.solid }]}>Base Power</Text>
                <Text style={styles.moveStatsNumber}>{moveDetail.power ? moveDetail.power : 0}</Text>
              </View>
              <View style={styles.bar}></View>
              <View style={styles.moveStatsInner}>
                <Text style={[styles.moveStatsText, { color: pokemonTypeColor.solid }]}>Accuracy</Text>
                <Text style={styles.moveStatsNumber}>{moveDetail.accuracy ? moveDetail.accuracy : 0}%</Text>
              </View>
              <View style={styles.bar}></View>
              <View style={styles.moveStatsInner}>
                <Text style={[styles.moveStatsText, { color: pokemonTypeColor.solid }]}>PP</Text>
                <Text style={styles.moveStatsNumber}>{moveDetail.pp ? moveDetail.pp : 0}</Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    )
  }
  return RenderContent();
}
