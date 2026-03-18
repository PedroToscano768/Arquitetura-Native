import React from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  FlatList, 
  StyleSheet, 
  Alert 
} from 'react-native';
import { ItemViewModel } from '../View/ItemViewModel';
import { Item } from '../Models/item';

export const ItemView = () => {
  const { 
    items, 
    nomeDigitado, 
    setNomeDigitado, 
    mensagemErro, 
    handleAdicionarItem,
    handleRemoverItem 
  } = ItemViewModel();


  const confirmarExclusao = (id: string, nome: string) => {
    Alert.alert(
      "Atenção!",
      `Deseja mesmo deletar o item "${nome}"?`,
      [
        { text: "Cancelar", style: "cancel" },
        { 
          text: "Deletar", 
          onPress: () => handleRemoverItem(id), 
          style: "destructive"
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meus Itens</Text>
        <Text style={styles.subtitle}>Gerencie sua lista de afazeres</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do item..."
          placeholderTextColor="#888"
          value={nomeDigitado}
          onChangeText={setNomeDigitado}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAdicionarItem} activeOpacity={0.8}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {mensagemErro ? <Text style={styles.errorText}>{mensagemErro}</Text> : null}

      <FlatList
        data={items}
        keyExtractor={(item: Item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: {item: Item}) => (
          <View style={styles.itemCard}>
            <View style={styles.itemInfo}>
              <Text style={styles.itemText}>{item.nome}</Text>
            </View>
            
            <TouchableOpacity 
              style={styles.deleteButton} 
              onPress={() => confirmarExclusao(item.id, item.nome)}
              activeOpacity={0.7}
            >
              <Text style={styles.deleteButtonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F3F4F6',
    paddingTop: 60,
  },
  header: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  title: { 
    fontSize: 34, 
    fontWeight: '900', 
    color: '#111827', 
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#6B7280',
    marginTop: 4,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  input: { 
    flex: 1,
    backgroundColor: '#FFFFFF',
    height: 56,
    paddingHorizontal: 20, 
    borderRadius: 16,
    fontSize: 16,
    color: '#111827',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 2, 
    marginRight: 12,
  },
  addButton: {
    width: 56,
    height: 56,
    backgroundColor: '#6366F1',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#6366F1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: '600',
    marginTop: -2, 
  },
  errorText: { 
    color: '#EF4444', 
    paddingHorizontal: 24,
    marginBottom: 16,
    fontWeight: '600',
  },
  listContainer: { 
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  itemCard: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#FFFFFF', 
    padding: 20,
    borderRadius: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  itemInfo: {
    flex: 1,
    paddingRight: 16,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#374151',
  },
  deleteButton: {
    backgroundColor: '#FEE2E2',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  deleteButtonText: {
    color: '#EF4444',
    fontWeight: '800',
    fontSize: 14,
    textTransform: 'uppercase',
  }
});