import React, { useState, useEffect, useCallback } from 'react';
import { api } from '../../services';
import { FlatList } from 'react-native-gesture-handler';
import { MoveListCard } from '../../components';
import { useFocusEffect } from '@react-navigation/native';

export function MoveListScreen(props) {
  const { navigation } = props;
  const [moveListData, setMoveListData] = useState([]);

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
    async function getMoveList() {
      const response = await api.get('/moves')
      setMoveListData(response.data);
    }
    getMoveList()
  }, []);

  function onMovePress(id) {
    navigation.navigate('MoveDetailsSCreen', {
      moveId: id,
    });
  }

  return (
    <FlatList
      data={moveListData}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <MoveListCard
          name={item.name}
          type={item.type}
          onPress={() => onMovePress(item.id)}
        />
      )}
    />
  )
}
