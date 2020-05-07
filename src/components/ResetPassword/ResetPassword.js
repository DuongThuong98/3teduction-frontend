import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Link, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import {toastr} from 'react-redux-toastr';

import 'antd/dist/antd.css';
import { Checkbox } from 'antd';

import * as actions from './../../redux/actions/index';
import * as api from './../../utils/api';

import './ResetPassword.scss';

function ResetPassword(props) {
    if (props.pageTitle) {
        window.document.title = props.pageTitle;
    }
    const search = props.location.search;
    const code = search.slice(search.indexOf("=") + 1);
    const forcePasswordCode = localStorage.getItem('forcePasswordCode');

    useEffect(() => {
        console.log(code)
        api.isValidCode({
            code: code ? code : forcePasswordCode 
        })
            .then(res => {
                console.log('Code is valid', res);
            })
            .catch(err => {
                props.history.push('/authentication/signin');
            })
    }, [])

    const [setting, setSetting] = useState({
        password: '',
        confirmPassword: '',
        code: code ? code : forcePasswordCode
    })

    const handleOnchange = (e) => {
        e.preventDefault();
        let target = e.target;
        setting[target.name] = target.value
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (setting.password === setting.confirmPassword) {
            const set = {
                password: setting.password,
                code: setting.code,
            }
            api.newPassword(set)
                .then(res => {
                    console.log('Success', res);
                    props.history.push('/authentication/signin');
                    localStorage.removeItem('forcePasswordCode');
                })
                .catch(err => {
                    console.log('err', err);
                })
        } else {
            toastr.error('Password is not match');
        }
    }

    return (
        <div className="ResetPassword">
            <div className="login login-v2">
                <div className="login-header">
                    <div className="brand">
                        <span className="logo"> Reset Password</span>
                        <small></small>
                    </div>
                </div>
                <div className="login-content">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group m-b-20">
                            <input type="password" className="form-control input-lg" placeholder="New Password" name="password" required onChange={handleOnchange} />
                        </div>
                        <div className="form-group m-b-20">
                            <input type="password" className="form-control input-lg" placeholder="Confirm Password" name="confirmPassword" required onChange={handleOnchange} />
                        </div>
                        <div className="login-buttons m-t-20">
                            <button type="submit" className="btn btn-success btn-block btn-lg">Reset Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const { alert } = state;
    return { alert };
}

const mapDispatchToProps = (dispatch) => ({
    // setCurrentUser:(user) => dispatch(actions.setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ResetPassword));
