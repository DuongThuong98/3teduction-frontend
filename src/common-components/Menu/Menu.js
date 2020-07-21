import React, { Component } from "react";
import {
  HashRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter,
  Switch,
} from "react-router-dom";
// import { connect } from 'react-redux';

import "./Menu.scss";
import menus from "../../menus";
import menusTeacher from "../../menus-teacher";
import menusStudent from "../../menus-student";
import MenuProfile from "./MenuProfile/MenuProfile";

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const role = this.props.role.role;
    return (
      <div>
        <aside className="left-sidebar">
          <div className="scroll-sidebar">
            <nav className="sidebar-nav">
              <ul id="sidebarnav">
                {role === "Admin" &&
                  this.showMenus(menus)
                }
                {role === "Teacher" &&
                  this.showMenus(menusTeacher)
                }
                {role === "Student" &&
                  this.showMenus(menusStudent)
                }
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
        return (
          <MenuLink
            key={index}
            to={menu.to}
            label={menu.name}
            activeOnlyWhenExact={menu.active}
            icon={menu.icon}
          ></MenuLink>
        );
      });
    }
    return result;
  };

  showMenusTeacher = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            to={menu.to}
            label={menu.name}
            activeOnlyWhenExact={menu.active}
            icon={menu.icon}
          ></MenuLink>
        );
      });
    }
    return result;
  };

  showMenusStudent = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            to={menu.to}
            label={menu.name}
            activeOnlyWhenExact={menu.active}
            icon={menu.icon}
          ></MenuLink>
        );
      });
    }
    return result;
  };
}

const MenuLink = ({ label, to, activeOnlyWhenExact, icon }) => {
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
              <span className="hide-menu">{label}</span>
            </Link>
          </li>
        );
      }}
    ></Route>
  );
};

// export default withRouter(Home);
export default Menu;
