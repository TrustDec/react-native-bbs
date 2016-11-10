import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  ToastAndroid,
  TouchableHighlight,
} from 'react-native';
import ButClick from './Vibration';
{/*经过测试结果与官方API总结出的结论，有问题请及时联系，以便更正
	新增showWithGravity方法，可以指定消息框出现的位置
         show(message, duration):  
         showWithGravity(message, duration, gravity):
                message:弹出的信息
                duration:持续时间，属性有：SHORT|LONG
                gravity：位置，属性有：TOP|CENTER|BOTTOM
   
    如果有问题请联系QQ：603049583,或者微信：WX811618532,谢谢各位
*/}
export class ToastAndShow extends Component{
	
	render(){
		return(
			<TouchableHighlight	style={styles.butStyle}
				onPress={() =>ToastAndroid.show(this.props.message,this.props.duration)}>
				<View><Text style={styles.alertTitle}>{this.props.message}</Text></View>
			</TouchableHighlight>
		);
	}
}
class ToastAndShowWithGravity extends Component{
	render(){
		return(
			<TouchableHighlight	style={styles.butStyle}
				onPress={() =>ToastAndroid.showWithGravity(this.props.message,this.props.duration,this.props.gravity)}>
				<View><Text style={styles.alertTitle}>{this.props.message}</Text></View>
			</TouchableHighlight>
		);
	}
}
export default class ToastAnd extends Component {
	render(){
		return(
		<View style={{flex:1,backgroundColor:'#ddd'}}>
			<View style={{backgroundColor:'#fff',padding:5}}>
				<Text style={styles.titleTxt}>ToastAndroid信息框</Text>
			</View>
			<ToastAndShow message="显示时间短点，三四秒的样子" duration={ToastAndroid.SHORT}/>
			<ToastAndShow message="显示时间长点，五六秒的样子" duration={ToastAndroid.LONG}/>
			<ToastAndShowWithGravity message="在顶部显示并且显示短点" duration={ToastAndroid.SHORT} gravity={ToastAndroid.TOP}/>
			<ToastAndShowWithGravity message="在中间显示并且显示短点" duration={ToastAndroid.SHORT} gravity={ToastAndroid.CENTER}/>
			<ToastAndShowWithGravity message="在底部显示并且显示短点" duration={ToastAndroid.SHORT} gravity={ToastAndroid.BOTTOM}/>
			<TouchableHighlight	style={styles.butStyle}
				onPress={() =>this.props.navigator.push({component:ButClick})}>
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
