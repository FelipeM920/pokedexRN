import React, { useState, useEffect, useCallback } from 'react';
import { api } from '../../services';
import { FlatList } from 'react-native-gesture-handler';
import { ItemListCard } from '../../components';
import { useFocusEffect } from '@react-navigation/native';

export function ItemListScreen(props) {
  const { navigation } = props;
  const [itemListData, setItemListData] = useState([]);

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
    async function getItemList() {
      const response = await api.get('items');
      setItemListData(response.data);
    }
    getItemList();
  }, []);

  function onItemPress(id) {
    navigation.navigate('ItemDetailsScreen', {
      itemId: id,
    });
  }

  return (
    <FlatList
      data={itemListData}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <ItemListCard
          name={item.name}
          image={item.image}
          cost={item.cost}
          onPress={() => onItemPress(item.id)}
        />
      )}
    />
  )
}
