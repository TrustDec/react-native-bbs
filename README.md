# React Native V0.37
>版本号：0.37<br>
>开始日期：2016.10.10<br>
>每天一个组件/API,附带Demo(Code区注释不能少)<br>
>💗💗💗💗

####微信公众号：专注前端开发

![](https://raw.githubusercontent.com/TrustTheBoy/imagesGithub/master/WeChat/publick/WeChatCode.jpg)

##React Native BBS目录结构区/Dome标记区
>一级项目等级顺序：见习、正式、知名、职业、著名、元老

	--ReactNativeNoviciate		主要啃手册为主
	--
## 项目过程中遇到的 RN 初级问题记录区

#### React Native平台适配:
	1.Android中图片放在android\app\src\main\res下(文件夹名:drawable-xxhdpi),并且图片名都是小写
	2.Ios中进入ios\MobileCampus\下,删除Images.xcassets文件夹下的东西,复制你的图片
#### 使用Navigator跳转下一页时的切换特效:
切换时body需要设置backgroundColor/flex,没有backgroundColor/flex时切换时可以看见切换前的页面渐隐效果,体验不好

	例如:View style={{flex:1,backgroundColor:'#fff'}}
	
####<font style="">react native USB真机调试报错</font>
#####<font style="color:red">error:</font>
>FAILURE: Build failed with an exception.<br>
What went wrong:<br>
 Execution failed for task ' : app:installDebug'.<br>
 com.android.builder.testing.api.DeviceException: com.android.ddmlib.InstallException: Unable to upload some APKs

解决方法: [USB调试真机调试>>](http://csbun.github.io/blog/2015/12/starting-react-native-with-android/)

####解决安卓多个真机调试报错问题:
	Debug模式多台真机调试,没换一次手机,都需要给手机重新下载配置文件

####React Native Reload不更新
	解决方案:
	例如:E:\Study\node_modules\react-native\packager\react-packager\src\node-haste\FileWatcher\index.js
<font style="color:green;font-weight：bold;font-size:18;">找到并更改为:</font>
<pre><div style="display:inline-block;marginBottom:50px;height:30px;">const MAX_WAIT_TIME = 360000;</div>
_createWatcher(rootConfig) {
    const watcher = new WatcherClass(rootConfig.dir, {
      glob: rootConfig.globs,
      dot: false,
    });
    return new Promise((resolve, reject) => {
      const rejectTimeout = setTimeout(
        () => reject(new Error([
            'Watcher took too long to load',
            'Try running `watchman version` from your terminal',
            'https://facebook.github.io/watchman/docs/troubleshooting.html',
          ].join('\n'))),
        MAX_WAIT_TIME
      );
      watcher.once('ready', () => {
        clearTimeout(rejectTimeout);
        resolve(watcher);
      });
    });
  }
</pre> 
####listView组件更新机制:[Github](https://github.com/changfuguo/react-native/blob/master/listview.md);
####ListView不滑动问题
	解决方法：listview自身和它的父容器都要加flex：1,哪层断了都不行

相关解决方法:[stackoverflow](http://stackoverflow.com/questions/32874559/listview-fails-to-scroll);
