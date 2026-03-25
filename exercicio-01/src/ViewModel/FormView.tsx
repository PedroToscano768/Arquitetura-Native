import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ItemViewModel } from '../View/ItemViewModel';

export const FormView = () => {
  const navigation = useNavigation();
  const { nomeDigitado, setNomeDigitado, mensagemErro, handleAdicionarItem } = ItemViewModel();

  const salvar = () => {
    handleAdicionarItem();
    if (nomeDigitado.trim().length > 2) {
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do item..."
        value={nomeDigitado}
        onChangeText={setNomeDigitado}
      />
      {mensagemErro ? <Text style={styles.errorText}>{mensagemErro}</Text> : null}
      
      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>Salvar Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F3F4F6' },
  input: { backgroundColor: '#FFF', height: 50, borderRadius: 10, paddingHorizontal: 15, marginBottom: 10 },
  errorText: { color: 'red', marginBottom: 10 },
  button: { backgroundColor: '#6366F1', height: 50, borderRadius: 10, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#FFF', fontWeight: 'bold' }
});