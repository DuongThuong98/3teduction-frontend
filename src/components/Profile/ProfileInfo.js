import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Link, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

import * as actions from './../../redux/actions/actionUser';
import * as setting from './../../redux/actions/index';
import * as api from './../../utils/api';

import './Profile.scss';

function ProfileInfo(props) {
    const { user, setLoading, setting } = props;
    const [userInfo, setInfo] = useState({
        firstName: '',
        secondName: '',
        email: '',
        phone: '',
        role: '',
        regionName: '',
        status: ''
    });

    const handleOnchange = (e) => {
        e.preventDefault();
        let target = e.target;
        setInfo({
            ...userInfo,
            [target.name]: target.value
        })
    }

    const submitInfo = (e) => {
        e.preventDefault();
        setLoading(true);
        let checkInfo = Object.keys(userInfo);
        checkInfo.forEach(item => {
            if (!userInfo[item]) userInfo[item] = user[item];
        })
        console.log('submitInfo', userInfo, setting);
        api.updateProfile(userInfo)
            .then(res => {
                console.log('Update Profile', res);
                props.updateInfoCurrentUser(userInfo);
                setLoading(false);
            })
            .catch(err => {
                let response = err.response;
                console.log('err', err, err.response);
                setLoading(false);
            })
    }

    return (
        <React.Fragment>
            <form onSubmit={submitInfo}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="FirstName">First Name <span className="text-danger">*</span> </label>
                        <input type="text" className="form-control" id="FirstName" name="firstName" placeholder="First Name" required defaultValue={user.firstName} onChange={handleOnchange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="LastName">Last Name <span className="text-danger">*</span></label>
                        <input type="text" className="form-control" id="LastName" name="secondName" placeholder="Last Name" required defaultValue={user.secondName} onChange={handleOnchange} />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="Email">Email </label>
                        <input type="text" className="form-control" id="Email" name="email" placeholder="Email" disabled defaultValue={user.email} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="Phone">Phone</label>
                        <input type="text" className="form-control" id="Phone" name="phone" placeholder="Phone" defaultValue={user.phone} onChange={handleOnchange} />
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                        <label htmlFor="Role">Role</label>
                        <input type="text" className="form-control" id="Role" placeholder="Role" disabled defaultValue={user.role} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="Region">Region</label>
                        <input type="text" className="form-control" id="Region" placeholder="Region" disabled defaultValue={user.regionName} />
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="Status">Status</label>
                        <input type="text" className="form-control" id="Status" placeholder="Status" disabled defaultValue={user.status} />
                    </div>
                </div>
                <div className="row" style={{ padding: '0 15px' }}>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-success"> Update </button>
                    </div>
                </div>
            </form>
        </React.Fragment>
    )
}


const mapStateToProps = (state) => {
    const { alert, setting } = state;
    return { alert, setting };
}

const mapDispatchToProps = (dispatch) => ({
    updateInfoCurrentUser: (user) => dispatch(actions.updateInfoCurrentUser(user)),
    setLoading: (isLoading) => dispatch(setting.setLoading(isLoading))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileInfo));
