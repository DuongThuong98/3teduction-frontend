import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Link, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import {toastr} from 'react-redux-toastr';

import * as actions from './../../redux/actions/actionUser';
import * as setting from './../../redux/actions/index';
import * as api from './../../utils/api';

import './Profile.scss';

function ProfilePassword(props) {
    const {setLoading} = props;
    const [password, setPassword] = useState({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
    })

    console.log('reset', password);

    const handleOnchange = (e) => {
        e.preventDefault();
        let target = e.target;
        setPassword({
            ...password,
            [target.name]: target.value
        })
    }

    const submitPassword = (e) => {
        e.preventDefault();
        setLoading(true);
        if (Object.keys(password).length) {
          if (password.newPassword === password.confirmPassword) {
            api.updatePassword(password)
                .then(res => {
                    setPassword({
                        currentPassword: '',
                        newPassword: '',
                        confirmPassword: ''
                    })
                    setLoading(false);
                })
                .catch(err => {
                    setLoading(false);
                    let response = err.response;
                    setLoading(false);
                })
          } else {
                setLoading(false);
                toastr.error('Password is not match');
          }
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={submitPassword}>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="CurrentPass">Current Password <span className="text-danger">*</span> </label>
                        <input type="password" className="form-control" id="CurrentPass" placeholder="Current Password" name="currentPassword" value={password.currentPassword} required onChange={handleOnchange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="NewPass">New Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" id="NewPass" placeholder="New Password" name="newPassword" value={password.newPassword} required onChange={handleOnchange} />
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="Confirm">Confirm Password <span className="text-danger">*</span></label>
                        <input type="password" className="form-control" id="Confirm" placeholder="Confirm Password" name="confirmPassword" value={password.confirmPassword} required onChange={handleOnchange} />
                    </div>
                </div>
                <div className="row" style={{ padding: '0 15px' }}>
                    <div className="col-md-12">
                        <button type="submit" className="btn btn-success"> Change password </button>
                    </div>
                </div>
            </form>
        </React.Fragment>
    )
}


const mapStateToProps = (state) => {
    const { alert } = state;
    return { alert };
}

const mapDispatchToProps = (dispatch) => ({
    updatePassword:(password) => dispatch(actions.updatePassword(password)),
    setLoading: (isLoading) => dispatch(setting.setLoading(isLoading))
})


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfilePassword));
