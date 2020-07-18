import React from 'react';
import { NavLink } from 'react-router-dom';
const style = {
    backgroundImage: "url('images/img_bg_1.jpg')"
}
const ProductManage = (props) => {
    const product = props.product;
    return (
        <div className="productManage">
            <h3 className="mb-4 billing-heading">Product Manage</h3>
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
                            <button type="button" className="btn btn-warning edit">Edit</button>
                            <button type="button" className="btn btn-danger delete">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="button" className="btn btn-primary py-3 px-4 create">Create</button>
        </div>
    )
}

export default ProductManage;