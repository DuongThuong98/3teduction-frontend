import React, { useState, useEffect, Component } from 'react';
import { HashRouter as Router, Link, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import './Login.scss';
import * as api from './../../utils/api';
import * as actions from './../../redux/actions/actionUser';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPassword: false
        }
    }

    componentDidMount () {
        console.log(this.props);
        if (localStorage.getItem('token')) {
            this.props.history.push('/');
        }
    }

    handleChange = prop => event => {
        console.log(event.target.value)
        debugger
        this.setState({ [prop]: event.target.value });
    };

    login = event => {
        const { email, password } = this.state;
        event.preventDefault();
        console.log(this.state)
        api.login(JSON.stringify(
            {email: email,
            password:password}
        ))
            .then(res => {
                localStorage.setItem('token', res.data.data.token);
                let expiredTime = new Date(res.data.data.expiry);
                // expiredTime = Date.parse(expiredTime);
                // localStorage.setItem('expiredTime', expiredTime);

                this.props.setCurrentUser(res.data.data);
            })
            .catch(err => {
                let response = err.response;
                console.log('err', err);
            })
    }

    render () {
        return (
            <React.Fragment>
                <section id="wrapper">
                    <div className="login-register" style={{ backgroundImage: 'https://image.freepik.com/free-vector/workspace-cartoon-style_23-2147508020.jpg' }}>
                        <div className="login-box card">
                            <div className="card-body">
                                <form className="form-horizontal form-material" id="loginform" onSubmit={(e) => e.preventDefault()}>
                                    <h3 className="text-center m-b-20">Sign In</h3>
                                    <div className="form-group ">
                                        <div className="col-xs-12">
                                            <input className="form-control" type="email" required placeholder="Email" onChange={this.handleChange('email')} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <input className="form-control" autoComplete="current-password" type={this.state.showPassword ? 'text' : 'password'}
                                                required placeholder="Password" onChange={this.handleChange('password')} />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-md-12">
                                            <div className="d-flex no-block align-items-center">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                    <label className="custom-control-label">Remember me</label>
                                                </div>
                                                <div className="ml-auto">
                                                    <a id="to-recover" className="text-muted"><i className="fas fa-lock m-r-5"></i> Forgot pwd?</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group text-center">
                                        <div className="col-xs-12 p-b-20">
                                            <button className="btn btn-block btn-lg btn-info btn-rounded" type="submit" onClick={(event) => { this.login() }}>Log In</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                                            <div className="social">
                                                <button className="btn  btn-facebook" data-toggle="tooltip" title="Login with Facebook"> <i aria-hidden="true" className="fab fa-facebook-f"></i> </button>
                                                <button className="btn btn-googleplus m-l-5" data-toggle="tooltip" title="Login with Google"> <i aria-hidden="true" className="fab fa-google-plus-g"></i> </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group m-b-0">
                                        <div className="col-sm-12 text-center">
                                            Don't have an account? <a className="text-info m-l-5"><b>Sign Up</b></a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>

        );
    }
}

const mapStateToProps = (state) => {
    // const { loggingIn } = state.authentication;
    // return {
    //     loggingIn
    // };
}

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser:(props) => dispatch(actions.setCurrentUser(props)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));