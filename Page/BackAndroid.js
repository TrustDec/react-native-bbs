import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  BackAndroid,
  Navigator,
  View,
  ToastAndroid
} from 'react-native';

import AsyncS from './AsyncStorage';

export default class App extends Component {
  componentWillMount() {
    if (Platform.OS === 'android') {
      BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
  }

  onBackAndroid = () => {
    const nav = this.navigator;
    console.log(nav);
    const routers = nav.getCurrentRoutes();
    console.table(nav.getCurrentRoutes());
    if (routers.length > 2) {
      nav.pop();     
      return true;
    }
    if (routers.length==2) {
      nav.pop();
    ToastAndroid.show("再按一次将退出App",ToastAndroid.SHORT);
   return true;
   }else if(routers.length<1){
     return false;
   }
  };
  initialRoute = {  	
    component: AsyncS,    
  };
  configureScene() {
    if (Platform.OS === 'ios') {
      return Navigator.SceneConfigs.PushFromRight;
    }
    return Navigator.SceneConfigs.PushFromRight;
  }
  renderScene(route, navigator) {
    const Component = route.component;

    return (
      <Component {...route.params} navigator={navigator} />
    );
  }
  render() {
    return (
      <View style={{flex:1,}}>
        <Navigator
          ref={nav => { this.navigator = nav; }}
          initialRoute={this.initialRoute}
          configureScene={() => this.configureScene()}
          renderScene={(route, navigator) => this.renderScene(route, navigator)}
        /> 
      </View>
    );
  }
}
