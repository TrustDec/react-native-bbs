import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Vibration,
} from 'react-native';
import Main,{ Test1 } from './Main';
/*Android平台需要在AndroidManifest.xml添加权限:
        <uses-permission android:name="android.permission.VIBRATE"/>
*/
 {/*经过测试结果说明，仅个人测试结果而得出的结论，非官方
          vibrate(pattern, repeat) :
                pattern:经过测试,数组内第一个参数为点击后延迟毫秒数，第二个是震动时间，以此类推...
                repeat:是否重复执行,boolean
          cancel():取消震动，官网传了个0,但是经过测试,即使改变数字也还是一样的效果，刚开始以为是延迟时间呢
          以上经过个人测试好几次后，结合官网(非中文网)API得出的结论,
    如果有问题请联系QQ：603049583,或者微信：WX811618532,谢谢各位
*/}
let pattern=[300,1000,300,4000];
let repeat=true;
class But extends Component {
  render() {
    return (
        <TouchableHighlight
          style={styles.butStyle}
          underlayColor="#188eee"
          onPress={this.props.onPress}
        >
          <Text style={{color:this.props.color}}>{this.props.text}</Text>
        </TouchableHighlight>
    );
  }
}
export default class ButClick extends Component {
  render() {
    console.log(Vibration);
    return (
      <View style={{backgroundColor:'#fff',flex:1,}}>
        <Text style={styles.titleTxt}> Vibation震动实例</Text>
        <But text="点击设备震动" color="green" onPress={()=>Vibration.vibrate(pattern,repeat)}/>
        <But text="点击取消震动" color="red" onPress={()=>Vibration.cancel()}/>
        <TouchableHighlight style={styles.butStyle}
          onPress={() =>this.props.navigator.push({component:Main})}>
          <View><Text style={styles.alertTitle}>push</Text></View>
        </TouchableHighlight>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  titleTxt: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
  },
   butStyle: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
  alertTitle:{
      textAlign:'center',
      color:'red',
    },
});