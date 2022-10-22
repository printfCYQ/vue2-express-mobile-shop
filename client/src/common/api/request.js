import axios from "axios";

const baseUrl = "http://localhost:3010";
let request = axios.create({
  baseURL: baseUrl,
  timeout: 10000, //设置超时时间
});
//请求拦截
request.interceptors.request.use(
  function (config) {
    // console.log("请求之前的配置项：", config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//响应拦截器
request.interceptors.response.use(
  function (response) {
    // console.log("响应拦截器响应的数据,", response);
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);
export default request; //把request暴露出去
