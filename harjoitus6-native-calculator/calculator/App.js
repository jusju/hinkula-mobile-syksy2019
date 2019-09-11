import React from 'react';
import { StatusBar, StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {first: '', second: '', result: 0}
  }

  addThis = () => {
    this.setState(
      {result: (parseInt(this.state.first) + parseInt(this.state.second)) + ''}
    );
    //Alert.alert(this.state.result);
  };

  minusThis = () => {
    this.setState(
      {result: (parseInt(this.state.first) - parseInt(this.state.second)) + ''}
    );
    //Alert.alert(this.state.result);
  };

  render() {
    return (
      <View style={{height:100, flex:1}}>

        <View style={{flex:1}}></View>
        
        <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'space-around'}}>
          <Text>Verenpaine </Text>
          <Text>{this.state.result}</Text>
          <Text>Yläpaine</Text>
          <TextInput keyboardType='numeric' style={{width: 200, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(first) => this.setState({first})}
            value={this.state.first}
          />
          <Text>Alapaine</Text>
          <TextInput keyboardType='numeric' style={{width: 200, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(second) => this.setState({second})}
            value={this.state.second}
          />
        
        </View>
        <View style={{flex:2, flexDirection:'row', alignItems:'center', justifyContent:'space-around'}}>
          <Button onPress={this.addThis} title="TALLETA" />
          <Button onPress={this.minusThis} title="SELAA" />  
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});