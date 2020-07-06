import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { PokemonListScreen, PokemonDetailsScreen } from '../../screens';

const Stack = createStackNavigator();

export function PokemonStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={PokemonListScreen}
        name='PokemonListScreen'
        options={{
          title: 'Pokemon',
          headerTitleAlign: 'center',
          headerStyle: { borderBottomWidth: 3, borderBottomColor: '#51E85E', backgroundColor: '#D8F6DB' }
        }}
      />
      <Stack.Screen
        component={PokemonDetailsScreen}
        name='PokemonDetailsScreen'
        options={{ title: '', headerTransparent: true, headerTintColor: '#fff' }}
      />
    </Stack.Navigator>
  )
}