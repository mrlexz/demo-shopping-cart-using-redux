import React from 'react';
import { Form, Input, Modal, Tabs, Table, Select, notification, Upload, Button, message } from 'antd';
import {deleteOder, deleteProduct, deleteUser} from './func';
import {callAPI} from '../../services/callAPI';
import {CATEGORY} from './constants';

const { TabPane } = Tabs;
const { Option } = Select;
function callback(key) {
    console.log(key);
}
function upload() {
    //get the input and the file
    var input = document.querySelector('input[type=file]'),
    file = input.files[0];

    //if the file isn't a image nothing happens.
    //you are free to implement a fallback
    if (!file || !file.type.match(/image.*/)) return;

    //Creates the FormData object and attach to a key name "file"
    var fd = new FormData();
    fd.append("picture", file);
    return fd;
}
function Management (props) {
      const  [visibleCreate, setVisibleCreate] = React.useState(false);
      const  [visibleEdit, setVisibleEdit] = React.useState(false); 
      const  [visibleDeletePro, setVisibleDeletePro] = React.useState(false);
      const  [visibleDeleteUser, setVisibleDeleteUser] = React.useState(false);
      const  [visibleDeleteOrder, setVisibleDeleteOrder] = React.useState(false);
      const  [valueProduct, setValueProduct] = React.useState({});

    const filterProduct = (id, arr) => {
        const result = arr?.find(res => res.id === id);
        return result?.name || null;
    }

    const filterUser = (id, arr) => {
        const result = arr?.find(res => res.id === id)
        return result?.username || null;
    }

    const showModalCreate = () => {
        setVisibleCreate(true)
    }
    const handleCancelCreate = () => {
        setVisibleCreate(false)
    }

    const handleCreate = (values) => {
        console.log(values);
        const token = localStorage.getItem("token");
        const config = {
            'Authorization' : 'Bearer '+token,
            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
        }

        const value = upload();
        value.append("name", values.name);
        value.append("category", values.category);
        value.append("price", values.price);
        callAPI(value,'http://localhost:8000/beers/', 'POST', config).then(resp => {
            if(resp.status === 200) {
                notification["success"]({
                message: 'Create success',
                description:
                'Create success!!!',
                });
                }
                handleCancelCreate();
                setTimeout(()=> {
                    window.location.reload();
                },500);
            }).catch(err => {
                notification["error"]({
                message: 'Create error',
                description:
                'Create error!!!',
            });
            console.log(err);
        })
    }

    const showModalEdit = (product) => () => {
        setVisibleEdit(true);
        setValueProduct(product);
    }
    const handleCancelEdit = () => {
        setVisibleEdit(false);
        setValueProduct({});
    }

    const handleUpdate = (values) => {
        const token = localStorage.getItem("token");
        const config = {
            'Authorization' : 'Bearer '+token,
            'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
        }

        const value = upload();
        value.append("name", values.name);
        value.append("category", values.category);
        value.append("price", values.price);
        callAPI(value,`http://localhost:8000/beers/${values.id}/`, 'PUT', config).then(resp => {
            if(resp.status === 200) {
                notification["success"]({
                message: 'Update success',
                description:
                'Update success!!!',
                });
                }
                handleCancelEdit();
                setTimeout(()=> {
                    window.location.reload();
                },500);
            }).catch(err => {
                notification["error"]({
                message: 'Update error',
                description:
                'Update error!!!',
            });
            console.log(err);
        })
    }

    const showModalDeletePro = (product) => () => {
        Modal.confirm({
            maskClosable: true,
            title: "Delete Product ?",
            okText: "Yes",
            okType: 'danger',
            cancelText: "No",
            onOk() {
                deleteProduct(product.id);
                setTimeout(()=> {
                    window.location.reload();
                },500);
            },
          });
    }

    const showModalDeleteUser = (user) => () => {
        Modal.confirm({
            maskClosable: true,
            title: "Delete User ?",
            okText: "Yes",
            okType: 'danger',
            cancelText: "No",
            onOk() {
              deleteUser(user.id);
              setTimeout(()=> {
                window.location.reload();
            },500);
            },
          });
    }

    const showModalDeleteOrder = (order) => () => {
        Modal.confirm({
            maskClosable: true,
            title: "Delete Order ?",
            okText: "Yes",
            okType: 'danger',
            cancelText: "No",
            onOk() {
                deleteOder(order.id);
                setTimeout(()=> {
                    window.location.reload();
                },500);
            },
          });
    }

    const columnProduct = [
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
                 <button type="button" className="btn btn-warning edit" onClick={showModalEdit(record)}>Edit</button>
                 <button type="button" className="btn btn-danger delete" onClick={showModalDeletePro(record)}>Delete</button>
                </div>
          },
          },
    ];

    const columnUser = [
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
                 <button type="button" className="btn btn-danger delete" onClick={showModalDeleteUser(record)}>Delete</button>
                </div>
          },
          },
    ];

    const columnOrder = [
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
            return <span>{filterUser(record, props.users)}</span>
            }
          },
          {
            title: 'Product',
            key: 'product',
            dataIndex: 'product',
            render: (record) => {
            return <span>{filterProduct(record, props.products)}</span>
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
                 <button type="button" className="btn btn-danger delete" onClick={showModalDeleteOrder(record)}>Delete</button>
                </div>
          },
          },
    ];

   
    // render() {
        return (
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Product Management" key="1">
                    <div className="productManage">
                        <h3 className="mb-4 billing-heading">Product Management</h3>
                        <Table columns={columnProduct} dataSource={props.products} />
                        <button type="button" className="btn btn-primary py-3 px-4 create" onClick={showModalCreate}>Create</button>
                        <CreateForm
                            visible={visibleCreate}
                            onCancel={handleCancelCreate}
                            onCreate={handleCreate}
                        />
                        <EditForm
                            visible={visibleEdit}
                            onCancel={handleCancelEdit}
                            onUpdate={handleUpdate}
                            value={valueProduct}
                         />
                    </div>
                </TabPane>
                <TabPane tab="User Management" key="2">
                    <div className="productManage">
                        <h3 className="mb-4 billing-heading">User Management</h3>
                        <Table columns={columnUser} dataSource={props?.users} />
                    </div>
                </TabPane>
                <TabPane tab="Order Management" key="3">
                    <div className="productManage">
                        <h3 className="mb-4 billing-heading">Order Management</h3>
                        <Table columns={columnOrder} dataSource={props?.oders} />
                    </div>
                </TabPane>
            </Tabs>


        )
    }
