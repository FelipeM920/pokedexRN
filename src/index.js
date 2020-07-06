import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { PokemonStack, MoveStack, ItemStack } from './stacks';
import { MyIcon } from './components/my-icon';

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === 'PokemonStack') {
              iconName = 'pokemon';
            } else if (route.name === 'MoveStack') {
              iconName = 'moves'
            } else if (route.name === 'ItemStack') {
              iconName = 'itens'
            }
            return <MyIcon name={iconName} color={color} size={25} />
          }
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          style: { borderTopWidth: 3, borderTopColor: '#51E85E', backgroundColor: '#D8F6DB' }
        }}
      >
        <BottomTab.Screen component={PokemonStack} name='PokemonStack' options={{ title: 'Pokemon'}} />
        <BottomTab.Screen component={MoveStack} name='MoveStack' options={{ title: 'Moves', }} />
        <BottomTab.Screen component={ItemStack} name='ItemStack' options={{ title: 'Itens', }} />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}