import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ToDo from './components/todo';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start workiádadang on your app!</Text>
      <StatusBar style="auto" />
      <ToDo />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#ff9e00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
