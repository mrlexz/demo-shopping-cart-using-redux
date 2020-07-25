import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import Header from '../../components/header';
import Management from '../../components/management/manage.js';
import * as constants from '../../services/constants'
import {callAPI} from '../../services/callAPI';
import { connect } from 'react-redux';
import { getProductManagement,getOderManagement, getUserManagement } from './../../actions/index';
const Home = (props) => {
    let {products, oders, users} = props;
    React.useEffect(() => {
       try {
        callAPI(null, constants.API_URL, 'GET').then((resp) => {
            props.onGetProduct(resp.data);
        });
        callAPI(null, "http://localhost:8000/myUser/", 'GET').then((resp) => {
            props.onGetUserMana(resp.data);
        });
        callAPI(null, "http://localhost:8000/order/", 'GET').then((resp) => {
            props.onGetOrderMana(resp.data);
        });
       } catch (error) {
           console.log(error);
       }
    }, [])

    const propsMana = {
        products,
        oders,
        users
    }

    return (
        <div className="goto-here">
            <Header />
            <Navbar />
            <Management {...propsMana} />
            <Footer />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.management.productMana,
        oders: state.management.orderMana,
        users: state.management.userMana,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onGetProduct: (items) => {
            dispatch(getProductManagement(items));
        },
        onGetUserMana: (items) => {
            dispatch(getUserManagement(items));
        },
        onGetOrderMana: (items) => {
            dispatch(getOderManagement(items));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);