import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';

import NetProxy from './actions/NetProxy';

let addAppList="http://api.avatardata.cn/GuoNeiNews/Query?key=9c24d5d7eb96424f8ac93dd25f2ae1da&page=20&rows=50";
export default class LView extends Component {
	constructor(props) {
	  super(props);	
	   let ds =new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
	  this.state = {
	  	applist:ds.cloneWithRows({}),
	  };
	  this.appList();
	}
	// 查询库中所有app
    appList(){ 
      let _thisObj =this;  
      NetProxy.get(addAppList,function(retJson) {
      console.log(retJson);             
          _thisObj.onappListLoad(retJson);
      });
    }
    // 更新app列表数据
    onappListLoad(retJson){
       let ds =new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
      this.setState({
        applist: ds.cloneWithRows(retJson.result)
      });
    }
	content(rowData,sectionID,rowID,highlightRow){
		return(
		<View style={{padding:2,flexDirection:'row',}}>
			<View style={{width:90,marginTop:13,marginLeft:20,marginBottom:17,}}>
           	 <Image source={{uri:rowData.picUrl || 'http://s.cimg.163.com/cnews/2016/8/30/20160830190521bb332.jpg.119x83.jpg'}} style={{width:50,height:50,}} resizeMode={'contain'}/>            
         	 </View>
          <View style={{flex:1,marginTop:16,}}>
              <Text style={{color:'#333',fontSize:15,}}>{rowData.title}</Text>  
              <Text style={{marginTop:6,color:'#999',fontSize:12,}}>简介:{rowData.ctime}</Text>        
              <Text style={{marginTop:6,color:'#999',fontSize:12,}}>发布时间:{rowData.description}</Text>  
          </View>          
		</View>
		)
	}
	Header(){
		return(
			<View style={{height:30,backgroundColor:'green'}}>
				<Text>Header</Text>
			</View>
		);
	}
	Footer(){
		return(
			<View style={{height:30,backgroundColor:'red'}}>
				<Text>Footer</Text>
			</View>
		);
	}
	render(){
    	return (
			<View style={styles.Box}>
				<View style={{height:50,backgroundColor:'#188eee',justifyContent: 'center',}}>
					<Text style={{textAlign:'center'}}>ListView</Text>
				</View>
				<ListView
					dataSource={this.state.applist}
					renderRow={this.content.bind(this)}
					enableEmptySections={true}
					initialListSize={2}
					onEndReached={()=>console.log(111)}
					onEndReachedThreshold={1}
					pageSize={1}
					removeClippedSubviews={true}
					renderHeader={()=>this.Header()}
					renderFooter={()=>this.Footer()}
					showsVerticalScrollIndicator={false}
				/>
			</View>
    	);
    }
}

 const styles = StyleSheet.create({
 	Box:{
 		flex:1,
 		backgroundColor:'#f0f0f0'
 	}
 })