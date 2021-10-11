import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Button } from 'react-native';
import CountDown from 'react-native-countdown-component';

export default function App() {
const [start, setStart] = useState(false)
const [counter, setCounter] = useState()
const [p1word, setp1word] = useState('Player 1')
const [p2word, setp2word] = useState('Player 2')
const [playWord, setPlayWord] = useState('Play')


function change(){
  if(!start){
    setStart(true)
    setPlayWord('Cancel')
  }else if (start){
    setStart(false)
    setPlayWord('Play Again')
  }
}

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

      {start? (
      <View style={[styles.container, {width: '100%'}]}>
        <View style={[{transform: [{ rotate: '180deg' }]}]}>
          <CountDown
          until={3}
          size={20}
          timeToShow={['S']}
          />
        </View>

        <Button title={playWord} onPress={() => change()}/>

        <CountDown 
        until={3}
        size={20}
        timeToShow={['S']}
        />

      </View>
      ) : (
        <View style={[styles.container, {width: '100%'}]}>
      <Button title={playWord} onPress={() => change()}/>
      </View>
      )}

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
