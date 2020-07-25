import React from 'react';
import {Modal} from 'antd';
const DeleteUserForm = (props) => {
    const { visible, onCancel, id} = props;
    const handleOkeUser = (id) => {
        console.log(id);
    }
    return (
        <Modal
            title="Delete user"
            visible={visible}
            onCancel={onCancel}
            onOk={(id) => {
                handleOkeUser(id);
                onCancel();
            }}
            >
            <p class="deleteNotify">Are you sure you want to delete this user?</p>
        </Modal>
    );
};

export default DeleteUserForm;