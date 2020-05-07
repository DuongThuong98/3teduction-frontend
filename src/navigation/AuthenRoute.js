import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Link,
  Route,
  Switch,
  Redirect,
  withRouter
} from "react-router-dom";
import { connect } from "react-redux";
import { toastr } from "react-redux-toastr";

import Header from "./../common-components/Header/Header";
import Sidebar from "./../common-components/Sidebar/Sidebar";
import * as actionUser from "./../redux/actions/actionUser";

function AuthenRoute({ component: Component, pageTitle, componentProps, ...rest }) {

  if (pageTitle) {
    window.document.title = pageTitle;
  }

  let expiredTime = localStorage.getItem("expiredTime");
  let currentTime = new Date();
  currentTime = Date.parse(currentTime);

  if (expiredTime < currentTime) {
    console.log("EXPIRED TIME");
    rest.history.push("/authentication/signin");
    localStorage.removeItem("token");
    localStorage.removeItem("expiredTime");
    toastr.error("Your account has expired");
  }

  const { setting } = rest;
  return (
    <React.Fragment>
      <Route
        {...rest}
        render={props =>
          localStorage.getItem("token") ? (
            <React.Fragment>
              <div
                id="page-container"
                className={`fade page-sidebar-fixed page-header-fixed in ${
                  setting.isOpenLeftSide ? "page-sidebar-toggled" : ""
                  }`}
              >
                {setting.isLoading ? (
                  <div className="container-loader">
                    <div className="loader"></div>
                  </div>
                ) : (
                    ""
                  )}
                <Header />
                <Sidebar />
                <div
                  className="content"
                  style={{ background: "#d9e0e7", height: "100%" }}
                >
                  <Component {...props} {...componentProps} />
                </div>
              </div>
            </React.Fragment>
          ) : (
              <Redirect
                to={{
                  pathname: "/authentication/signin",
                  state: { from: props.location }
                }}
              />
            )
        }
      />
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  const { setting } = state;
  return { setting };
};

// const mapDispatchToProps = (dispatch) => ({
// 	getCurrentUser: () => dispatch(actionUser.getCurrentUser())
// })

export default connect(mapStateToProps, null)(withRouter(AuthenRoute));
