import Axios from 'axios';
import { config } from './config'
//全局配置请求url
Axios.defaults.baseURL = config.HEAD;
//Axios.defaults.baseURL = 'https://localhost:8080';//这里统一配置请求头

export default Axios