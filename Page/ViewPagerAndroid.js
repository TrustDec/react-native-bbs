import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  TouchableHighlight,
  ViewPagerAndroid,
} from 'react-native'; 
import IMAGE_URIS from './publick.json';
const Window = Dimensions.get('window');
/* 
  此章节的Demo大概是我最用心的一篇,以React Native内部版本：0.37源代码为准,
  如果你认真看完,会发现没有想象中那么复杂,反而简单的让你不知所云~
  微信公众号：SmallRui
  如果有问题请联系
        QQ：603049583,
        微信：WX811618532,
  谢谢各位
*/
const statArr = ['空闲,表示当前没有交互','拖动中,表示当前页面正在被拖动','处理中,表示当前页面发生过交互,正在结束开头或收尾的动画'];
const textArr = ['ViewPagerAndroid Demo','测试软键盘:keyboardDismissMode','stretch','transparent','#6a6a6a'];
const statArrValue = ["状态：","滑动次数：","idle:","dragging:","settling:","有滑动效果:","上一页","下一页","没有滑动效果:","当前可见页面下标:","offset:","被选中页面下标:","微信公众号：SmallRui"];
export default class ViewPagerAnDemo extends Component {
	constructor(props) {
	  super(props);	
	  this.state = {
      position:0,
      offset:"0",
      defaultPage:0,
      onScrollState:"idle",
      onSelectedNum:0,
      coordinate:"0",
	  };
	}
  _onPageScroll(e){   
    this.setState({
      position:e.nativeEvent.position,     //position：从左数起第一个当前可见的页面的下标。
      offset:e.nativeEvent.offset,        //一个在[0,1)（大于等于0，小于1）之间的范围，代表当前页面切换的状态。      
		    //值x表示现在"position"所表示的页有(1 - x)的部分可见，而下一页有x的部分可见。
    });
  }
  _onPageScrollStateChanged(state){
  	this.setState({
  		onScrollState:state,
  	});
  }
  _onPageSelected(e){  
  	this.setState({
  		onSelectedNum:++this.state.onSelectedNum,
      coordinate:e.nativeEvent.position,
  	});
  }
  go(defaultPage){
    this.viewPager.setPageWithoutAnimation(defaultPage);
  }
  goAnima(defaultPage){
    this.viewPager.setPage(defaultPage);
  }
  render() {
    return (
      <View>
        <View style={[styles.header,styles.goAnimaRed,styles.fdR,styles.xyCen]}>
			     <Text style={styles.headTitle}>
            	{textArr[0]}
        	 </Text>
        </View>
       <ViewPagerAndroid style={styles.pageStyle} 
        	initialPage={this.state.defaultPage} 			                                 //加载到页面显示第几个View，下标开始为0；可以用setPage 函数来翻页，并且用onPageSelected来监听页的变化。
    			keyboardDismissMode='on-drag'	                                            //拖拽视图会让键盘消失。默认none:不会消失;我的测试机为安卓4.4.4，键盘消失会有延迟，不知道其他手机如何，后面我再试试
    			onPageScroll={(e)=>this._onPageScroll(e)}                                 //当在页间切换时执行。回调参数event.nativeEvent对象见调用函数
    			onPageScrollStateChanged={
            (state)=>this._onPageScrollStateChanged(state)
          }                                                                         //页面滑动状态变化时调用此回调函数。页面滑动状态有三种						
    			onPageSelected={(e)=>this._onPageSelected(e)}                              //这个回调会在页面切换完成后调用。
    			scrollEnabled={true}                                                         //设为false时可禁止滚动。默认值为true
    			pageMargin={50} 		                                                     //每个Page中间相隔距离
    			ref={viewPager => { this.viewPager = viewPager}}
        >
            <View>
                <Image style={[styles.images,styles.xyCen]} source={{uri: IMAGE_URIS.images[2]}} resizeMode={textArr[2]}>
  	                   <TextInput 	      				
      		      				multiline={false} 
      		      				placeholder={textArr[1]}                       
      		      				underlineColorAndroid={textArr[3]}
      		      				placeholderTextCoblor={textArr[4]}      				
      		      				style={styles.textInput}      				
      			      		/>
  			      	</Image>
              </View>
             <View>
                  <Image style={styles.images} source={{uri: IMAGE_URIS.images[1]}} resizeMode={textArr[2]}/>
             </View>
        </ViewPagerAndroid>
        <View style={[styles.header1,styles.xyCen]}>
        	<Text style={styles.redTitle}>{statArrValue[0]+this.state.onScrollState}</Text>   
        	<Text style={styles.greenTitle}>{statArrValue[1]+this.state.onSelectedNum}</Text>      
        </View>
        <View>
        	<Text style={styles.textStyle}>{statArrValue[2]+statArr[0]}</Text> 
        	<Text style={styles.textStyle}>{statArrValue[3]+statArr[1]}</Text> 
        	<Text style={styles.textStyle}>{statArrValue[4]+statArr[2]}</Text> 
        </View>
        <View style={[styles.fdR,styles.xyCen]}>
          <View style={[styles.goTitle,styles.xyCen]}>
              <Text>{statArrValue[5]}</Text>
          </View>
          <TouchableHighlight style={[styles.goTitle,styles.goAnimaGreen,styles.xyCen]} onPress={()=>this.goAnima(0)}>
              <Text>{statArrValue[6]}</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.goTitle,styles.goAnimaRed,styles.xyCen]} onPress={()=>this.goAnima(1)}>
              <Text>{statArrValue[7]}</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.fdR,styles.xyCen]}>
          <View style={[styles.goTitle,styles.xyCen]}>
              <Text>{statArrValue[8]}</Text>
          </View>
          <TouchableHighlight style={[styles.goTitle,styles.goAnimaRed,styles.xyCen]} onPress={()=>this.go(0)}>
              <Text>{statArrValue[6]}</Text>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.goTitle,styles.goAnimaGreen,styles.xyCen]} onPress={()=>this.go(1)}>
              <Text>{statArrValue[7]}</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.xyCen]}>
          <Text style={styles.redTitle}>{statArrValue[9]+""+this.state.position}</Text>   
          <Text style={styles.greenTitle}>{statArrValue[10]+""+this.state.offset}</Text>
           <Text style={styles.redTitle}>{statArrValue[11]+""+this.state.coordinate}</Text>
           <Text style={styles.weChat}>{statArrValue[12]}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  flex:{
   flex:1
  },
  header:{
    height:40,
  },
  header1:{
    height:60,
  },
  headTitle:{
    color:'#fff',
    fontSize:16,
  },
  images:{
    width:Window.width,
    height:230,
  },
  textInput:{
    width:Window.width-44,
    height:40,
    fontSize:17,
    color:'#000',
    backgroundColor:'rgba(255,255,255,0.8)',
    position:'relative',
    zIndex:1
  },
  redTitle:{
    fontSize:22,
    color:'red',
  },
  greenTitle:{
    fontSize:22,
    color:'green'
  },
  fdR:{
    flexDirection: 'row',
  },
  xyCen:{
    justifyContent: 'center',
    alignItems:'center'
  },
  goTitle:{
    width:100,
    height:40
  },
  goAnimaGreen:{
    backgroundColor:'green'
  },
  goAnimaRed:{
    backgroundColor:'#188eee'
  },
	textStyle:{
		margin:5,
	},
   pageStyle: {
    alignItems: 'center',
    padding: 10,
    height:200,
  },
  weChat:{
     fontSize:25,
    color:'blue',
    fontWeight:'bold',   
  }
});