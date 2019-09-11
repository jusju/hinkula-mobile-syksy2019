import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App()  {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [rndnum, setRndnum] = useState(0);
  const [guessnum, setGuessnum] = useState('');

  useEffect(() => resetGame(), [])

  const resetGame = () => {
    const num = Math.floor(Math.random() * 100) + 1;
    setRndnum(num);
    setText('Guess a number between 1-100');
    setCount(0);
    setGuessnum('');
  }

  const makeGuess = () => {
    if (rndnum == parseInt(guessnum)) {
      Alert.alert('You guessed the number in ' + (count + 1) + ' guesses');
      resetGame();
    }
    else if (rndnum < parseInt(guessnum)) {
      setText('Your guess ' + guessnum + ' is too high');
      setGuessnum('');
      setCount(count + 1);
    }
    else  {
      setText('Your guess ' + guessnum + ' is too low');
      setGuessnum('');
      setCount(count + 1);
    }          
  }
  
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 20}}>{text}</Text>
      <TextInput keyboardType='numeric' style={{fontSize: 20, width: 50, borderColor: 'gray', borderWidth: 1, margin: 20}}
        onChangeText={(guessnum) => setGuessnum(guessnum)}
        value={guessnum}/>
      <Button onPress={makeGuess} title="Make guess" />
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
});

