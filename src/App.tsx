import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import Card from './componenets/Card';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Card title="Eddard Stark" text="Winter is coming..." />
      <Card
        title="Serbest"
        text="Ilhami abi sen soyle, ben baska bir ilde miyim?"
      />
      <Card
        title="Arif Isik"
        text="Uzaylilar tarafindan kacirildim. Evet tarafindan"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default App;
