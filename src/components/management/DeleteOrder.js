import React from 'react';
import {Modal} from 'antd';
const DeleteOrderForm = (props) => {
    const { visible, onCancel, id} = props;
    const handleOkeOrder = (id) => {
        console.log(id);
    }
    return (
        <Modal
            title="Delete order"
            visible={visible}
            onCancel={onCancel}
            onOk={(id) =>{
                handleOkeOrder(id);
                onCancel();
            }}
            >
            <p class="deleteNotify">Are you sure you want to delete this order?</p>
        </Modal>
    );
};

export default DeleteOrderForm;