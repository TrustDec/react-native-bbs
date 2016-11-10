import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  DrawerLayoutAndroid,
  TextInput,
} from 'react-native';
/*
	关于官方文档：DrawerLayoutAndroid解释
	封装了平台DrawerLayout（仅限安卓平台）的React组件。
	抽屉（通常用于导航切换）是通过renderNavigationView方法渲染的，并且DrawerLayoutAndroid的直接子视图会成为主视图（用于放置你的内容）。
	导航视图一开始在屏幕上并不可见，不过可以从drawerPosition指定的窗口侧面拖拽出来，并且抽屉的宽度可以使用drawerWidth属性来指定。
*/
export default class DrawerLayoutAd extends Component{	
	//无论抽屉处于那种状态，都仍然可以调用openDrawer/closeDrawer这两个方法打开和关闭。
	openDrawer(){		
		this.refs.drawerLayout.openDrawer()
	}
	closeDrawer(){
		this.refs.drawerLayout.closeDrawer()
	}
	_DrawerStateChanged(_state){	
		console.log(_state);	
		if (_state=='Dragging') {
			console.log("拖拽中")			
		}
	}
	render(){
		let navigationView = (
			<View style={{flex:1,/*backgroundColor:'#fff'*/}}>
			{/*这里如果background会把drawerBackgroundColor覆盖，不少人在这里遇坑，以为drawerBackgroundColor不起作用*/}
			{/*http://stackoverflow.com/questions/38279531/react-native-drawerlayoutandroid-background-colour-not-working*/}
				<Text style={{margin:10,fontSize:24,color:'#188eee',}}>我是侧边栏/抽屉</Text>
				<TextInput style={{width:300,height:40,backgroundColor:'#fff'}}/>
				<TouchableHighlight
				onPress={()=>this.closeDrawer()}
				style={{padding:10,backgroundColor:'#e6e6e6',marginTop:20}}
				>
					<Text style={{textAlign:'center',}}>closeDrawer:关闭抽屉</Text>
				</TouchableHighlight>
			</View>
		);
		return(
			<DrawerLayoutAndroid
			  ref={'drawerLayout'}
			  drawerBackgroundColor="rgba(188,0,202,0.5)" //指定抽屉的背景颜色。默认值为白色。如果要设置抽屉的不透明度，请使用rgba。
		      drawerWidth={230} 	//指定抽屉的宽度，也就是从屏幕边缘拖进的视图的宽度。
		      drawerPosition={DrawerLayoutAndroid.positions.Left} 	//指定抽屉可以从屏幕的哪一边滑入。Right|Left		     
		      renderNavigationView={() => navigationView}  			//用于渲染一个可以从屏幕一边拖入的导航视图。
		      onDrawerOpen={()=>{console.log('打开了')}} 			//每当导航视图（抽屉）被打开之后调用此回调函数。
		      onDrawerClose={()=>{console.log('关闭了')}} 			//每当导航视图（抽屉）被关闭之后调用此回调函数。
		      onDrawerSlide={()=>console.log("正在交互......")}  	//每当导航视图（抽屉）产生交互的时候调用此回调函数。
		      onDrawerStateChanged={(state)=>this._DrawerStateChanged(state)} //每当抽屉的状态变化时调用此回调函数。
		      //idle：空闲状态，即没有发生任何交互；
		      //dragging：正在拖动状态，用户正在进行交互；
		      //settling：依靠中状态，用户刚刚结束交互
		      drawerLockMode='locked-open' 		//设置抽屉的锁定模式。状态见头部介绍
				//（1）unlocked：不锁定，可以响应打开和关闭操作，默认值；
				//（2）locked-losed：抽屉保持关闭，不能用手势打开
				//（3）locked-open：抽屉保持打开，不能用手势关闭			
		      keyboardDismissMode="on-drag"				//设置拖动过程中是否隐藏软键盘，可选值有none(不隐藏，默认值)和on-drag（拖动时隐藏）
		      statusBarBackgroundColor='red'			
		      //使抽屉占满整个屏幕，并设置状态栏颜色(支持API21+/安卓系统5.0以上)
		      >
		      <View style={{flex: 1, alignItems: 'center'}}>
		        <Text style={{fontSize: 18, }}>DrawerLayoutAndroid组件实例</Text>
		        <Text style={{ fontSize: 18,}}>日期：2016.10.26 Time:01:14</Text>
				<TouchableHighlight
				onPress={()=>this.openDrawer()}
				style={{padding:10,backgroundColor:'#e6e6e6'}}
				>
					<Text style={{textAlign:'center',}}>openDrawer:打开抽屉</Text>
				</TouchableHighlight>				
				<Text style={{marginTop:20}}>测试keyboardDismissMode的输入框</Text>
				<TextInput style={{width:300,height:40,backgroundColor:'#fff',}}/>
		      	<Text style={{color:'#188eee',fontSize:20,textAlign:'center',marginTop:30}}>公众号请搜索：SmallRui</Text>
		      </View>
		    </DrawerLayoutAndroid>
		);
	}
}