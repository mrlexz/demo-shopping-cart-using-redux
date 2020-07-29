// import React from 'react';
// import { Form, Input, Modal, Tabs } from 'antd';
// import {deleteOder} from './func'
// import DeleteProductForm from './DeletePro';
// import DeleteOrderForm from './DeleteOrder';
// import DeleteUserForm from './DeleteUser';

// const { TabPane } = Tabs;
// function callback(key) {
//     console.log(key);
// }

// class Management extends React.Component {
//     state = { 
//         visibleCreate: false, 
//         visibleEdit: false, 
//         visibleDeletePro: false,
//         visibleDeleteUser: false,
//         visibleDeleteOrder: false,
//      };

//     filterProduct = (id, arr) => {
//         const result = arr?.find(res => res.id === id);
//         return result?.name || null;
//     }

//     filterUser = (id, arr) => {
//         const result = arr?.find(res => res.id === id)
//         return result?.username || null;
//     }

//     showModalCreate = () => {
//         this.setState({ visibleCreate: true });
//     }
//     handleCancelCreate = () => {
//         this.setState({ visibleCreate: false });
//     }

//     showModalEdit = () => {
//         this.setState({ visibleEdit: true });
//     }
//     handleCancelEdit = () => {
//         this.setState({ visibleEdit: false });
//     }

//     showModalDeletePro = () => {
//         this.setState({ visibleDeletePro: true });
//     }
//     handleCancelDeletePro = () => {
//         this.setState({ visibleDeletePro: false });
//     }

//     showModalDeleteUser = () => {
//         this.setState({ visibleDeleteUser: true });
//     }
//     handleCancelDeleteUser = () => {
//         this.setState({ visibleDeleteUser: false });
//     }

//     showModalDeleteOrder = () => {
//         this.setState({ visibleDeleteOrder: true });
//     }
//     handleCancelDeleteOrder = () => {
//         this.setState({ visibleDeleteOrder: false });
//     }

//     listProduct = () => {
//         return this.props.products.map(item => {
//             return <tr key={item.id}>
//             <td>{item.id}</td>
//             <td><img src={item.picture} alt="" style={{width:"100px", height:"auto"}} /></td>
//             <td>{item.name}</td>
//             <td>{item.price}</td>
//             <td>
//                 <button type="button" className="btn btn-warning edit" onClick={this.showModalEdit}>Edit</button>
//                 <button type="button" className="btn btn-danger delete" onClick={this.showModalDeletePro}>Delete</button>
//                 <EditForm
//                     item={item}
//                     visible={this.state.visibleEdit}
//                     onCancel={this.handleCancelEdit}
//                     />
//                 <DeleteProductForm
//                     visible={this.state.visibleDeletePro}
//                     onCancel={this.handleCancelDeletePro}
//                     id={item.id}
//                     />
//             </td>
//         </tr>
//         })
//     }

//     listUser = () => {
//         return this.props.users.map(item => {
//             return <tr key={item.id}>
//             <td>{item.id}</td>
//             <td>{item.username}</td>
//             <td>{item.first_name}</td>
//             <td>{item.last_name}</td>
//             <td>{item.email}</td>
//             <td>{item?.gender == 1 ? 'Male' : item?.gender == 2 ? 'Female' : null}</td>
//             <td>
//                 <button type="button" className="btn btn-danger delete" onClick={this.showModalDeleteUser}>Delete</button>
//                 <DeleteUserForm
//                     visible={this.state.visibleDeleteUser}
//                     onCancel={this.handleCancelDeleteUser}
//                     id={item.id}
//                 />
//             </td>
//         </tr>
//         })
//     }

