import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { ItemViewModel } from '../View/ItemViewModel'; 
import { Item } from '../Models/item'; 

export const ItemView = () => {
  const navigation = useNavigation<any>();
  const { items, handleRemoverItem, refreshItems } = ItemViewModel();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refreshItems();
    });
    return unsubscribe;
  }, [navigation]);

  const confirmarExclusao = (id: string, nome: string) => {
    Alert.alert(
      "Confirmar Exclusão",
      `Você realmente deseja deletar esse item? "${nome}"`,
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
    <SafeAreaView style={styles.container} edges={['bottom', 'left', 'right']}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemText}>{item.nome}</Text>
            <TouchableOpacity 
              style={styles.deleteButton} 
              onPress={() => confirmarExclusao(item.id, item.nome)}
            >
              <Text style={styles.deleteButtonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum item na lista.</Text>
        }
      />

      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.centerButton} 
          onPress={() => navigation.navigate('Formulario')}
        >
          <Text style={styles.centerButtonText}>Adicionar Item</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F4F6' },
  listContainer: { padding: 20, paddingBottom: 100 },
  itemCard: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 20, 
    backgroundColor: '#FFF', 
    marginBottom: 10, 
    borderRadius: 12,
    elevation: 2
  },
  itemText: { fontSize: 16, fontWeight: 'bold', color: '#374151' },
  deleteButton: { backgroundColor: '#FEE2E2', padding: 10, borderRadius: 8 },
  deleteButtonText: { color: '#EF4444', fontWeight: 'bold' },
  emptyText: { textAlign: 'center', marginTop: 50, color: '#9CA3AF' },
  footer: { 
    padding: 20, 
    backgroundColor: '#F3F4F6',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB'
  },
  centerButton: { 
    backgroundColor: '#6366F1', 
    height: 56, 
    borderRadius: 16, 
    justifyContent: 'center',
    alignItems: 'center' 
  },
  centerButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});