import axios from 'axios';

export const callAPI = async (data,url, method = 'GET') => {
  let result;
  switch(method) {
    case 'GET':
      await axios({
        method: method,
        url: url,
      }).then(resp => {
        result = resp.data;
      }).catch( err => {
        console.log(err);
      });
    break;
    case 'POST':
      await axios({
        method: method,
        url: url,
        data: data,
      });
    break;
    default:
      break;
  }
  return result;
}