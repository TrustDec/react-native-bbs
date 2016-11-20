import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView,
  Button,
} from 'react-native';

export default class RN37 extends Component {
  webview = null;
  //执行JS代码，会被转为字符串，使用injectedJavaScript方法用eval执行字符串方法
  postMessage = () => {
    console.log(this.webview);
    if (this.webview) {
      this.webview.postMessage('window.postMessage("Title："+document.title);');
    }
  }

  //接收WebView JS事件消息
  onMessage = e => {
    console.log(e);
    alert(e.nativeEvent.data);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button enabled onPress={this.postMessage} title="Send Message to Web View" />
        <WebView
          ref={webview => { this.webview = webview; } }
          style={{
            flex: 1,
            width:360,
          }}
          injectedJavaScript="document.addEventListener('message', function(e) {eval(e.data);});"
          source={{uri:"https://www.baidu.com"}}
          onMessage={this.onMessage}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});