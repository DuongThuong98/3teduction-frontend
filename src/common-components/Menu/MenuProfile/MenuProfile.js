import React, { Component } from "react";
import {
  HashRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";

const menusProfile = [
  {
    name: "Profile",
    to: "/my-profile",
    exact: true,
    icon: "ti-user",
  },
  {
    name: "Balance",
    to: "/",
    exact: true,
    icon: "ti-wallet",
  },
  {
    name: "Change password",
    to: "/change-password",
    exact: true,
    icon: "ti-email",
  },
  {
    name: "Logout",
    to: "/logout",
    exact: true,
    icon: "fa fa-power-off",
  },
];

const MenuProfileLink = ({ label, to, activeOnlyWhenExact, icon }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <li className={active}>
            <Link className="waves-effect waves-dark" to={to}>
              {" "}
              <i className={icon} />
              <span className="hide-menu"> {label}</span>
            </Link>
          </li>
        );
      }}
    ></Route>
  );
};

class MenuProfile extends Component {
  render() {
    return (
      <li className="user-pro">
        {" "}
        <Link
          className="has-arrow waves-effect waves-dark"
          aria-expanded="false"
        >
          <img src="images/users/1.jpg" alt="user-img" className="img-circle" />
          <span className="hide-menu">Prof. Mark</span>
        </Link>
        <ul aria-expanded="false" className="collapse">
          {this.showMenus(menusProfile)}
        </ul>
      </li>
    );
  }

  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuProfileLink
            key={index}
            to={menu.to}
            label={menu.name}
            activeOnlyWhenExact={menu.active}
            icon={menu.icon}
          />
        );
      });
    }
    return result;
  };
}

export default MenuProfile;
