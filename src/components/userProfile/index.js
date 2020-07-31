import React from 'react';
import { Button, Row, Col } from 'antd';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { getUserProfile, logout } from './../../actions/index';
import { callAPI } from '../../services/callAPI';
const style = {
    backgroundImage: "url('images/img_bg_1.jpg')"
}
const UserProfile = (props) => {

    const { user } = props;
    const [isLogout, setIsLogout] = React.useState(false);
    React.useEffect(() => {
        const token = localStorage.getItem("token");
        const config = {
            'Authorization': 'Bearer ' + token,
        }
        callAPI(null, 'http://localhost:8000/profile/', 'GET', config).then((resp) => {
            if (resp.status === 200) {
                props.getUser(resp.data);
            }
        }).catch((error) => {
            console.log(error);
        });

    }, []);

    const logout = () => {
        localStorage.clear();
        props.logout();
        setIsLogout(true);
    }

    if (isLogout) {
        return <Redirect to="/login" />
    }


    return (
        <div className="userProfile">
            <h4>User Profile</h4>

            <Row>
                <Col span={5}><span className="profileItem">UserName: </span></Col>
                <Col span={7}>{user?.username}</Col>
            </Row>

            <Row>
                <Col span={5}><span className="profileItem">FirstName: </span></Col>
                <Col span={7}>{user?.first_name}</Col>
            </Row>

            <Row>
                <Col span={5}><span className="profileItem">LastName: </span></Col>
                <Col span={7}>{user?.last_name}</Col>
            </Row>
            <Row>
                <Col span={5}><span className="profileItem">Age: </span></Col>
                <Col span={7}>{user?.age}</Col>
            </Row>
            <Row>
                <Col span={5}><span className="profileItem">Sex: </span></Col>
                <Col span={7}>{user?.gender == 1 ? 'Male' : user?.gender == 2 ? 'Female' : null}</Col>
            </Row>

            <Row>
                <Col span={5}><span className="profileItem">Email: </span></Col>
                <Col span={7}>{user?.email}</Col>
            </Row>

            <div className="row">
                <div className="btn btn-primary py-3 px-4 button-logout" onClick={logout}>Logout
                </div>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userProfile,
        infor: state.login,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (data) => {
            dispatch(getUserProfile(data));
        },
        logout: () => {
            dispatch(logout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);