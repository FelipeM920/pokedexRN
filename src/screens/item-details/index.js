import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import { api } from '../../services';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import { CallLoader, StatusBarStyle } from '../../components';
import { MyIcon } from '../../components/my-icon';

export function ItemDetailsScreen({ route }) {
  const { itemId } = route.params;
  const [itemDetail, setItemDetail] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getItemDetails() {
      setIsLoading(true);
      const response = await api.get(`/itemsDetails/${itemId}`);
      setItemDetail(response.data);
      setIsLoading(false);
    }
    getItemDetails();
  }, [itemId]);

  function RenderContent() {
    if (isLoading) {
      return (
        <CallLoader />
      );
    }
    return (
      <LinearGradient
        colors={['#84E090', '#75DEDD']} style={styles.container}>
        <StatusBarStyle translucent={true} color={'transparent'} barStyle={'light-content'} />
        <View style={styles.bottomContainer}>
          <View style={styles.imageContainer}>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={{ uri: itemDetail.image }}>
            </Image>
          </View>
          <View style={styles.pokeballInfos}>
            <Text style={styles.pokeballName}>{itemDetail.name}</Text>
            <View style={styles.costContainer}>
              <Text style={styles.pokeballCost}>{itemDetail.cost}</Text>
              <MyIcon name={'coin'} color={'#A4A4A4'} size={18}></MyIcon>
            </View>
            <Text style={styles.pokeballDescriptin}>{itemDetail.effect}</Text>
          </View>
        </View>
      </LinearGradient>
    )
  }
  return RenderContent();
}
