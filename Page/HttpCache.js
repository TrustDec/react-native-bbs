import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  DrawerLayoutAndroid,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as httpCache from 'react-native-http-cache';
export default class HttpCache extends Component{	
	 constructor(props){
    super(props);
    this.state = {

    };
  }
  componentWillMount(){
    this.getData();
  }
  async getData(){
    try {
      this.setState({
        'http': await httpCache.getHttpCacheSize(),
        'image': await httpCache.getImageCacheSize(),
        'all': await httpCache.getSize(),
      });
    } catch(err){
      alert('错误', err.message);
    }
  }
  async clearCache(){
    try {
      await httpCache.clear();
      alert('清除缓存成功');
      await this.getData();
    } catch(err){
      alert('错误', err.message);
    }
  }
  showPage(){
    this.props.navigator.push({
      component: MyPage
    })
  }
  render() {
    const { session } = this.props;
    return (
      <View style={{flex:1}}>
        <View>
          <Text>Http缓存大小：{this.state.http}</Text>
          <Text>图片缓存大小：{this.state.image}</Text>
          <Text>总缓存大小：{this.state.all}</Text>
        </View>
        <TouchableOpacity onPress={()=>this.getData()}>
          <Text>刷新缓存大小</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.clearCache()}>
          <Text>清除缓存</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>this.showPage()}>
          <Text>查看带有图片的页面</Text>
        </TouchableOpacity>
      </View>
    );
  }
}