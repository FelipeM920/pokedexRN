import React, { useEffect, useState, useCallback } from 'react';
import { api } from '../../services';
import { FlatList } from 'react-native-gesture-handler';
import { PokemonListCard, StatusBarStyle } from '../../components';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

export function PokemonListScreen(props) {
  const { navigation } = props;
  const [pokemonListData, setPokemonListData] = useState([]);


  useFocusEffect(
    useCallback(() => {
      const parent = navigation.dangerouslyGetParent();
      if (parent) {
        parent.setOptions({ tabBarVisible: true });
      }

      return () => {
        if (parent) {
          parent.setOptions({ tabBarVisible: false });
        }
      }
    }, [navigation])
  );

  useEffect(() => {
    async function getPokemonList() {
      const response = await api.get('/list')
      setPokemonListData(response.data);
    }
    getPokemonList();
  }, []);

  function onPokemonPress(id) {
    navigation.navigate('PokemonDetailsScreen', {
      pokemonId: id,
    });
  }

  return (
    <View>
      <StatusBarStyle color={'#D8F6DB'} barStyle={'dark-content'} />
      <FlatList
        data={pokemonListData.pokemons}
        renderItem={({ item }) => (
          <PokemonListCard
            image={item.image}
            name={item.name}
            id={item.id}
            types={item.types}
            onPress={() => onPokemonPress(item.id)}
          />
        )}
      />
    </View>
  )
}