//     listOrder = () => {
//         return this.props.oders.map((item) => {
//             return <tr key={item.id}>
//             <td>{item.id}</td>
//             <td>{this.filterUser(item.user, this.props?.users)}</td>
//             <td>{this.filterProduct(item.product, this.props?.products)}</td>
//             <td>{item.number}</td>
//             <td>{item.money}</td>
//             <td>
//                 <button type="button" className="btn btn-danger delete" onClick={this.showModalDeleteOrder}>Delete</button>
//                 <DeleteOrderForm
//                     visible={this.state.visibleDeleteOrder}
//                     onCancel={this.handleCancelDeleteOrder}
//                     id={item.id}
//                 />
//             </td>
//         </tr>
//         })
//     }
//     render() {
//         return (
//             <Tabs defaultActiveKey="1" onChange={callback}>
//                 <TabPane tab="Product Management" key="1">
//                     <div className="productManage">
//                         <h3 className="mb-4 billing-heading">Product Management</h3>
//                         <table className="table">
//                             <thead className="table-success">
//                                 <tr>
//                                     <th>Id</th>
//                                     <th>Image</th>
//                                     <th>Name</th>
//                                     <th>Price</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {this.listProduct()}
//                             </tbody>
//                         </table>
//                         <button type="button" className="btn btn-primary py-3 px-4 create" onClick={this.showModalCreate}>Create</button>
//                         <CreateForm
//                             visible={this.state.visibleCreate}
//                             onCancel={this.handleCancelCreate}
//                         />
//                     </div>
//                 </TabPane>
//                 <TabPane tab="User Management" key="2">
//                     <div className="productManage">
//                         <h3 className="mb-4 billing-heading">User Management</h3>
//                         <table className="table">
//                             <thead className="table-success">
//                                 <tr>
//                                     <th>Id</th>
//                                     <th>Username</th>
//                                     <th>First Name</th>
//                                     <th>Last Name</th>
//                                     <th>Email</th>
//                                     <th>Gender</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {this.listUser()}
//                             </tbody>
//                         </table>
//                     </div>
//                 </TabPane>
//                 <TabPane tab="Order Management" key="3">
//                     <div className="productManage">
//                         <h3 className="mb-4 billing-heading">Order Management</h3>
//                         <table className="table">
//                             <thead className="table-success">
//                                 <tr>
//                                     <th>Id</th>
//                                     <th>Order by</th>
//                                     <th>Product</th>
//                                     <th>Quanlity</th>
//                                     <th>Total Money</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {this.listOrder()}
//                             </tbody>
//                         </table>
//                     </div>
//                 </TabPane>
//             </Tabs>


//         )
//     }
// }
// // modal create form Product
// const CreateForm = (props) => {
//     const { visible, onCancel, onCreate } = props;
//     return (
//         <Modal
//             title="Create product"
//             visible={visible}
//             onCancel={onCancel}>
//             <Form
//                 layout="vertical"
//                 name="basic"
//                 className="form-custom"
//             >
//                 <Form.Item
//                     label="Name"
//                     name="name"
//                     rules={[{ required: true, message: 'Please input your name!' }]}>
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="Price"
//                     name="price"
//                     rules={[{ required: true, message: 'Please input your price!' }]}>
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="Category"
//                     name="category"
//                     rules={[{ required: true, message: 'Please input your category!' }]}>
//                     <Input />
//                 </Form.Item>

//             </Form>
//         </Modal>
//     );
// };

// // modal edit form Product
// const EditForm = (props) => {
//     const { visible, onCancel} = props;
//     return (
//         <Modal
//             title="Edit product"
//             visible={visible}
//             onCancel={onCancel}>
//             <Form
//                 layout="vertical"
//                 name="basic"
//                 className="form-custom"
//             >
//                 {/* <Form.Item
//                     label="Id"
//                     name="id"
//                     rules={[{ required: false, message: 'Please input your id!' }]}>
//                     <Input />
//                 </Form.Item> */}

//                 <Form.Item
//                     label="Name"
//                     name="name"
//                     rules={[{ required: true, message: 'Please input your name!' }]}>
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="Price"
//                     name="price"
//                     rules={[{ required: true, message: 'Please input your price!' }]}>
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label="Category"
//                     name="category"
//                     rules={[{ required: true, message: 'Please input your category!' }]}>
//                     <Input />
//                 </Form.Item>

//             </Form>
//         </Modal>
//     );
// };

// // modal delete form Product
// const DeleteProductForm = (props) => {
//     const { visible, onCancel} = props;
//     const handleOkeProduct = (id) => {
//         console.log(id);
//     }
//     return (
//         <Modal
//             title="Delete product"
//             visible={visible}
//             onCancel={onCancel}
//             onOk={(id) => {
//                 handleOkeProduct(id);
//                 onCancel();
//             }}
//             >
//             <p class="deleteNotify">Are you sure you want to delete this product?</p>
//         </Modal>
//     );
// };

// // modal delete form User
// const DeleteUserForm = (props) => {
//     const { visible, onCancel, id} = props;
//     const handleOkeUser = (id) => {
//         console.log(id);
//     }
//     return (
//         <Modal
//             title="Delete user"
//             visible={visible}
//             onCancel={onCancel}
//             onOk={(id) => {
//                 handleOkeUser(id);
//                 onCancel();
//             }}
//             >
//             <p class="deleteNotify">Are you sure you want to delete this user?</p>
//         </Modal>
//     );
// };

// // modal delete form Order
// const DeleteOrderForm = (props) => {
//     const { visible, onCancel, id} = props;
//     const handleOkeOrder = (id) => {
//         console.log(id);
//     }
//     return (
//         <Modal
//             title="Delete order"
//             visible={visible}
//             onCancel={onCancel}
//             onOk={(id) =>{
//                 handleOkeOrder(id);
//                 onCancel();
//             }}
//             >
//             <p class="deleteNotify">Are you sure you want to delete this order?</p>
//         </Modal>
//     );
// };

// export default Management;