import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [P1, setP1] = useState(0)
  const [P2, setP2] = useState(3)
  return (
    <View style={styles.container}>
      <View style={score.container}>
        <Text>P1: {P1}</Text>
        <Text>P2: {P2}</Text>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

const score = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
;
