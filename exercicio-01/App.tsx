import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ItemView } from './src/ViewModel/ItemView'; 

export default function App() {
  return (
    <View style={styles.container}>
      <ItemView />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});