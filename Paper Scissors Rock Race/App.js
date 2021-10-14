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
const [p1, setp1] = useState('--------')
const [p2, setp2] = useState('--------')
const [p1score, setP1score] = useState(0)
const [p2score, setP2score] = useState(0)
const [p1colour, setP1colour] = useState('rgba(0,0,0,0.1)')
const [p2colour, setP2colour] = useState('rgba(0,0,0,0.1)')


function change(){
  if(!start){
    setStart(true)
    setp1('')
    setp2('')
    setp1word('Player 1')
    setp2word('Player 2')
    setPlayWord('Cancel')
    setP1colour('rgba(0,0,0,0.1)')
    setP2colour('rgba(0,0,0,0.1)')
  }else if (start){
    setStart(false)
    setPlayWord('Play Again')
  }
}

function wincalc(){
  setPlayWord('Reset')
  if(p1 == '' && p2 != ''){
    setp1word("You didn't choose in time\nYou Lose")
    setp2word("They didn't choose in time\nYou Win!")
    setP1colour('#FF6161')
    setP2colour('#B0FF61')
    setP2score(p2score + 1)
  }
  else if(p2 == '' && p1 != ''){
    setp2word("You didn't choose in time\nYou Lose")
    setp1word("They didn't choose in time\nYou Win!")
    setP1colour('#B0FF61')
    setP2colour('#FF6161')
    setP1score(p1score + 1)
  }
  else if(p1 == p2){
    setp1word('TIE!')
    setp2word('TIE!')
    setP2colour('#FFFF61')
    setP1colour('#FFFF61')
  }
  else if(p1 == 'Paper' && p2 == 'Rock'
  || p1 == 'Scissors' && p2 == 'Paper'
  || p1 == 'Rock' && p2 == 'Scissors'){
    setp1word('You Win!')
    setp2word('You Lose')
    setP1colour('#B0FF61')
    setP2colour('#FF6161')
    setP1score(p1score + 1)
  }
  else if(p2 == 'Paper' && p1 == 'Rock'
  || p2 == 'Scissors' && p1 == 'Paper'
  || p2 == 'Rock' && p1 == 'Scissors'){
    setp2word('You Win!')
    setp1word('You Lose')
    setP1colour('#FF6161')
    setP2colour('#B0FF61')
    setP2score(p2score + 1)
  }
}

  return (
    <View style={styles.container}>
      {p2 == '' ? (
        <View style={[styles.container, {width: '100%'}, {alignItems: "flex-end"}, {flexDirection: "row"},
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

        <View style={[styles.container, {width: '100%'}, {alignItems: "flex-end"}, {flexDirection: "row"},
        {transform: [{ rotate: '180deg' }]},  {backgroundColor: 'rgba(0,0,0,0.1)'}, {flex: 0.45}, {opacity: 0.5}
        ]}>
          {p2 == 'Paper'? (<Image style={[styles.picture, {backgroundColor: '#00DBFF'}]} source={require('./assets/Paper.png')}/>):
          (<Image style={styles.picture} source={require('./assets/Paper.png')}/>)}
          {p2 == 'Scissors'? (<Image style={[styles.picture, {backgroundColor: '#FF2727'}]} source={require('./assets/Scissors.png')}/>):
          (<Image style={styles.picture} source={require('./assets/Scissors.png')}/>)}
          {p2 == 'Rock'? (<Image style={[styles.picture, {backgroundColor: '#2ECE00'}]} source={require('./assets/Rock.png')}/>):
          (<Image style={styles.picture} source={require('./assets/Rock.png')}/>)}
        </View>
      )}

      <Text style={[styles.title, {justifyContent: "flex-start"}, {width: '100%'},{backgroundColor: p2colour}, {
        transform: [{ rotate: '180deg' }]}]}>{p2word}{'\n'}{p2}</Text>

      {start? (
      <View style={[styles.container, {width: '100%'}]}>
        <View style={[{transform: [{ rotate: '180deg' }]}, {width: '100%'}]}>
          <Text style={[styles.title, {fontSize: 20}, {alignSelf: 'flex-start'}, {position: 'absolute'}]}>P2(You): {p2score}</Text>
          <CountDown
          until={3}
          size={20}
          timeToShow={['S']}
          onFinish={() => wincalc()}
          />
          <Text style={[styles.title, {fontSize: 20}, {alignSelf: 'flex-end'}, {position: 'absolute'}]}>P1: {p1score}</Text>
        </View>

        <Button title={playWord} onPress={() => change()}/>
        <View style={{width: '100%'}}>
          <Text style={[styles.title, {fontSize: 20}, {alignSelf: 'flex-start'}, {position: 'absolute'}]}>P1(You): {p1score}</Text>
          <CountDown
          until={3}
          size={20}
          timeToShow={['S']}
          />
          <Text style={[styles.title, {fontSize: 20}, {alignSelf: 'flex-end'}, {position: 'absolute'}]}>P2: {p2score}</Text>
        </View>
      </View>
      ) : (
        <View style={[styles.container, {width: '100%'}]}>
          <View style={[{width: '100%'}, {transform: [{ rotate: '180deg' }]}]}>
            <Text style={[styles.title, {fontSize: 20}, {alignSelf: 'flex-start'}, {position: 'absolute'}]}>P2(You): {p2score}</Text>
            <Text style={[styles.title, {fontSize: 20}, {alignSelf: 'flex-end'}, {position: 'absolute'}]}>P1: {p1score}</Text>
          </View>
          <Button title={playWord} onPress={() => change()}/>
          <View style={{width: '100%'}}>
            <Text style={[styles.title, {fontSize: 20}, {alignSelf: 'flex-start'}, {position: 'absolute'}]}>P1(You): {p1score}</Text>
            <Text style={[styles.title, {fontSize: 20}, {alignSelf: 'flex-end'}, {position: 'absolute'}]}>P2: {p2score}</Text>
          </View>
      </View>
      )}

      <Text style={[styles.title, {width: '100%'}, {backgroundColor: p1colour}]}>{p1word}{'\n'}{p1}</Text>
      {p1 == ''? (
        <View style={[styles.container, {width: '100%'}, {alignItems: "flex-end"}, {flexDirection: "row"}, {flex: 0.45}]}>
          <TouchableOpacity onPress={() => {setp1('Paper'); setp1word('Player 1 picked')}}>
            <Image style={styles.picture} source={require('./assets/Paper.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setp1('Scissors'); setp1word('Player 1 picked')}}>
            <Image style={styles.picture} source={require('./assets/Scissors.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {setp1('Rock'); setp1word('Player 1 picked')}}>
            <Image style={styles.picture} source={require('./assets/Rock.png')}/>
          </TouchableOpacity>
        </View>) : (
        <View style={[styles.container, {width: '100%'}, {alignItems: "flex-end"}, {flexDirection: "row"},
        {backgroundColor: 'rgba(0,0,0,0.1)'}, {flex: 0.45}, {opacity: 0.5}
        ]}>
          {p1 == 'Paper'? (<Image style={[styles.picture, {backgroundColor: '#00DBFF'}]} source={require('./assets/Paper.png')}/>):
          (<Image style={styles.picture} source={require('./assets/Paper.png')}/>)}
          {p1 == 'Scissors'? (<Image style={[styles.picture, {backgroundColor: '#FF2727'}]} source={require('./assets/Scissors.png')}/>):
          (<Image style={styles.picture} source={require('./assets/Scissors.png')}/>)}
          {p1 == 'Rock'? (<Image style={[styles.picture, {backgroundColor: '#2ECE00'}]} source={require('./assets/Rock.png')}/>):
          (<Image style={styles.picture} source={require('./assets/Rock.png')}/>)}
        </View>)}

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
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
  }
});
