import React from 'react';
import Product from '../product';
import * as types from '../../constants/ActionType';
import * as constants from '../../services/constants'
import {callAPI} from '../../services/callAPI';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { actAddToCart, getProduct, getCategory } from './../../actions/index';
import { Select, Radio } from 'antd';
const ProductView = (props) => {
    let products = props.products;
    let categorys = props.category;
    let onAddToCart = props.onAddToCart;
    const [value, setValue] = React.useState();

    React.useEffect(() => {
        callAPI(null, constants.API_URL, 'GET').then((resp) => {
            props.onGetProduct(resp.data);
        })
        callAPI(null, "http://localhost:8000/category/", 'GET').then((resp) => {
            props.onGetCategory(resp.data);
            console.log(resp.data);
        })
    }, [])

    React.useEffect(() => {
        callAPI(null, constants.API_URL, 'GET', null, {category_id:value}).then((resp) => {
            props.onGetProduct(resp.data);
            console.log(resp.data);
        })
    }, [value])

    const handleSizeChange = e => {
        setValue(e.target.value);
        console.log(value);
      };
    return (
        <>
        <Radio.Group value={value} onChange={handleSizeChange}>
        {categorys?.map((category, index) => {
                        return <Radio.Button value={category.id}>{category.name}</Radio.Button>
                    })}
        </Radio.Group>
        <section className="ftco-section">
            <div className="container">
                {/* <div className="row justify-content-center">
                    <div className="col-md-10 mb-5 text-center">
                        <ul className="product-category">
                            <li><NavLink to="#" className="active">All</NavLink></li>
                        </ul>
                    </div>
                </div> */}
                <div className="row">
                    {products?.map((product, index) => {
                        return <Product key={index} product={product} onAddToCart={onAddToCart} />
                    })}
                </div>
            </div>
        </section>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        category: state.category,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onGetProduct: (items) => {
            dispatch(getProduct(items));
        },
        onGetCategory: (items) => {
            dispatch(getCategory(items));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductView);