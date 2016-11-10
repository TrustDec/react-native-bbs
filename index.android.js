/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Main,{ Test1 } from './Page/Main';
import App from './Page/BackAndroid';
import ButClick from './Page/Vibration';
import ToastAnd from './Page/ToastAndroid';
import ActivityIndicatorDome from './Page/ActivityIndicator';
import DrawerLayoutAd from './Page/DrawerLayoutAndroid';
import HttpCache from './Page/HttpCache';
import LView from './Page/ListView';
/*import LayoutAnimationDemo from './Page/LayoutAnimation';*/
import ViewPagerAn from './Page/ViewPagerAndroidOfficial';
import ViewPagerAnDemo from './Page/ViewPagerAndroid';
class Study extends Component {
  render() {
    return (
      <View > 
         <Main />   
            <Test1 style={{color:'red'}}/>        
      </View>
    );
  }
}

AppRegistry.registerComponent('Study', () => ViewPagerAnDemo);
