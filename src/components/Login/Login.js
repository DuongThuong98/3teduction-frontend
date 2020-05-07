import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Link, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { Input, Pagination, Table, Modal, Button } from 'antd';
import {toastr} from 'react-redux-toastr';

import 'antd/dist/antd.css';
import { Checkbox } from 'antd';

import * as actions from './../../redux/actions/actionUser';
import * as setting from './../../redux/actions/index';
import * as api from './../../utils/api';

import './Login.scss';

function Login(props) {
    if (props.pageTitle) {
        window.document.title = props.pageTitle;
    }

    const {setLoading} = props;
    const [ isShowModal, setShowModal] = useState(false);
 
    const [user, setUser] = useState({
        Email: '',
        PassWord: ''
    });

    const showModal = () => {
        setShowModal(true);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    const setPassword = () => {
        setLoading(true);
        api.resendEmail({
            email: user.Email
        })
            .then(res => {
                handleCancel();
               
            })
            .catch(err => {
                handleCancel();
                console.log('err', err);
            })
    }


    const postLogin = (event) => {
        event.preventDefault();
        setLoading(true);
        api.login(JSON.stringify(user))
            .then(res => {
                const isActived = res.data.data.isNewAccount;
                const code = res.data.data.code || '';
                if (isActived) {
                    showModal();
                } else {
                    localStorage.setItem('token', res.data.data.token);
                    let expiredTime =  new Date(res.data.data.expiry);
                    expiredTime = Date.parse(expiredTime);
                    localStorage.setItem('expiredTime', expiredTime);
                    
                    props.setCurrentUser(res.data.data);
                    setLoading(false);
                    if (code) {
                        toastr.error('You account is being asked to change your password');
                        localStorage.setItem('forcePasswordCode', code);
                        props.history.push('/authentication/resetpassword');
                    }
                    else props.history.push('/');
                }

            })
            .catch(err =>{
                let response = err.response;
                console.log('err', err);
                setLoading(false);
            })
    }

    const handleOnChange = (e) => {
        let target = e.target;
        user[target.name] = target.value;
        setUser({
            ...user,
            [target.name]: target.value
        })
    }

    const checkboxContainer = {
        display: 'flex',
        position: 'relative'
    }


    return (
        <React.Fragment>
            <div className="Login">
                <div className="login login-v2" data-pageload-addclass="animated fadeIn">
                    <div className="login-header">
                        <div className="brand">
                            <span className="logo"></span> Sign In
                            <small></small>
                        </div>
                    </div>
                    <div className="login-content">
                        <form onSubmit={postLogin}>
                            <div className="form-group m-b-20">
                                <input type="email" className="form-control input-lg" name="Email" placeholder="Email Address" required onChange={handleOnChange} />
                            </div>
                            <div className="form-group m-b-20">
                                <input type="password" className="form-control input-lg" name="PassWord" placeholder="Password" required onChange={handleOnChange} />
                            </div>
                            <div className="m-b-20" style={checkboxContainer}>
                                {/* <input type="checkbox" id="remember" />
                                <label htmlFor="remember">
                                    Remember Me
                                    </label> */}
                                <Checkbox>Remember Me</Checkbox>
                                <Link to="/authentication/forgotpassword" style={{ position: 'absolute', right: 0 }}>Forget Password</Link>
                            </div>
                            <div className="login-buttons m-t-20">
                                <button type="submit" className="btn btn-success btn-block btn-lg" style={{ display: 'flex', justifyContent:'center'}}>
                                    <span> Sign me in  </span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Modal
                title="Warning"
                visible={isShowModal}
                onOk={handleCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
                >
                <p>Click <span className="Login__content-link" onClick={() => setPassword()}>here</span> to resend activation email link</p>
            </Modal>
        </React.Fragment>

    );
}

const mapStateToProps = (state) => {
    const { alert, setting } = state;
    return { alert, setting };
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser:(user) => dispatch(actions.setCurrentUser(user)),
    setLoading: (isLoading) => dispatch(setting.setLoading(isLoading))
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
