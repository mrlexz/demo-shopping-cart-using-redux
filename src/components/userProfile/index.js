import React from 'react';
import { connect } from 'react-redux';
const style = {
    backgroundImage: "url('images/img_bg_1.jpg')"
}
const UserProfile = () => {
    return (

        <div className="userProfile">
            <h4>User Profile</h4>

            <div className="row">
                <div className="col-sm-5 proItem">
                        <span className="profileItem">UserName:</span>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-5 proItem">
                        <span className="profileItem">FirstName:</span>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-5 proItem">
                        <span className="profileItem">LastName:</span>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-5 proItem">
                        <span className="profileItem">Age:</span>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-5 proItem">
                        <span className="profileItem">Sex:</span>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-5 proItem">
                        <span className="profileItem">Email:</span>
                </div>
            </div>

        </div>
    )
}

export default UserProfile;