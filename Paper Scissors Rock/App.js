import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image, Button } from 'react-native';

export default function App() {
  const [p1score, setP1score] = useState(0)
  const [p2score, setP2score] = useState(0)
  const [p1turn, setP1turn] = useState(true)
  const [p2turn, setP2turn] = useState(false)
  const [p1, setp1] = useState('')
  const [p2, setp2] = useState('')
  const [winner, setWinner] = useState('...')
  const [shown, setShown] = useState(false)


  function wincalc(){
    if(p1 == p2){
      setWinner(' Nobody...')
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
      <View style={score.container}>
        <Text>p1score: {p1score} </Text>
        <Button
          title = {"reset"}
          onPress = {() => {setP1score(p1score - p1score); {setP2score(p2score - p2score)}}}
        />
        <Text> p2score: {p2score}</Text>
      </View>
      {p1turn ? (<Text style={styles.title}>PLAYER 1's TURN</Text>):null}
      {p1turn ? (<View style={score.container}>
        <TouchableHighlight onPress={() => {setp1('Paper'); setP1turn(false); setP2turn(true)}}>
          <Image style={picture.container} source={require('./assets/Paper.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {setp1('Scissors'); setP1turn(false); setP2turn(true)}}>
          <Image style={picture.container} source={require('./assets/Scissors.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {setp1('Rock'); setP1turn(false); setP2turn(true)}}>
          <Image style={picture.container} source={require('./assets/Rock.png')} />
        </TouchableHighlight>
      </View>
      ) : null}

      {p2turn ? (<Text style={styles.title}>PLAYER 2's TURN</Text>):null}
      {p2turn ? (<View style={score.container}>
        <TouchableHighlight onPress={() => {setp2('Paper'); setP2turn(false)}}>
          <Image style={picture.container} source={require('./assets/Paper.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {setp2('Scissors'); setP2turn(false)}}>
          <Image style={picture.container} source={require('./assets/Scissors.png')} />
        </TouchableHighlight>
        <TouchableHighlight onPress={() => {setp2('Rock'); setP2turn(false)}}>
          <Image style={picture.container} source={require('./assets/Rock.png')} />
        </TouchableHighlight>
      </View>
      ) : null}
      
      
      {p1turn == p2turn ? (
      <View styles={score.container}>
        <Text style={styles.title}>And the winner is {winner}</Text>
        {shown ? (<Button
          title = {"Play again?"}
          onPress = {() => {setP1turn(true); setp1(''); setp2(''); setWinner(''); setShown(false)}}
        />) : (<Button
          title = {"Reveal winner"}
          onPress = {() => {wincalc(); setShown(true)}}
        />)}
      </View> 
      ): null}
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
  title:{
    fontWeight: 'bold',
    fontSize: 30,
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
    width: 100
  }
})
;
