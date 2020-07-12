import axios from 'axios';

export const callAPI = async (data,url, method = 'GET') => {
    const result = await axios({
        method: method,
        url: url,
        data: data,
        // headers: {
        //   'Access-Control-Allow-Origin' : '*',
        //   'Content-Type':  'application/json',
        // }
      });
    return result;
}