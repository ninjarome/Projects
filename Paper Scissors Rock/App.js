import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Button } from 'react-native';

export default function App() {
  const [P1, setP1] = useState(0)
  const [P2, setP2] = useState(3)
  return (
    <View style={styles.container}>
      <View style={score.container}>
        <Text>P1: {P1}</Text>
        <Button
          title = {"reset"}
          onPress = {() => {setP1(P1 - P1); {setP2(P2 - P2)}}}
        />
        <Text>P2: {P2}</Text>
      </View>
      <View style={score.container}>
        <TouchableHighlight onPress={() => setP1(P1 + 1)}>
          <Image style={picture.container} source={require('./assets/Paper.png')} />
        </TouchableHighlight>
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

const picture = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: "100%",
    resizeMode: "center",
    height: 100,
    width: 200
  }
})
;
