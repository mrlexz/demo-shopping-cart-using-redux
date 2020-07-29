import {callAPI} from '../../services/callAPI';
import {notification} from 'antd';
export const deleteOder = (id) => {
    callAPI(null, `http://localhost:8000/order/${id}/`, 'DELETE',).then((resp) => {
        if(resp.status===204){
            notification["success"]({
                message: 'Delete success',
                description:
                  'Delete success!!!',
              });
        } else {
            notification["error"]({
                message: 'Delete failed',
                description:
                  'Delete faled!!!',
              });
        }

    });
    
}

export const deleteUser = (id) => {
    callAPI(null, `http://localhost:8000/user/${id}/`, 'DELETE',).then((resp) => {
        if(resp.status===204){
            notification["success"]({
                message: 'Delete success',
                description:
                  'Delete success!!!',
              });
        } else {
            notification["error"]({
                message: 'Delete failed',
                description:
                  'Delete faled!!!',
              });
        }

    });
    
}

export const deleteProduct = (id) => {
    callAPI(null, `http://localhost:8000/beers/${id}/`, 'DELETE',).then((resp) => {
        if(resp.status===204){
            notification["success"]({
                message: 'Delete success',
                description:
                  'Delete success!!!',
              });
        } else {
            notification["error"]({
                message: 'Delete failed',
                description:
                  'Delete faled!!!',
              });
        }

    });
    
}