// }
// modal create form Product
const CreateForm = (props) => {
    const { visible, onCancel, onCreate } = props;
    return (
        <Modal
            title="Create product"
            visible={visible}
            onCancel={onCancel}
            okButtonProps={{form:'product-form', key: 'submit', htmlType: 'submit'}}
            >
            <Form
                id="product-form"
                layout="vertical"
                name="basic"
                className="form-custom"
                onFinish={onCreate}
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
                    <Select>
                        {CATEGORY.map(item => {
                            return <Option value={item.value}>{item.name}</Option>
                        })}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Photo"
                    name="picture"
                    rules={[{ required: true, message: 'Please input your category!' }]}
                    >
                    <input type="file" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

// modal edit form Product
const EditForm = (props) => {
    const { visible, onCancel, value, onUpdate} = props;
    return (
        <Modal
            title="Edit product"
            visible={visible}
            onCancel={onCancel}
            okButtonProps={{form:'product-form-update', key: 'submit', htmlType: 'submit'}}
            >
            <Form
                id="product-form-update"
                layout="vertical"
                name="basic"
                className="form-custom"
                onFinish={onUpdate}
            >
                <Form.Item
                    label="Id"
                    name="id"
                    style={{display: 'none'}}
                    initialValue={value?.id || null}
                    rules={[{ required: true, message: 'Please input your name!' }]}>
                    <Input />
                </Form.Item>
    
                <Form.Item
                    label="Name"
                    name="name"
                    initialValue={value?.name || null}
                    rules={[{ required: true, message: 'Please input your name!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Price"
                    name="price"
                    initialValue={value?.price || null}
                    rules={[{ required: true, message: 'Please input your price!' }]}>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Category"
                    name="category"
                    initialValue={value?.category || null}
                    rules={[{ required: true, message: 'Please input your category!' }]}>
                    <Select>
                        {CATEGORY.map(item => {
                            return <Option value={item.value}>{item.name}</Option>
                        })}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Photo"
                    name="picture"
                    rules={[{ required: true, message: 'Please input your category!' }]}
                    >
                    <input type="file" />
                </Form.Item>

            </Form>
        </Modal>
    );
};

export default Management;