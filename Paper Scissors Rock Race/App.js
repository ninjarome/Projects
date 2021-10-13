import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from 'react-native';
import CountDown from 'react-native-countdown-component';

export default function App() {
const [start, setStart] = useState(false)
const [counter, setCounter] = useState()
const [p1word, setp1word] = useState('Player 1')
const [p2word, setp2word] = useState('Player 2')
const [playWord, setPlayWord] = useState('Play')
const [p1, setp1] = useState('')
const [p2, setp2] = useState('')
const [winner, setWinner] = useState('...')

function change(){
  if(!start){
    setStart(true)
    setp1('')
    setp2('')
    setp1word('Player 1')
    setp2word('Player 2')
    setPlayWord('Cancel')
  }else if (start){
    setStart(false)
    setPlayWord('Play Again')
  }
}

function wincalc(){
  if(p1 == p2){
    setWinner(' TIE')
  }
  else if(p1 == 'Paper' && p2 == 'Rock'
  || p1 == 'Scissors' && p2 == 'Paper'
  || p1 == 'Rock' && p2 == 'Scissors'){
    setWinner(' Player 1!')
    setP1score(p1score + 1)
  }else if(p2 == 'Paper' && p1 == 'Rock'
  || p2 == 'Scissors' && p1 == 'Paper'
  || p2 == 'Rock' && p1 == 'Scissors'){
    setWinner(' Player 2!')
    setP2score(p2score + 1)
  }
}


  return (
    <View style={styles.container}>
      {p2 == '' ? (
        <View style={[styles.container, {alignItems: "flex-end"}, {flexDirection: "row"},
        {transform: [{ rotate: '180deg' }]},  {backgroundColor: 'rgba(0,0,0,0.1)'}, {flex: 0.45}
        ]}>
        <TouchableOpacity onPress={() => {setp2('Paper'); setp2word('Player 2 picked')}}>
          <Image style={styles.picture} source={require('./assets/Paper.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setp2('Scissors'); setp2word('Player 2 picked')}}>
          <Image style={styles.picture} source={require('./assets/Scissors.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setp2('Rock'); setp2word('Player 2 picked')}}>
          <Image style={styles.picture} source={require('./assets/Rock.png')}/>
        </TouchableOpacity>
        </View>) : (

        <View style={[styles.container, {alignItems: "flex-end"}, {flexDirection: "row"},
        {transform: [{ rotate: '180deg' }]},  {backgroundColor: 'rgba(0,0,0,0.1)'}, {flex: 0.45}, {opacity: 0.5}
        ]}>
          <Image style={styles.picture} source={require('./assets/Paper.png')}/>
          <Image style={styles.picture} source={require('./assets/Scissors.png')}/>
          <Image style={styles.picture} source={require('./assets/Rock.png')}/>
        </View>
      )}

      <Text style={[styles.title, {justifyContent: "flex-start"}, {
        transform: [{ rotate: '180deg' }]}]}>{p2word}{'\n'}{p2}</Text>

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

      <Text style={styles.title}>{p1word}{'\n'}{p2}</Text>
      <View style={[styles.container, {alignItems: "flex-end"}, {flexDirection: "row"}, {flex: 0.45}]}>
        <TouchableOpacity onPress={() => {setp1('Paper'); setp1word('Player 1 picked')}}>
          <Image style={styles.picture} source={require('./assets/Paper.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setp1('Scissors'); setp1word('Player 1 picked')}}>
          <Image style={styles.picture} source={require('./assets/Scissors.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setp1('Rock'); setp1word('Player 1 picked')}}>
          <Image style={styles.picture} source={require('./assets/Rock.png')}/>
        </TouchableOpacity>
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
  },
  picture: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    resizeMode: "center",
    height: 100,
    width: 100
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
  }
});
