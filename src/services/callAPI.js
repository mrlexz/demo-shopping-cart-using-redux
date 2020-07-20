import axios from 'axios';

export const callAPI = (data,url, method = 'GET') => {
  return axios({
        method: method,
        url: url,
        data: data,
      });
};