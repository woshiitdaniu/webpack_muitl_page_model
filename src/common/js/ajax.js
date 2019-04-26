import Axios from "./Axios";
import qs from 'qs';
import originJsonp from 'jsonp'
//注明：param为对象参数{}

export function mGet(url,param){
		param = param?param:""
		let params = qs.stringify(param);
		return new Promise((resolve,reject)=>{
			Axios.get(url,{param}).then((res)=>{
				resolve(res)
			})
			.catch((err)=>{
				reject(err)
			})
		})
	}
export function mPost(urls,param){
		return new Promise((resolve,reject)=>{
			Axios(
				{
			        method:"POST",
			        headers:{'Content-type':'application/json',},
			        dataType:"json",
			        url:urls,
			        params:param
				}
			).then((res)=>{
				resolve(res)
			})
			.catch((err)=>{
				reject(err)
			})
		})
}



export function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}
/*
 * 拼接url参数
 */
export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}