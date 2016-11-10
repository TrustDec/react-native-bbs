import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
/*圆形的loading提示符号*/
{/*经过测试结果与官方API总结出的结论，有问题请及时联系，以便更正
	0.35版本未添加新的属性和方法
		animating ：是否要显示指示器，默认为true，表示显示
		color：滚轮的前景颜色（默认为灰色）。
		(ios)hidesWhenStopped ：在没有动画的时候，是否要隐藏指示器（默认为true）。
		size:small | large :指示器的大小。small的高度为20，large为36。
	
		疑问：当在同一个文件使用多个ActivityIndicator，color的颜色以最后一个为准，
		我的测试环境为安卓4.3，不知道是不是这些原因
   
    如果有问题请联系QQ：603049583,或者微信：WX811618532,谢谢各位
*/}
export default class ActivityIndicatorDome extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      animating: true,
	    };
	}
	render(){
		    return(
		    	<View>
		    		<View>
			    		<ActivityIndicator
					        animating={this.state.animating}
					        color="green"
					        style={[styles.centering, {height: 80}]}
					        size="small"
					    />
				    </View>
				    <View>
					    <ActivityIndicator
					        animating={this.state.animating}
					        color="red"
					        style={[styles.centering, {height: 80,backgroundColor:'#f0f0f0'}]}
					        size="large"
					    />
				    </View>
				    <View>
					    <ActivityIndicator
					        animating={this.state.animating}
					        color="green"
					        style={[styles.centering, {height: 80}]}
					        size={80}
					    />
				    </View>
		    	</View>
		    );
	}	
}
const styles = StyleSheet.create({
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
});