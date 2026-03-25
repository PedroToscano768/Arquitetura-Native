import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ItemView } from './src/ViewModel/ItemView';
import { FormView } from './src/ViewModel/FormView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen name="Lista" component={ItemView} />
        <Stack.Screen name="Formulario" component={FormView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}