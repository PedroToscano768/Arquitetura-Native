import React from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { ItemViewModel } from '../View/ItemViewModel';
import { Item } from '../Models/item';

export const ItemView = () => {
  const { 
    items, 
    nomeDigitado, 
    setNomeDigitado, 
    mensagemErro, 
    handleAdicionarItem 
  } = ItemViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Itens</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o nome do item..."
        value={nomeDigitado}
        onChangeText={setNomeDigitado}
      />

      {mensagemErro ? <Text style={styles.errorText}>{mensagemErro}</Text> : null}

      <Button title="Adicionar" onPress={handleAdicionarItem} />

      <FlatList
        data={items}
        keyExtractor={(item: Item) => item.id}
        renderItem={({ item }: {item: Item}) => (
          <View style={styles.itemCard}>
            <Text>{item.nome}</Text>
          </View>
        )}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, marginTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10 },
  errorText: { color: 'red', marginBottom: 10 },
  list: { marginTop: 20 },
  itemCard: { padding: 15, backgroundColor: '#f9f9f9', borderBottomWidth: 1, borderColor: '#eee' }
});
