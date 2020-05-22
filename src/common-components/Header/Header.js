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
         <header className="topbar">
            <nav className="navbar top-navbar navbar-expand-md navbar-dark">
              <div className="navbar-header">
                <a className="navbar-brand" href="index.html">
                  {/* Logo icon */}
                  <b>
                    <img
                      src="images/logo-icon.png"
                      alt="homepage"
                      className="dark-logo"
                    />
                    <img
                      src="images/logo-light-icon.png"
                      alt="homepage"
                      className="light-logo"
                    />
                  </b>
                  <span className="hidden-xs">
                    <span className="font-bold">elite</span>university
                  </span>
                </a>
              </div>
              <div className="navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark"
                     
                    >
                      <i className="ti-menu" />
                    </a>{" "}
                  </li>
                  <li className="nav-item">
                    {" "}
                    <a
                      className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark"
                     
                    >
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
                      href
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
                            href="javascript:void(0);"
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
                      href
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
                                <span className="mail-desc">
                                  I am a singer!
                                </span>
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
                            href="javascript:void(0);"
                          >
                            {" "}
                            <strong>See all e-Mails</strong>{" "}
                            <i className="fa fa-angle-right" />{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item dropdown mega-dropdown">
                    {" "}
                    <a
                      className="nav-link dropdown-toggle waves-effect waves-dark"
                      href
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="ti-layout-width-default" />
                    </a>
                    <div className="dropdown-menu animated bounceInDown">
                      <ul className="mega-dropdown-menu row">
                        <li className="col-lg-3 col-xlg-2 m-b-30">
                          <h4 className="m-b-20">CAROUSEL</h4>
                          <div
                            id="carouselExampleControls"
                            className="carousel slide"
                            data-ride="carousel"
                          >
                            <div className="carousel-inner" role="listbox">
                              <div className="carousel-item active">
                                <div className="container">
                                  {" "}
                                  <img
                                    className="d-block img-fluid"
                                    src="images/big/img1.jpg"
                                    alt="First slide"
                                  />
                                </div>
                              </div>
                              <div className="carousel-item">
                                <div className="container">
                                  <img
                                    className="d-block img-fluid"
                                    src="images/big/img2.jpg"
                                    alt="Second slide"
                                  />
                                </div>
                              </div>
                              <div className="carousel-item">
                                <div className="container">
                                  <img
                                    className="d-block img-fluid"
                                    src="images/big/img3.jpg"
                                    alt="Third slide"
                                  />
                                </div>
                              </div>
                            </div>
                            <a
                              className="carousel-control-prev"
                              href="#carouselExampleControls"
                              role="button"
                              data-slide="prev"
                            >
                              {" "}
                              <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                              />{" "}
                              <span className="sr-only">Previous</span>{" "}
                            </a>
                            <a
                              className="carousel-control-next"
                              href="#carouselExampleControls"
                              role="button"
                              data-slide="next"
                            >
                              {" "}
                              <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                              />{" "}
                              <span className="sr-only">Next</span>{" "}
                            </a>
                          </div>
                        </li>
                        <li className="col-lg-3 m-b-30">
                          <h4 className="m-b-20">ACCORDION</h4>
                          <div className="accordion" id="accordionExample">
                            <div className="card m-b-0">
                              <div
                                className="card-header bg-white p-0"
                                id="headingOne"
                              >
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseOne"
                                    aria-expanded="true"
                                    aria-controls="collapseOne"
                                  >
                                    Collapsible Group Item #1
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseOne"
                                className="collapse show"
                                aria-labelledby="headingOne"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high.
                                </div>
                              </div>
                            </div>
                            <div className="card m-b-0">
                              <div
                                className="card-header bg-white p-0"
                                id="headingTwo"
                              >
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseTwo"
                                    aria-expanded="false"
                                    aria-controls="collapseTwo"
                                  >
                                    Collapsible Group Item #2
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseTwo"
                                className="collapse"
                                aria-labelledby="headingTwo"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high.
                                </div>
                              </div>
                            </div>
                            <div className="card m-b-0">
                              <div
                                className="card-header bg-white p-0"
                                id="headingThree"
                              >
                                <h5 className="mb-0">
                                  <button
                                    className="btn btn-link collapsed"
                                    type="button"
                                    data-toggle="collapse"
                                    data-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                  >
                                    Collapsible Group Item #3
                                  </button>
                                </h5>
                              </div>
                              <div
                                id="collapseThree"
                                className="collapse"
                                aria-labelledby="headingThree"
                                data-parent="#accordionExample"
                              >
                                <div className="card-body">
                                  Anim pariatur cliche reprehenderit, enim
                                  eiusmod high.
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="col-lg-3  m-b-30">
                          <h4 className="m-b-20">CONTACT US</h4>
                          <form>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                id="exampleInputname1"
                                placeholder="Enter Name"
                              />{" "}
                            </div>
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="Enter email"
                              />
                            </div>
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                id="exampleTextarea"
                                rows={3}
                                placeholder="Message"
                                defaultValue={""}
                              />
                            </div>
                            <button type="submit" className="btn btn-info">
                              Submit
                            </button>
                          </form>
                        </li>
                        <li className="col-lg-3 col-xlg-4 m-b-30">
                          <h4 className="m-b-20">List style</h4>
                          <ul className="list-style-none">
                            <li>
                              <a>
                                <i className="fa fa-check text-success" />
                                You can give link
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="fa fa-check text-success" />
                                Give link
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="fa fa-check text-success" />
                                Another Give link
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="fa fa-check text-success" />
                                Forth link
                              </a>
                            </li>
                            <li>
                              <a>
                                <i className="fa fa-check text-success" />
                                Another fifth link
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li className="nav-item dropdown u-pro">
                    <a
                      className="nav-link dropdown-toggle waves-effect waves-dark profile-pic"
                      href
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <img
                        src="images/users/1.jpg"
                        alt="user"
                        className
                      />{" "}
                      <span className="hidden-md-down">
                        Mark &nbsp;
                        <i className="fa fa-angle-down" />
                      </span>{" "}
                    </a>
                    <div className="dropdown-menu dropdown-menu-right animated flipInY">
                      <a className="dropdown-item">
                        <i className="ti-user" /> My Profile
                      </a>
                      <a className="dropdown-item">
                        <i className="ti-wallet" /> My Balance
                      </a>
                      <a className="dropdown-item">
                        <i className="ti-email" /> Inbox
                      </a>
                      <div className="dropdown-divider" />
                      <a className="dropdown-item">
                        <i className="ti-settings" /> Account Setting
                      </a>
                      <div className="dropdown-divider" />
                      <a href="pages-login.html" className="dropdown-item">
                        <i className="fa fa-power-off" />
                        Logout
                      </a>
                    </div>
                  </li>
                  <li className="nav-item right-side-toggle">
                    {" "}
                    <a
                      className="nav-link  waves-effect waves-light"
                     
                    >
                      <i className="ti-settings" />
                    </a>
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
