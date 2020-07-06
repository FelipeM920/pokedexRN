import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { api } from '../../services';
import { CallLoader, DefaultButton, ProgressBar, StatusBarStyle, GetPokemonTypeColors } from '../../components';
import { ScrollView } from 'react-native-gesture-handler';
import { MyIcon } from '../../components/my-icon';
import LinearGradient from 'react-native-linear-gradient';

export function PokemonDetailsScreen({ route }) {
  const { pokemonId } = route.params;
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [optionSelected, setOptionSelected] = useState(1);
  const [activeButton, setActiveButton] = useState('stats');
  const [pokemonTypeColor, setPokemonTypeColor] = useState({});

  useEffect(() => {
    async function getPokemonDetails() {
      setIsLoading(true);
      const response = await api.get(`/details/${pokemonId}`);
      setPokemonDetail(response.data);
      setPokemonTypeColor(GetPokemonTypeColors(response.data.types[0]));
      setIsLoading(false);
    }
    getPokemonDetails()
  }, [pokemonId])

  function renderTypes() {
    return pokemonDetail.types.map((type, index) => {
      return (
        <View key={index} style={styles.iconContainer}>
          <MyIcon name={type} iconText={type} width={110} justifyContent={'space-evenly'} elevation={0}></MyIcon>
        </View>
      );
    });
  }

  function changeSelectedOption(option) {
    setOptionSelected(option)
  }

  function getabbreviation(name) {
    switch (name) {
      case 'speed':
        return 'spd  ';
      case 'special-defense':
        return 'sdef';
      case 'special-attack':
        return 'satk';
      case 'defense':
        return 'def  ';
      case 'attack':
        return 'atk  ';
      case 'hp':
        return 'hp    ';
    }
  }

  function renderStatsSection() {
    return pokemonDetail.stats.reverse().map((stat, index) => {
      return (
        <View style={styles.statusContainer} key={index}>
          <Text style={[styles.statusContainerText, { color: pokemonTypeColor.solid }]}>{getabbreviation(stat.name)}</Text>
          <Text style={styles.statusContainerNumber}>{stat.value.toString().padStart(3, '0')}</Text>
          <ProgressBar progressBarLimit={110} progressBarMaxValue={stat.value} backgroundColor={pokemonTypeColor.solid} />
        </View>
      );
    });
  }

  function renderAbilitiesSection() {
    return pokemonDetail.abilities.reverse().map((abilitie, index) => {
      return (
        <View key={index} style={styles.abilities}>
          <Text style={[styles.abilityName, { color: pokemonTypeColor.solid }]}>{abilitie.name}</Text>
          <Text style={styles.abilityEffect}>{abilitie.effect}</Text>
        </View>
      )
    })
  }

  function renderMovesSection() {
    return pokemonDetail.moves.map((move, index) => {
      return (
        <View key={index} style={styles.moves}>
          <View>
            <Text style={styles.moveName}>{move.name}</Text>
            <Text style={styles.movePower}>Power: {move.power}</Text>
          </View>
          <View>
            <MyIcon name={move.type.name}></MyIcon>
          </View>
        </View>
      )
    })
  }

  function renderSelectedOption() {
    switch (optionSelected) {
      case 1:
        return renderStatsSection();

      case 2:
        return renderAbilitiesSection();

      default:
        return renderMovesSection();
    }
  }

  function renderContent() {

    if (isLoading) {
      return (
        <CallLoader />
      );
    }

    return (
      <ScrollView>
        <LinearGradient
          colors={pokemonTypeColor.gradient} style={styles.container}>
          <StatusBarStyle translucent={true} color={'transparent'} barStyle={'light-content'} />
          <View style={styles.bottomContainer}>
            <View style={styles.imageContainer}>
              <Image
                resizeMode="cover"
                style={styles.image}
                source={{ uri: pokemonDetail.image }}>
              </Image>
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.basicInfo}>
                <Text style={styles.pokemonName}>{pokemonDetail.name}</Text>
                <View style={styles.pokemonTypes}>
                  {renderTypes()}
                </View>
                <Text style={styles.pokemonDescription}>{pokemonDetail.description}</Text>
              </View>
              <View style={styles.buttons}>
                <DefaultButton text='stats'
                  type={pokemonDetail.types[0]}
                  color={activeButton == 'stats' ? '#fff' : pokemonTypeColor.solid}
                  backgroundColor={activeButton == 'stats' ? pokemonTypeColor.solid : 'transparent'}
                  onPress={() => {
                    changeSelectedOption(1);
                    setActiveButton('stats');
                  }}
                />
                <DefaultButton text='abilities'
                  type={pokemonDetail.types[0]}
                  color={activeButton == 'abilities' ? '#fff' : pokemonTypeColor.solid}
                  backgroundColor={activeButton == 'abilities' ? pokemonTypeColor.solid : 'transparent'}
                  onPress={() => {
                    changeSelectedOption(2);
                    setActiveButton('abilities');
                  }}
                />
                <DefaultButton text='moves'
                  type={pokemonDetail.types[0]}
                  color={activeButton == 'moves' ? '#fff' : pokemonTypeColor.solid}
                  backgroundColor={activeButton == 'moves' ? pokemonTypeColor.solid : 'transparent'}
                  onPress={() => {
                    changeSelectedOption(3);
                    setActiveButton('moves');
                  }}
                />
              </View>
              <View style={styles.selectedOptionContainer}>
                {renderSelectedOption()}
              </View>
            </View>
          </View>
        </LinearGradient>
      </ScrollView>
    );
  }
  return renderContent();
}