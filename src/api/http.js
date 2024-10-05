import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.example.com', // 替换为你的 API 基础 URL
  timeout: 10000, // 请求超时时间
});

// 添加请求拦截器
instance.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    // 例如，添加 Authorization 头
    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
instance.interceptors.response.use(
  response => {
    // 对响应数据做些什么
    return response.data; // 只返回数据部分
  },
  error => {
    // 对响应错误做些什么
    return Promise.reject(error);
  }
);

export default instance;
