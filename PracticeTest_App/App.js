import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';


export default function App() {
  const [testword, setText] = useState('')
  const [testbutton, pressed] = useState(0)
  const [boxes, setBoxes] = useState([])

  const [flexDirection, setFlexDirection] = useState('row')
  const [justifyContent, setJustifyContent] = useState('center')
  const [alignItems, setAlignItems] = useState('center')
  const layoutStyle = { flexDirection, justifyContent, alignItems }


  return (
    <View style={styles.container}>
      <View style={styles.box} />
      <Button
        title = {testbutton.toString()}
        onPress = {() => {setBoxes([...boxes, testbutton]); pressed(testbutton + 1)}}
      />
      <Text>Text test</Text>
      <Button
      title = {"reset"}
      onPress = {() => {pressed(testbutton - testbutton); setBoxes([])}}
      />



      <StatusBar style="auto" />
      <TextInput
        value={testword}
        style={{ fontSize: 42, color: 'steelblue' }}
        placeholder="Type here..."
        onChangeText={(testword) => {
          setText(testword)
        }}
      />
      <Text style={{ fontSize: 24 }}>
        {'\n'}You entered: {testword}
      </Text>
      <View style = {[styles.layout, layoutStyle]}> 
      {boxes.map((b, index) => (
          <View key={index.toString()} style={style2.box}>
          </View>
      ))}
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },box: {
    padding: 25,
    backgroundColor: '#3B6CD4',
    margin: 5,
  },layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
});
const style2 = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 24,
  },
  layout: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  box: {
    padding: 25,
    backgroundColor: '#EB0505',
    margin: 5,
  },
});

