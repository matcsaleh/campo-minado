
import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';
import params from './src/params'
import Field  from './src/components/Field'


export default class App extends Component {

  render(){
  return (
      <View style = {styles.container}>
          <Text style= { styles.welcome }> Iniciando Campo Minado! </Text>
          <Text style= { styles.instructions }> Tamanho grade : 
            {params.getRowsAmount()}  *  {params.getColumnsAmount()} 
          </Text>
          <Field/>
          <Field opened nearMines={6}/>
          <Field mined opened  />
      </View>
      
    

  );
}
};

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems: 'center',
    flex:1
    
    
    
  }
});


