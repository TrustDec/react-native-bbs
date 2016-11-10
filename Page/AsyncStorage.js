import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  TouchableHighlight,
} from 'react-native';

import ToastAnd from './ToastAndroid';
const Data = '{"rows":"1","name":"jgr"}';
export default class AsyncS extends Component {
  cunData(key,vaule,callback){
      AsyncStorage.setItem(key,vaule,(error)=>{
        if (!error) {         
         alert(vaule);
        }
      });
  }
  render(){
    return(
      <View>
        <TouchableHighlight style={styles.butStyle}
          onPress={()=>this.cunData("Data",Data)}>
          <View><Text style={styles.alertTitle}>存储</Text></View>
        </TouchableHighlight>
        <TouchableHighlight style={styles.butStyle}
          onPress={() =>this.props.navigator.push({component:ToastAnd})}>
          <View><Text style={styles.alertTitle}>push</Text></View>
        </TouchableHighlight>
      </View>
    );
  }
 }
 const styles = StyleSheet.create({
    alertTitle:{
      textAlign:'center',
      color:'red',
    },
    butStyle: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
     titleTxt: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10,
      },

})
