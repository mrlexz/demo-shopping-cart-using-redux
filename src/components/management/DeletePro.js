import React from 'react';
import {Modal} from 'antd';

const DeleteProductForm = (props) => {
    const { visible, onCancel} = props;
    const handleOkeProduct = (id) => {
        console.log(id);
    }
    return (
        <Modal
            title="Delete product"
            visible={visible}
            onCancel={onCancel}
            onOk={(id) => {
                handleOkeProduct(id);
                onCancel();
            }}
            >
            <p class="deleteNotify">Are you sure you want to delete this product?</p>
        </Modal>
    );
};

export default DeleteProductForm;