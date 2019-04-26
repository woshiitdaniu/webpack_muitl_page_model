import './index.scss'
import '@base/head/navbar.js'
import { mGet }from'@commonJs/ajax.js'
import { Render,Util_setRem }from'@commonJs/util.js'


let $=require('jquery')

$(function(){
	//RENDER 常量：render模板
	const RENDER = {
		index:require('@tpl/index/index.art')
	};	
	/*
	 * fun:用于初始title 和  nav
	 */
	function initTitleAndNav(){
		$('.logo_bottom_list_items').eq(0).addClass('active').siblings().removeClass('active');
		$('title').html('index')
	}
	initTitleAndNav();
	Util_setRem()
	window.onresize = function(){
		Util_setRem()
	}
	
	
//测试template模板
const data = {
    title: '这是art-template页面',
    msg1: '信息一',
    msg2: '信息二'
};


//Render(RENDER.index,data,document.getElementById('template_test'))

})



