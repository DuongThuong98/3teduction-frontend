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

import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="topbar">
          <nav className="navbar top-navbar navbar-expand-md navbar-dark">
            <div className="navbar-header">
              <a className="navbar-brand" href="index.html">
                <b>
                  <img
                    src="images/logo-icon.png"
                    className="dark-logo"
                  />
                  <img
                    src="images/logo-light-icon.png"
                    className="light-logo"
                  />
                </b>
                <span className="hidden-xs">
                  <span className="font-bold">English Web</span>
                </span>
              </a>
            </div>
            <div className="navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  {" "}
                  <a className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark">
                    <i className="ti-menu" />
                  </a>{" "}
                </li>
                <li className="nav-item">
                  {" "}
                  <a className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark">
                    <i className="icon-menu" />
                  </a>{" "}
                </li>
                <li className="nav-item">
                  <form className="app-search d-none d-md-block d-lg-block">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search & enter"
                    />
                  </form>
                </li>
              </ul>
              <ul className="navbar-nav my-lg-0">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle waves-effect waves-dark"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    <i className="ti-email" />
                    <div className="notify">
                      {" "}
                      <span className="heartbit" /> <span className="point" />{" "}
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right mailbox animated bounceInDown">
                    <ul>
                      <li>
                        <div className="drop-title">Notifications</div>
                      </li>
                      <li>
                        <div className="message-center">
                          <a>
                            <div className="btn btn-danger btn-circle">
                              <i className="fa fa-link" />
                            </div>
                            <div className="mail-contnet">
                              <h5>Luanch Admin</h5>{" "}
                              <span className="mail-desc">
                                Just see the my new admin!
                              </span>{" "}
                              <span className="time">9:30 AM</span>
                            </div>
                          </a>
                          <a>
                            <div className="btn btn-success btn-circle">
                              <i className="ti-calendar" />
                            </div>
                            <div className="mail-contnet">
                              <h5>Event today</h5>{" "}
                              <span className="mail-desc">
                                Just a reminder that you have event
                              </span>{" "}
                              <span className="time">9:10 AM</span>
                            </div>
                          </a>
                          <a>
                            <div className="btn btn-info btn-circle">
                              <i className="ti-settings" />
                            </div>
                            <div className="mail-contnet">
                              <h5>Settings</h5>{" "}
                              <span className="mail-desc">
                                You can customize this template as you want
                              </span>{" "}
                              <span className="time">9:08 AM</span>
                            </div>
                          </a>
                          <a>
                            <div className="btn btn-primary btn-circle">
                              <i className="ti-user" />
                            </div>
                            <div className="mail-contnet">
                              <h5>Pavan kumar</h5>{" "}
                              <span className="mail-desc">
                                Just see the my admin!
                              </span>{" "}
                              <span className="time">9:02 AM</span>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a
                          className="nav-link text-center link"
                          
                        >
                          {" "}
                          <strong>Check all notifications</strong>{" "}
                          <i className="fa fa-angle-right" />{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle waves-effect waves-dark"
                    id={2}
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    <i className="icon-note" />
                    <div className="notify">
                      {" "}
                      <span className="heartbit" /> <span className="point" />{" "}
                    </div>
                  </a>
                  <div
                    className="dropdown-menu mailbox dropdown-menu-right animated bounceInDown"
                    aria-labelledby={2}
                  >
                    <ul>
                      <li>
                        <div className="drop-title">
                          You have 4 new messages
                        </div>
                      </li>
                      <li>
                        <div className="message-center">
                        <a>
                            <div className="user-img">
                              {" "}
                              <img
                                src="images/users/1.jpg"
                                alt="user"
                                className="img-circle"
                              />{" "}
                              <span className="profile-status online pull-right" />{" "}
                            </div>
                            <div className="mail-contnet">
                              <h5>Pavan kumar</h5>{" "}
                              <span className="mail-desc">
                                Just see the my admin!
                              </span>{" "}
                              <span className="time">9:30 AM</span>
                            </div>
                            </a>
                          <a>
                            <div className="user-img">
                              {" "}
                              <img
                                src="images/users/2.jpg"
                                alt="user"
                                className="img-circle"
                              />{" "}
                              <span className="profile-status busy pull-right" />{" "}
                            </div>
                            <div className="mail-contnet">
                              <h5>Sonu Nigam</h5>{" "}
                              <span className="mail-desc">
                                I've sung a song! See you at
                              </span>{" "}
                              <span className="time">9:10 AM</span>
                            </div>
                            </a>
                          <a>
                            <div className="user-img">
                              {" "}
                              <img
                                src="../assets/images/users/3.jpg"
                                alt="user"
                                className="img-circle"
                              />{" "}
                              <span className="profile-status away pull-right" />{" "}
                            </div>
                            <div className="mail-contnet">
                              <h5>Arijit Sinh</h5>{" "}
                              <span className="mail-desc">I am a singer!</span>
                              <span className="time">9:08 AM</span>
                            </div>
                          </a>
                          <a>
                            <div className="user-img">
                              {" "}
                              <img
                                src="images/users/4.jpg"
                                alt="user"
                                className="img-circle"
                              />{" "}
                              <span className="profile-status offline pull-right" />{" "}
                            </div>
                            <div className="mail-contnet">
                              <h5>Pavan kumar</h5>{" "}
                              <span className="mail-desc">
                                Just see the my admin!
                              </span>{" "}
                              <span className="time">9:02 AM</span>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a
                          className="nav-link text-center link"
                          
                        >
                          {" "}
                          <strong>See all e-Mails</strong>{" "}
                          <i className="fa fa-angle-right" />{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item dropdown u-pro">
                  <a
                    className="nav-link dropdown-toggle waves-effect waves-dark profile-pic"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img src="images/users/1.jpg" alt="user" />{" "}
                    <span className="hidden-md-down">
                      Mark &nbsp;
                      <i className="fa fa-angle-down" />
                    </span>{" "}
                  </a>
                  <div className="dropdown-menu dropdown-menu-right animated flipInY">
                    <a className="dropdown-item" href="/my-profile">
                      <i className="ti-user" /> My Profile
                    </a>
                    <a className="dropdown-item" href="/">
                      <i className="ti-wallet" /> My Balance
                    </a>
                    <a className="dropdown-item" href="/change-password">
                      <i className="ti-email" /> Change password
                    </a>
                    <a className="dropdown-item" href="logout">
                      <i className="fa fa-power-off" />
                      Logout
                    </a>
                  </div>
                </li>
                <li className="nav-item right-side-toggle">
                  {" "}
                  <Link className="nav-link  waves-effect waves-light" to="#">
                    <i className="ti-settings" />
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

// export default withRouter(Home);
export default Header;
