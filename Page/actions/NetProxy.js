/**
 * NetUitl 网络请求的实现
 * @author lidong
 *  *
 */
'use strict';
import React, { Component } from 'react';

class NetProxy extends Component {

  //post请求
  /**
  *url :请求地址
  *data:参数
  *callback:回调函数
  */

    static  postFrom(url, data, callback) {
        var fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                //表单
                'Content-Type': 'application/x-www-form-urlencoded',               
            },
            body: data
        };      
        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
              console.log(responseText);
                 callback(JSON.parse(responseText));
            }).done();
    }


  /**
   /*'Content-Type': 'application/x-www-form-urlencoded'
  *url :请求地址
  *data:参数(Json对象)
  *callback:回调函数
  */
static postJson (url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        //json形式
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

  fetch(url, fetchOptions)
    .then((response) => response.text())
    .then((responseText) => {
      callback(JSON.parse(responseText));
    }).done();
  }
  //get请求
  /**
  *url :请求地址
  *callback:回调函数
  */
	
  static  get(url, callback) {
      fetch(url, {
          method: 'get',
          dataType: 'json',
          headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
         }
      })
      .then((response) =>response.json())
      .then((responseJson) => {
          /* console.log("****************_4"+JSON.stringify(responseJson));*/
          callback(responseJson);
      })
      .catch((error) => {        
        });
   }



}

module.exports = NetProxy;