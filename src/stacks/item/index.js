import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { ItemListScreen, ItemDetailsScreen } from '../../screens';

const Stack = createStackNavigator();

export function ItemStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ItemListScreen}
        name='ItemListScreen'
        options={{ title: 'Itens', headerTitleAlign: 'center', headerStyle: { borderBottomWidth: 3, borderBottomColor: '#51E85E', backgroundColor: '#D8F6DB' } }}
      />
      <Stack.Screen
        component={ItemDetailsScreen}
        name='ItemDetailsScreen'
        options={{ title: '', headerTransparent: true, headerTintColor: '#fff' }}
      />
    </Stack.Navigator>
  )
}