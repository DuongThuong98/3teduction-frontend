import React, { useState } from 'react';
import { HashRouter as Router, Link, Route, Redirect, withRouter } from "react-router-dom";
import {toastr} from 'react-redux-toastr';
import { Input, Pagination, Table, Modal, Button } from 'antd';

import * as api from './../../utils/api';

import './ForgotPassword.scss';

function ForgotPassword(props) {
    if (props.pageTitle) {
        window.document.title = props.pageTitle;
    }

    const [email, setEmail] = useState({
        email: ''
    });
    const [ isShowModal, setShowModal] = useState(false);

    const resendEmail = () => {
        api.resendEmail({
            email: email.email
        })
            .then(res => {
                handleCancel();
            })
            .catch(err => {
                handleCancel();
                console.log('err', err);
            })
    }

    const showModal = () => {
        setShowModal(true);
    };

    const handleCancel = () => {
        setShowModal(false);
    };

    const handleOnchange = (e) => {
        e.preventDefault();
        let target = e.target;
        setEmail({
            email: target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        api.isValidEmail(email)
            .then(res => {
                const code = res.data.data.code;
                if (code) {
                    showModal();
                    toastr.error('You account is being asked to change your password. Please check your email for detail');
                }
            })
            .catch(err => {
                console.log('err', err.response, err);
            })
    }

    return (
        <React.Fragment>
            <div className="ForgotPassword">
                <div className="login login-v2">
                    <div className="login-header">
                        <div className="brand">
                            <span className="logo"> </span>Forgot Password 
                            <small></small>
                        </div>
                    </div>
                    <div className="login-content">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group m-b-20">
                                <input type="email" className="form-control input-lg" name="email" placeholder="Email Address" required onChange={handleOnchange} />
                            </div>
                            <div className="login-buttons m-t-20">
                                <button type="submit" className="btn btn-success btn-block btn-lg">Send</button>
                            </div>
                            <div className="m-t-20">
                                Already a member ? Click <Link to="/authentication/signin"> here </Link> to Sign in.
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Modal
                title="Warning!"
                visible={isShowModal}
                onOk={handleCancel}
                cancelButtonProps={{ style: { display: 'none' } }}
                >
                <p>Click <span className="ForgotPassword__content-link" onClick={() => resendEmail()}>here</span> to resend an email link</p>
            </Modal>
        </React.Fragment>
    );
}

export default withRouter(ForgotPassword);
