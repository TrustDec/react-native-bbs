
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PermissionsAndroid,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';
export default class PermissionDemo extends Component {
 constructor(props, context) {
    super(props, context);
    this.state = {
       permission: PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
       hasPermission: 'Not Checked',
      };
  }

  render() {
  	PermissionsAndroid.PERMISSIONS
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Permission Name:</Text>
        <TextInput
          autoFocus={false}
          autoCorrect={false}
          style={styles.singleLine}
          onChange={this._updateText}
          defaultValue={this.state.permission}
        />
        <TouchableWithoutFeedback onPress={this._checkPermission}>
          <View>
            <Text style={[styles.touchable, styles.text]}>Check Permission</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={styles.text}>Permission Status: {this.state.hasPermission}</Text>
        <TouchableWithoutFeedback onPress={()=>this._requestPermission()}>
          <View>
            <Text style={[styles.touchable, styles.text]}>Request Permission</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
  _updateText = (event: Object) => {
    this.setState({
      permission: event.nativeEvent.text,
    });
  }
  _checkPermission = async () => {
    let result = await PermissionsAndroid.checkPermission(this.state.permission);
    this.setState({
      hasPermission: (result ? '授权成功' : '授权失败') + ' for ' +
        this.state.permission,
    });
  }
  _requestPermission = async () => {
    try {
		    const granted = await PermissionsAndroid.requestPermission(
		      PermissionsAndroid.PERMISSIONS.CAMERA,
		      {
		        'title': '申请摄像头权限',
		        'message': '一个很牛逼的应用想借用你的摄像头,然后你就可以拍出酷炫的皂片啦。'
		      }
		    )
		    if (granted) {
		      console.log("现在你获得摄像头权限了")
		    } else {
		      console.log("用户并不屌你")
		      console.log( PermissionsAndroid.checkPermission(PermissionsAndroid.PERMISSIONS.CAMERA));
		    }
  	} catch (err) {
    	console.log(err)
  	}
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  singleLine: {
    fontSize: 16,
    padding: 4,
  },
  text: {
    margin: 10,
  },
  touchable: {
    color: '#007AFF',
  },
});