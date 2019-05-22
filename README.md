# webpack_muitl_page_model
  由于原生js开发不具备模块化、组件化开发，导致很多冗余代码的出现以及无法正常支持es6等，对开发效率是个很大障碍
  为了能快速实现多入口、组件化、模块化开发，故开源了一套能开箱即用的简单脚手架
  
## 技术栈
> webpack+es6+template+scss

## 项目获取
```
  npm i
  npm run dev(运行)
  npm run build(打包)
```
## 项目使用
  1.如果需要添加页面 可在page目录中直接添加，打包后会自动生成同名文件的html
  2.页面中如果需要引进其他html文件的内容需要使用commom.js的模块引入方法 
  比如：```javascript <%=require('html-withimg-loader!../../base/meta/meta.html')%>```
  3.页面中的图片不能直接使用img的src引入 也需要使用require  ```javascript <img src=<%=require( "../../img/head/sec2.png")%> />```
  4.在正式开始项目的开发时请先确认好目录结构、公共样式、公共函数、公共组件
  
## 项目目录
[项目目录](https://github.com/woshiitdaniu/webpack_muitl_page_model)
