import React, {useState} from 'react';
import { Alert, Button, TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [numA, setNumber1] = useState('');
  const [numB, setNumber2] = useState('');
  const [result, setResult] = useState(0);

  const additionPressed = () => {
    //Alert.alert("Addition pressed!");
    const sum = parseFloat(numA) + parseFloat(numB);
    setResult(sum);
  }
  const deductionPressed = () => {
    //Alert.alert("Deduction pressed!");
    const sum = parseFloat(numA) - parseFloat(numB);
    setResult(sum);
  }

  return (
    <View style={styles.container}>
      <Text>Result2: {result}</Text>
      <TextInput 
        keyboardType="numeric" 
        style={{fontSize:18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={numA => setNumber1(numA)}
        value={String(numA)}
      />
      <TextInput 
        keyboardType="numeric" 
        style={{fontSize:18, width: 200, borderColor: 'gray', borderWidth: 1}}
        onChangeText={numB => setNumber2(numB)}
        value={String(numB)}
      />
      <View style={styles.buttoncontainer}>
        <Button onPress={additionPressed} title="+" />
        <Button onPress={deductionPressed} title="-" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttoncontainer: {
    flex: 2,
    padding: 20,
    width: 150,
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
