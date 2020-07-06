import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { MoveListScreen, MoveDetailsSCreen } from '../../screens';

const Stack = createStackNavigator();

export function MoveStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={MoveListScreen}
        name='MoveListScreen'
        options={{ title: 'Moves', headerTitleAlign: 'center', headerStyle: { borderBottomWidth: 3, borderBottomColor: '#51E85E', backgroundColor: '#D8F6DB' } }}
      />
      <Stack.Screen
        component={MoveDetailsSCreen}
        name='MoveDetailsSCreen'
        options={{ title: '', headerTransparent: true, headerTintColor: '#fff' }}
      />
    </Stack.Navigator>
  )
}