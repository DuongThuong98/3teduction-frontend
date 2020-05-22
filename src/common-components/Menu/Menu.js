import React, { Component } from "react";
import {
  HashRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
// import { connect } from 'react-redux';

import "./Menu.scss";

const menus = [
  {
    name: "Home",
    to: "/",
    exact: true,
  },
  {
    name: "Teacher",
    to: "/teachers",
    exact: true,
  },
  {
    name: "Student",
    to: "/students",
    exact: true,
  },
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link className="waves-effect waves-dark" to={to}> <i className="icon-speedometer" /><span className="hide-menu">{label}</span>
            </Link>
         </li>
        );
      }}
    ></Route>
  );
};

class Menu extends Component {
  render() {
    return (
      <div>
         <aside className="left-sidebar">
            <div className="scroll-sidebar">
              <nav className="sidebar-nav">
                <ul id="sidebarnav">
                  <li className="user-pro">
                    {" "}
                    <a
                      className="has-arrow waves-effect waves-dark"
                      aria-expanded="false"
                    >
                      <img
                        src="images/users/1.jpg"
                        alt="user-img"
                        className="img-circle"
                      />
                      <span className="hide-menu">Prof. Mark</span>
                    </a>
                    <ul aria-expanded="false" className="collapse">
                      <li>
                        <a>
                          <i className="ti-user" /> My Profile
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="ti-wallet" /> My Balance
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="ti-email" /> Inbox
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="ti-settings" /> Account Setting
                        </a>
                      </li>
                      <li>
                        <a>
                          <i className="fa fa-power-off" /> Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                  {this.showMenus(menus)}
                </ul>
              </nav>
            </div>
          </aside>
      </div>
    );
  }

showMenus = (menus) => {
  var result = null;
  if (menus.length > 0) {
    result = menus.map((menu, index) => {
     return( <MenuLink key={index}
       to={menu.to} 
       label={menu.name}
       activeOnlyWhenExact={menu.active}></MenuLink>
     )})
  }
  return result;
};
}

// export default withRouter(Home);
export default Menu;