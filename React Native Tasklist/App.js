import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
    const [newTask, setNewTask] = useState('');
    return (
        <View style= {styles.container}>
            <View style = {styles.inputContainer}>
                <TextInput
                    placeholder = "Task List"
                    style = {styles.input}
                />
                <Button title = "+"/> 
            </View>
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
    input :{
        borderColor:"black", 
        borderWidth:1 , 
        padding :20,
    },
    inputContainer :{
        flexDirection :'row', 
        justifyContent :'space-between', 
        alignContent:'center',
        bottom:20
    },
});