import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import config from './config';

const instance: AxiosInstance = axios.create({
  baseURL: config.host,
});

instance.interceptors.request.use(
  (config) => {
    /**
     * HTTP Authorization 요청 헤더에 jwt-token을 넣음
     * 서버측 미들웨어에서 이를 확인하고 검증한 후 해당 API에 요청
     */
    const token = window.localStorage.getItem('token');
    const userIpAddress = window.localStorage.getItem('userIpAddress');

    try {
      if (token) {
        config.headers.token = `${token}`;
        config.headers.userIpAddress = `${userIpAddress}`;
      }

      return config;
    } catch (err) {
      console.error('[_axios.interceptors.request] config : ' + err);
    }
    return config;
  },
  (error) => {
    // 요청 에러 직전 호출됩니다.
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    /**
     * http status가 200인 경우 응답 성공 직전 호출
     */

    const token = response.headers['token']; // 새로운 토큰을 응답 헤더에서 추출

    if (token) {
      window.localStorage.setItem('token', token); // 새로운 토큰을 로컬 스토리지에 저장
    }

    return response;
  },

  async (error) => {
    /**
     * http status가 200이 아닌 경우 응답 에러 직전 호출
     */

    return Promise.reject(error);
  }
);

async function api(request: AxiosRequestConfig) {
  const url = request.url;
  const params: any = {
    ...request,
    url,
  };

  const res = await instance({ ...params });
  return res.data;
}

export default instance;
