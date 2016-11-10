import React, { Component } from 'react';
import { 
	AppRegistry,
	View, 
	TextInput, 
	TouchableHighlight,
	Text, 
	StyleSheet,
	AsyncStorage
} from 'react-native';

class Test extends Component {
  render() {
    return (
      <TextInput
        {...this.props}
        editable = {true}
        maxLength = {40}
        underlineColorAndroid="transparent"
      />
    );
  }
}

export class Test1 extends Component{
	render(){
		return(
			<TouchableHighlight
				{...this.props}				
				style={{height:20,backgroundColor:'#188eee'}}
			>
				<Text {...this.props}>登录</Text>
			</TouchableHighlight>
		);
	}
}
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '#ddd',
    };
  }

getData(){
      AsyncStorage.getItem("Data",(error,result)=>{
	        if (!error) {
		        try {
		            var Data=JSON.parse(result)
		            alert(Data.name);
		          }catch(e){alert(error);}
	        }else {
	          alert(error);
	        }
      });  
}
clearData(){
	 AsyncStorage.removeItem("Data",(error)=>{
	 	if(!error){
	 		alert("OK");
	 	}else{
	 		alert(error);
	 	}
	 });
}
  render() {
    return (
    	<View style={{flex:1,backgroundColor:'#fff'}}>
		     <View style={{
		       backgroundColor: this.state.name,
		       borderBottomColor: '#000000',
		       borderBottomWidth: 1 }}
		     >
		       <Test
		         multiline = {false}
		         numberOfLines = {1}
		         onChangeText={(name) => this.setState({name})}
		         value={this.state.name}
		       />
		     </View>
		    <TouchableHighlight	style={styles.butStyle}
				onPress={() =>this.getData()}>
				<View><Text style={styles.alertTitle}>获取数据</Text></View>
			</TouchableHighlight>
			<TouchableHighlight	style={styles.butStyle}
				onPress={() =>this.clearData()}>
				<View><Text style={styles.alertTitle}>清除数据</Text></View>
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

