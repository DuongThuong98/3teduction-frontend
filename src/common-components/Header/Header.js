import React, {useState, useEffect} from 'react';
import { HashRouter as Router, Link, Route, Redirect, withRouter } from "react-router-dom";
import {connect} from 'react-redux';

import * as actionUser from './../../redux/actions/actionUser';
import * as actions from './../../redux/actions/index';
import avatar from './../../images/Anonymous-2-512.png';

import './Header.scss';

function Header(props) {
    const [isOpenUser, setOpenUser] = useState(false);

    const logOut = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('expiredTime');
        props.history.push('/authentication/signin')
    }

    const {setting, user} = props;

    return (
        <div className="Header">
            <div className="header" className="header navbar navbar-default navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                    <span className="Header__logo" onClick={() => props.history.push('/')}> NECIT </span>
                        <button type="button" className="navbar-toggle" onClick={() => props.toggleSideBar(!setting.isOpenLeftSide)}>
                            <span className={`icon-bar ${setting.isOpenLeftSide ? 'Header__line-1' : ''}`}></span>
                            <span className={`icon-bar ${setting.isOpenLeftSide ? 'Header__line-2' : ''}`}></span>
                            <span className={`icon-bar ${setting.isOpenLeftSide ? 'Header__line-3' : ''}`}></span>
                        </button>
                    </div>
                    <ul className="nav navbar-nav navbar-right">
                        {/* <li>
                            <form className="navbar-form full-width">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Enter keyword" />
                                    <button type="submit" className="btn btn-search"><i className="fa fa-search"></i></button>
                                </div>
                            </form>
                        </li> */}
                        <li className={`dropdown navbar-user Header__profile-btn ${isOpenUser ? 'open' : ''}`} onClick={() => setOpenUser(!isOpenUser)}>
                            <span className="dropdown-toggle" data-toggle="dropdown">
                                <img src={avatar} alt="" /> 
                                <span>{user.firstName} {user.secondName}</span> <b className="caret"></b>
                            </span>
                            <ul className="dropdown-menu animated fadeInDown">
                                <li className="arrow"></li>
                                <li><span className="Header__nav-child" onClick={() => props.history.replace('/profile/info')}>My Profile</span></li>
                                <li><span className="Header__nav-child" onClick={() => props.history.replace('/profile/changepassword')}>Change Password</span></li>
                                <li onClick={() => logOut()}><span className="Header__nav-child">Log Out</span></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    const {setting, user} = state;
    return {setting, user};
}

const mapDispatchToProps = (dispatch) => ({
    toggleSideBar:(isOpen) => dispatch(actions.openLeftSide(isOpen)),
    getCurrentUser:() => dispatch(actionUser.getCurrentUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
