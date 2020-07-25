import React from 'react';
import { Form, Input, Modal, Tabs, Table } from 'antd';
import {deleteOder, deleteProduct, deleteUser} from './func'

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
        valueProduct: {},
     };

    filterProduct = (id, arr) => {
        const result = arr?.find(res => res.id === id);
        return result?.name || null;
    }

    filterUser = (id, arr) => {
        const result = arr?.find(res => res.id === id)
        return result?.username || null;
    }

    showModalCreate = () => {
        this.setState({ visibleCreate: true });
    }
    handleCancelCreate = () => {
        this.setState({ visibleCreate: false });
    }

    showModalEdit = (product) => () => {
        console.log(product);
        this.setState({ visibleEdit: true });
        this.setState({
            valueProduct: product
        })
    }
    handleCancelEdit = () => {
        this.setState({ visibleEdit: false });
        this.setState({
            valueProduct: {}
        })
    }

    showModalDeletePro = (product) => () => {
        Modal.confirm({
            maskClosable: true,
            title: "Delete Product ?",
            okText: "Yes",
            okType: 'danger',
            cancelText: "No",
            onOk() {
                deleteProduct(product.id);
            },
          });
    }

    showModalDeleteUser = (user) => () => {
        Modal.confirm({
            maskClosable: true,
            title: "Delete User ?",
            okText: "Yes",
            okType: 'danger',
            cancelText: "No",
            onOk() {
              deleteUser(user.id);
            },
          });
    }

    showModalDeleteOrder = (order) => () => {
        Modal.confirm({
            maskClosable: true,
            title: "Delete Order ?",
            okText: "Yes",
            okType: 'danger',
            cancelText: "No",
            onOk() {
                deleteOder(order.id);
            },
          });
    }

    columnProduct = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
          },
          {
            title: 'Image',
            dataIndex: 'picture',
            key: 'picture',
            render: (record) => {
                return <img src={record} alt="" style={{width:"100px", height:"auto"}} />
            }
          },
          {
            title: 'Name',
            key: 'name',
            dataIndex: 'name',
          },
          {
            title: 'Price',
            key: 'price',
            dataIndex: 'price',
          },
          {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                return <div>
                 <button type="button" className="btn btn-warning edit" onClick={this.showModalEdit(record)}>Edit</button>
                 <button type="button" className="btn btn-danger delete" onClick={this.showModalDeletePro(record)}>Delete</button>
                </div>
          },
          },
    ];

    columnUser = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
          },
          {
            title: 'User Name',
            dataIndex: 'username',
            key: 'username',
          },
          {
            title: 'First Name',
            key: 'first_name',
            dataIndex: 'first_name',
          },
          {
            title: 'Last Name',
            key: 'last_name',
            dataIndex: 'last_name',
          },
          {
            title: 'Email',
            key: 'email',
            dataIndex: 'email',
          },
          {
            title: 'Gender',
            key: 'gender',
            dataIndex: 'gender',
            render: (gender) => {
            return <span>{gender == 1 ? 'Male' : gender == 2 ? 'Female' : null}</span>
            }
          },
          {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                return <div>
                 <button type="button" className="btn btn-danger delete" onClick={this.showModalDeleteUser(record)}>Delete</button>
                </div>
          },
          },
    ];

    columnOrder = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            render: text => <a>{text}</a>,
          },
          {
            title: 'Order By',
            dataIndex: 'user',
            key: 'user',
            render: (record) => {
            return <span>{this.filterUser(record, this.props.users)}</span>
            }
          },
          {
            title: 'Product',
            key: 'product',
            dataIndex: 'product',
            render: (record) => {
            return <span>{this.filterProduct(record, this.props.products)}</span>
            }
          },
          {
            title: 'Quantity',
            key: 'number',
            dataIndex: 'number',
          },
          {
            title: 'Total Money',
            key: 'money',
            dataIndex: 'money',
          },
          {
            title: 'Action',
            key: 'action',
            render: (text, record) => {
                return <div>
                 <button type="button" className="btn btn-danger delete" onClick={this.showModalDeleteOrder(record)}>Delete</button>
                </div>
          },
          },
    ];

   
    render() {
        console.log(this.props);
        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Product Management" key="1">
                    <div className="productManage">
                        <h3 className="mb-4 billing-heading">Product Management</h3>
                        <Table columns={this.columnProduct} dataSource={this.props.products} />
                        <button type="button" className="btn btn-primary py-3 px-4 create" onClick={this.showModalCreate}>Create</button>
                        <CreateForm
                            visible={this.state.visibleCreate}
                            onCancel={this.handleCancelCreate}
                        />
                        <EditForm
                            visible={this.state.visibleEdit}
                            onCancel={this.handleCancelEdit}
                            value={this.valueProduct}
                         />
                    </div>
                </TabPane>
                <TabPane tab="User Management" key="2">
                    <div className="productManage">
                        <h3 className="mb-4 billing-heading">User Management</h3>
                        <Table columns={this.columnUser} dataSource={this.props.users} />
                    </div>
                </TabPane>
                <TabPane tab="Order Management" key="3">
                    <div className="productManage">
                        <h3 className="mb-4 billing-heading">Order Management</h3>
                        <Table columns={this.columnOrder} dataSource={this.props?.oders} />
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
    const { visible, onCancel, value} = props;
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

export default Management;