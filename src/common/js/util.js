/*
 * fun:封装模板引擎render函数
 * params:{render获取art模板,data模板要渲染的数据,node元素节点}
 */
export function Render( render,data,node ){
	node = typeof node ==='string'?document.querySelectorAll(node):node;
	const html = render( data );
	//渲染到指定的node节点
	node.innerHTML = html;
}
/**
 * 去除空格
 * @param  {str}
 * @param  {type} 
 *       type:  1-所有空格  2-前后空格  3-前空格 4-后空格
 * @return {String}
 */
export function Util_Trim (str, type) {
    type = type || 1
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "");
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s*)/g, "");
        case 4:
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
}

/*过滤html代码(把<>转换)*/
export function Util_filterTag (str) {
    str = str.replace(/&/ig, "&amp;");
    str = str.replace(/</ig, "&lt;");
    str = str.replace(/>/ig, "&gt;");
    str = str.replace(" ", "&nbsp;");
    return str;
}

/*获取网址参数*/
export function Util_getURL(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = decodeURI(window.location.search).substr(1).match(reg);
    if(r!=null) return  r[2]; return null;
}

/*获取全部url参数,并转换成json对象*/
export function Util_getUrlAllParams (url) {
    var url = url ? url : window.location.href;
    var _pa = url.substring(url.indexOf('?') + 1),
        _arrS = _pa.split('&'),
        _rs = {};
    for (var i = 0, _len = _arrS.length; i < _len; i++) {
        var pos = _arrS[i].indexOf('=');
        if (pos == -1) {
            continue;
        }
        var name = _arrS[i].substring(0, pos),
            value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
        _rs[name] = value;
    }
    return _rs;
}
/*获取本地缓存*/
export function Util_getStorage(name) {
    return JSON.parse(localStorage.getItem(name))
}
/*设置本地缓存*/
export function Util_setStorage(name, val) {
    localStorage.setItem(name, JSON.stringify(val))
}

export function Util_setRem () {
	let html = document.documentElement;
	let wW = html.clientWidth;// 窗口宽度
	let rem = wW / 10;
	document.documentElement.style.fontSize = rem + 'px';
}
