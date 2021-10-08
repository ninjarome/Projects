import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import CountDown from 'react-native-countdown-component';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.container, {alignItems: "flex-end"}, {flexDirection: "row"},{
        transform: [{ rotate: '180deg' }]
      }]}>
      <TouchableHighlight>
      <Image style={styles.picture} source={require('./assets/Paper.png')} />
    </TouchableHighlight>
    <TouchableHighlight>
      <Image style={styles.picture} source={require('./assets/Scissors.png')} />
    </TouchableHighlight>
    <TouchableHighlight>
      <Image style={styles.picture} source={require('./assets/Rock.png')} />
    </TouchableHighlight>
      </View>
      <View style={[styles.container, {backgroundColor: 'rgba(0,0,0,0.1)'}, {flexDirection: 'row'}]}>

    <CountDown 
      until={3}
      onPress={() => alert('hi')}
      size={20}
      timeToShow={['S']}
      />
      </View>
      <View style={[styles.container, {alignItems: "flex-end"}, {flexDirection: "row"}]}>
      <TouchableHighlight>
      <Image style={styles.picture} source={require('./assets/Paper.png')} />
    </TouchableHighlight>
    <TouchableHighlight>
      <Image style={styles.picture} source={require('./assets/Scissors.png')} />
    </TouchableHighlight>
    <TouchableHighlight>
      <Image style={styles.picture} source={require('./assets/Rock.png')} />
    </TouchableHighlight>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'space-around',
  },
  picture: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    resizeMode: "center",
    height: 100,
    width: 100
  }
});
