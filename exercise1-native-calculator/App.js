import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);
  const [result, setResult] = useState(0);

  const calcSum = () => {
    const sum = parseFloat(numA) + parseFloat(numB);
    setResult(sum);
  }
  const calcSub = () => {
    const sub = parseFloat(numA) - parseFloat(numB);
    setResult(sub);
  }

  return (
    <View style={styles.container}>
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>Result: {result}</Text>
      <TextInput 
        keyboardType="numeric" 
        style={{fontSize:18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={numA => setNumA(numA)}
        value={String(numA)}
      />
      <TextInput 
        keyboardType="numeric" 
        style={{fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(numB) => setNumB(numB)}
        value={String(numB)}
      /> 
      </View>
    <View style={styles.buttoncontainer}>
      <Button onPress={calcSum} title=" + " />
      <Button onPress={calcSub} title=" - " />
    </View>
  </View>            
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttoncontainer: {
    flex: 2,
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 20,
  },  
});