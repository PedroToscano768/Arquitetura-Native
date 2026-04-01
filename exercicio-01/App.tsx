import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ItemView } from './src/ViewModel/ItemView';
import { FormView } from './src/ViewModel/FormView';


const PaginaVazia = () => (
  <View style={styles.center}>
    <Text style={styles.text}>ainda não tem nada :)</Text>
  </View>
);


const Stack = createStackNavigator();
const ListStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ListaItems" 
        component={ItemView} 
        options={{ title: 'Meus Itens' }} 
      />
      <Stack.Screen 
        name="Formulario" 
        component={FormView} 
        options={{ title: 'Novo Item' }} 
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen 
          name="Listagem" 
          component={ListStack} 
        />
        
        <Tab.Screen 
          name="Configurações" 
          component={PaginaVazia} 
          options={{ headerShown: true }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  text: {
    fontSize: 18,
    color: '#9CA3AF',
    fontWeight: '500',
  },
});