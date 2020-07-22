import React from 'react';
import { Form, Input, Modal, Tabs } from 'antd';
import { render } from 'react-dom';

const { TabPane } = Tabs;
function callback(key) {
    console.log(key);
}

class Management extends React.Component {
    state = { 
        visibleCreate: false, 
        visibleEdit: false, 
        visibleDeletePro: false,
        visibleDeleteUser: false,
        visibleDeleteOrder: false,
     };
    showModalCreate = () => {
        this.setState({ visibleCreate: true });
    }
    handleCancelCreate = () => {
        this.setState({ visibleCreate: false });
    }

    showModalEdit = () => {
        this.setState({ visibleEdit: true });
    }
    handleCancelEdit = () => {
        this.setState({ visibleEdit: false });
    }

    showModalDeletePro = () => {
        this.setState({ visibleDeletePro: true });
    }
    handleCancelDeletePro = () => {
        this.setState({ visibleDeletePro: false });
    }

    showModalDeleteUser = () => {
        this.setState({ visibleDeleteUser: true });
    }
    handleCancelDeleteUser = () => {
        this.setState({ visibleDeleteUser: false });
    }

    showModalDeleteOrder = () => {
        this.setState({ visibleDeleteOrder: true });
    }
    handleCancelDeleteOrder = () => {
        this.setState({ visibleDeleteOrder: false });
    }
    render() {
        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Product Management" key="1">

                    <div className="productManage">
                        <h3 className="mb-4 billing-heading">Product Management</h3>
                        <table className="table">
                            <thead className="table-success">
                                <tr>
                                    <th>Id</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>011</td>
                                    <td>Image</td>
                                    <td>Strongbow</td>
                                    <td>2.00</td>
                                    <td>
                                        <button type="button" className="btn btn-warning edit" onClick={this.showModalEdit}>Edit</button>
                                        <EditForm
                                            visible={this.state.visibleEdit}
                                            onCancel={this.handleCancelEdit}
                                        />
                                        <button type="button" className="btn btn-danger delete" onClick={this.showModalDeletePro}>Delete</button>
                                        <DeleteProductForm
                                            visible={this.state.visibleDeletePro}
                                            onCancel={this.handleCancelDeletePro}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button type="button" className="btn btn-primary py-3 px-4 create" onClick={this.showModalCreate}>Create</button>
                        <CreateForm
                            visible={this.state.visibleCreate}
                            onCancel={this.handleCancelCreate}
                        />
                    </div>

                </TabPane>
                <TabPane tab="User Management" key="2">
                    <div className="productManage">
                        <h3 className="mb-4 billing-heading">User Management</h3>
                        <table className="table">
                            <thead className="table-success">
                                <tr>
                                    <th>Id</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>011</td>
                                    <td>Image</td>
                                    <td>Strongbow</td>
                                    <td>2.00</td>
                                    <td>
                                        <button type="button" className="btn btn-danger delete" onClick={this.showModalDeleteUser}>Delete</button>
                                        <DeleteUserForm
                                            visible={this.state.visibleDeleteUser}
                                            onCancel={this.handleCancelDeleteUser}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPane>
                <TabPane tab="Order Management" key="3">
                    <div className="productManage">
                        <h3 className="mb-4 billing-heading">Order Management</h3>
                        <table className="table">
                            <thead className="table-success">
                                <tr>
                                    <th>Id</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>011</td>
                                    <td>Image</td>
                                    <td>Strongbow</td>
                                    <td>2.00</td>
                                    <td>
                                        <button type="button" className="btn btn-danger delete" onClick={this.showModalDeleteOrder}>Delete</button>
                                        <DeleteOrderForm
                                            visible={this.state.visibleDeleteOrder}
                                            onCancel={this.handleCancelDeleteOrder}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPane>
            </Tabs>


        )
    }
}
// modal create form Product
const CreateForm = (props) => {
    const { visible, onCancel, onCreate } = props;
    return (
        <Modal
            title="Create product"
            visible={visible}
            onCancel={onCancel}>
            <Form
                layout="vertical"
                name="basic"
                className="form-custom"
            >
                <Form.Item
                    label="Id"
                    name="id"
                    rules={[{ required: true, message: 'Please input your id!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your price!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="category"
                    rules={[{ required: true, message: 'Please input your category!' }]}>
                    <Input />
                </Form.Item>

            </Form>
        </Modal>
    );
};

// modal edit form Product
const EditForm = (props) => {
    const { visible, onCancel} = props;
    return (
        <Modal
            title="Edit product"
            visible={visible}
            onCancel={onCancel}>
            <Form
                layout="vertical"
                name="basic"
                className="form-custom"
            >
                <Form.Item
                    label="Id"
                    name="id"
                    rules={[{ required: true, message: 'Please input your id!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your name!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    rules={[{ required: true, message: 'Please input your price!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="category"
                    rules={[{ required: true, message: 'Please input your category!' }]}>
                    <Input />
                </Form.Item>

            </Form>
        </Modal>
    );
};

// modal delete form Product
const DeleteProductForm = (props) => {
    const { visible, onCancel} = props;
    return (
        <Modal
            title="Delete product"
            visible={visible}
            onCancel={onCancel}>
            <p class="deleteNotify">Are you sure you want to delete this product?</p>
        </Modal>
    );
};

// modal delete form User
const DeleteUserForm = (props) => {
    const { visible, onCancel} = props;
    return (
        <Modal
            title="Delete user"
            visible={visible}
            onCancel={onCancel}>
            <p class="deleteNotify">Are you sure you want to delete this user?</p>
        </Modal>
    );
};

// modal delete form Order
const DeleteOrderForm = (props) => {
    const { visible, onCancel} = props;
    return (
        <Modal
            title="Delete order"
            visible={visible}
            onCancel={onCancel}>
            <p class="deleteNotify">Are you sure you want to delete this order?</p>
        </Modal>
    );
};

export default Management;