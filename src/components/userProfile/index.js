import React from 'react';
import {Button} from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { getUserProfile } from './../../actions/index';
import {callAPI} from '../../services/callAPI';
const style = {
    backgroundImage: "url('images/img_bg_1.jpg')"
}
const UserProfile = (props) => {

    const {user} = props;
    React.useEffect(()=> {
        const token = localStorage.getItem("token");
        const config = {
            'Authorization' : 'Bearer '+token,
        }
        callAPI(null, 'http://localhost:8000/profile/', 'GET', config).then((resp) => {
            if(resp.status===200){
                props.getUser(resp.data);
            } 
        }).catch((error) => {
            console.log(error);
        });
        
    }, []);

    const logout = () => {
        localStorage.clear();
        props.getUser({});
    }

    return (
        <div className="userProfile">
            <h4>User Profile</h4>

            <div className="row">
                <div className="col-sm-5 proItem">
    <span className="profileItem">UserName: {user?.username}</span>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-5 proItem">
                        <span className="profileItem">FirstName: {user?.first_name}</span>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-5 proItem">
                        <span className="profileItem">LastName: {user?.last_name}</span>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-5 proItem">
                        <span className="profileItem">Age: {user?.age}</span>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-5 proItem">
                        <span className="profileItem">Sex: {user?.gender == 1 ? 'Male' : 'Female'}</span>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-5 proItem">
                        <span className="profileItem">Email: {user?.email}</span>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-5 proItem">
                        <Button onClick={logout}>Logout</Button>
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userProfile,
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (data) => {
            dispatch(getUserProfile(data));
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);