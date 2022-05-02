import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class Transaction extends Component{
render(){
    return(
        <View styles={styles.container}>
            <Text styles={styles.text}>Pantalla de transacción</Text>
        </View>
    )
}

}

const styles = StyleSheet.create({
 container:{
     flex: 1,
     justifyContent:"center",
     alignItems:"center",
     backgroundColor: "#5653D4"
 },

 text:{
     color: "#ffff",
     fontSize: 30
 }


})