// import React, {useState, useEffect} from 'react';
// import { HashRouter as Router, Link, Route, Redirect, withRouter } from "react-router-dom";
// import {connect} from 'react-redux';

// import * as actionUser from './../../redux/actions/actionUser';
// import * as actions from './../../redux/actions/index';
// import avatar from './../../images/Anonymous-2-512.png';

// import './Header.scss';

// function Header(props) {
//     const [isOpenUser, setOpenUser] = useState(false);

//     const logOut = () => {
//         localStorage.removeItem('token');
//         localStorage.removeItem('expiredTime');
//         props.history.push('/authentication/signin')
//     }

//     const {setting, user} = props;

//     return (
//         <div className="Header">
//             <div className="header" className="header navbar navbar-default navbar-fixed-top">
//                 <div className="container-fluid">
//                     <div className="navbar-header">
//                     <span className="Header__logo" onClick={() => props.history.push('/')}> NECIT </span>
//                         <button type="button" className="navbar-toggle" onClick={() => props.toggleSideBar(!setting.isOpenLeftSide)}>
//                             <span className={`icon-bar ${setting.isOpenLeftSide ? 'Header__line-1' : ''}`}></span>
//                             <span className={`icon-bar ${setting.isOpenLeftSide ? 'Header__line-2' : ''}`}></span>
//                             <span className={`icon-bar ${setting.isOpenLeftSide ? 'Header__line-3' : ''}`}></span>
//                         </button>
//                     </div>
//                     <ul className="nav navbar-nav navbar-right">
//                         {/* <li>
//                             <form className="navbar-form full-width">
//                                 <div className="form-group">
//                                     <input type="text" className="form-control" placeholder="Enter keyword" />
//                                     <button type="submit" className="btn btn-search"><i className="fa fa-search"></i></button>
//                                 </div>
//                             </form>
//                         </li> */}
//                         <li className={`dropdown navbar-user Header__profile-btn ${isOpenUser ? 'open' : ''}`} onClick={() => setOpenUser(!isOpenUser)}>
//                             <span className="dropdown-toggle" data-toggle="dropdown">
//                                 <img src={avatar} alt="" />
//                                 <span>{user.firstName} {user.secondName}</span> <b className="caret"></b>
//                             </span>
//                             <ul className="dropdown-menu animated fadeInDown">
//                                 <li className="arrow"></li>
//                                 <li><span className="Header__nav-child" onClick={() => props.history.replace('/profile/info')}>My Profile</span></li>
//                                 <li><span className="Header__nav-child" onClick={() => props.history.replace('/profile/changepassword')}>Change Password</span></li>
//                                 <li onClick={() => logOut()}><span className="Header__nav-child">Log Out</span></li>
//                             </ul>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// }

// const mapStateToProps = (state) => {
//     const {setting, user} = state;
//     return {setting, user};
// }

// const mapDispatchToProps = (dispatch) => ({
//     toggleSideBar:(isOpen) => dispatch(actions.openLeftSide(isOpen)),
//     getCurrentUser:() => dispatch(actionUser.getCurrentUser())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));

//code temp

import React, { Component } from "react";
import {
  HashRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
// import { connect } from 'react-redux';

import "./Rightbar.scss";

class Rightbar extends Component {
  render() {
    return (
      // <div className="Home">
      //     <div className="Home__table">
      //         <span> TABLE </span>
      //     </div>
      // </div>
      <div>
        {/* <div className="preloader">
        <div className="loader">
          <div className="loader__figure" />
          <p className="loader__label">Elite admin</p>
        </div>
      </div> */}
        <div className="right-sidebar">
          <div className="slimscrollright">
            <div className="rpanel-title">
              {" "}
              Service Panel{" "}
              <span>
                <i className="ti-close right-side-toggle" />
              </span>
            </div>
            <div className="r-panel-body">
              <ul id="themecolors" className="m-t-20">
                <li>
                  <b>With Light sidebar</b>
                </li>
                <li>
                  <a data-skin="skin-default" className="default-theme">
                    1
                  </a>
                </li>
                <li>
                  <a data-skin="skin-green" className="green-theme">
                    2
                  </a>
                </li>
                <li>
                  <a data-skin="skin-red" className="red-theme">
                    3
                  </a>
                </li>
                <li>
                  <a data-skin="skin-blue" className="blue-theme working">
                    4
                  </a>
                </li>
                <li>
                  <a data-skin="skin-purple" className="purple-theme">
                    5
                  </a>
                </li>
                <li>
                  <a data-skin="skin-megna" className="megna-theme">
                    6
                  </a>
                </li>
                <li className="d-block m-t-30">
                  <b>With Dark sidebar</b>
                </li>
                <li>
                  <a
                    data-skin="skin-default-dark"
                    className="default-dark-theme "
                  >
                    7
                  </a>
                </li>
                <li>
                  <a data-skin="skin-green-dark" className="green-dark-theme">
                    8
                  </a>
                </li>
                <li>
                  <a data-skin="skin-red-dark" className="red-dark-theme">
                    9
                  </a>
                </li>
                <li>
                  <a data-skin="skin-blue-dark" className="blue-dark-theme">
                    10
                  </a>
                </li>
                <li>
                  <a data-skin="skin-purple-dark" className="purple-dark-theme">
                    11
                  </a>
                </li>
                <li>
                  <a data-skin="skin-megna-dark" className="megna-dark-theme ">
                    12
                  </a>
                </li>
              </ul>
              <ul className="m-t-20 chatonline">
                <li>
                  <b>Chat option</b>
                </li>
                <li>
                  <a>
                    <img
                      src="images/users/1.jpg"
                      alt="user-img"
                      className="img-circle"
                    />{" "}
                    <span>
                      Varun Dhavan{" "}
                      <small className="text-success">online</small>
                    </span>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="images/users/2.jpg"
                      alt="user-img"
                      className="img-circle"
                    />{" "}
                    <span>
                      Genelia Deshmukh{" "}
                      <small className="text-warning">Away</small>
                    </span>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="images/users/3.jpg"
                      alt="user-img"
                      className="img-circle"
                    />{" "}
                    <span>
                      Ritesh Deshmukh{" "}
                      <small className="text-danger">Busy</small>
                    </span>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="images/users/4.jpg"
                      alt="user-img"
                      className="img-circle"
                    />{" "}
                    <span>
                      Arijit Sinh <small className="text-muted">Offline</small>
                    </span>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="images/users/5.jpg"
                      alt="user-img"
                      className="img-circle"
                    />{" "}
                    <span>
                      Govinda Star{" "}
                      <small className="text-success">online</small>
                    </span>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="images/users/6.jpg"
                      alt="user-img"
                      className="img-circle"
                    />{" "}
                    <span>
                      John Abraham
                      <small className="text-success">online</small>
                    </span>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="images/users/7.jpg"
                      alt="user-img"
                      className="img-circle"
                    />{" "}
                    <span>
                      Hritik Roshan
                      <small className="text-success">online</small>
                    </span>
                  </a>
                </li>
                <li>
                  <a>
                    <img
                      src="images/users/8.jpg"
                      alt="user-img"
                      className="img-circle"
                    />{" "}
                    <span>
                      Pwandeep rajan{" "}
                      <small className="text-success">online</small>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// export default withRouter(Home);
export default Rightbar;
