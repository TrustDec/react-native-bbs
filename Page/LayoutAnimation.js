import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  LayoutAnimation,
  TouchableHighlight,
  ToastAndroid,
  Platform,
  UIManager
} from 'react-native';
class CustomButton extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor="#a5a5a5"
        onPress={this.props.onPress}>
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    );
  }
}
 // 布局发生变化时,自动将视图运动到它们的新位置.首先调用LayoutAnimation.configureNext(),然后调用setState()
var CustomLayoutAnimation = {
    duration: 800,
    create: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
    },
    update: {
      type: LayoutAnimation.Types.spring,
      property: LayoutAnimation.Properties.scaleXY,
    },
    
  };
    const GreenSquare = () =>
      <View style={styles.greenSquare}>
        <Text>Green square</Text>
      </View>;

    const BlueSquare = () =>
      <View style={styles.blueSquare}>
        <Text>Blue square</Text>
      </View>;
export default class LayoutAnimationDemo extends Component {
    constructor(props) {
      super(props);
      this.state={
        views:[],
        num:0,
        toggled:false,
       }
      // Enable LayoutAnimation under Android
     if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true)
      }
    }
    componentWillUpdate() {
      console.log('componentWillUpdate...');
     // LayoutAnimation.easeInEaseOut();
      //或者可以使用如下的自定义的动画效果
      LayoutAnimation.configureNext(CustomLayoutAnimation);
    }
    _onPressAddView() { 
      this.setState({num:Number.parseInt(this.state.num)+1});
    }
    _onPressRemoveView() {
      this.setState({num:Number.parseInt(this.state.num)-1});
    }
    _renderAddedView(i) {
      return (
       <View key={i} style={styles.view}>
          <Text style={{color:'#fff'}}>{i}</Text>
        </View>
     );
    }
  _onPressToggle = () => {
    this.setState((state) => ({toggled: !state.toggled}));
  };
    render() {
       this.state.views.length=0;
       for(var i=0;i<this.state.num;i++){
          this.state.views.push(this._renderAddedView(i));
       }
     return (
      <View style={{marginTop:20,margin:10}}>
        <Text style={styles.welcome}>
            LayoutAnimation实例演示           
        </Text>
        <CustomButton text="添加View"  onPress={this._onPressAddView.bind(this)}/>
        <CustomButton text="删除View"  onPress={this._onPressRemoveView.bind(this)}/>
        <View style={styles.viewContainer}>
          {this.state.views}
        </View>
        <CustomButton text="移动"  onPress={this._onPressToggle.bind(this)}/>
        {
            this.state.toggled ?
            <GreenSquare /> :
            <BlueSquare />
        }
        <CustomButton text="update"  onPress={()=>this.setState({toggled:true})}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
   button: {
    margin:5,
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#cdcdcd',
  },
  viewContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  view: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greenSquare: {
    width: 150,
    height: 150,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueSquare: {
    width: 50,
    height: 50,
    marginTop:200,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
