import React, { useState, useEffect, Component } from "react";
import {
  HashRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import { connect } from "react-redux";
import "./Login.scss";
import * as api from "./../../utils/api";
import * as actions from "./../../redux/actions/actionUser";
import jwt from "jwt-decode";

function Login(props) {
  const [showPassword, setShowPassword] = useState({
    isShow: false,
  });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    // if (localStorage.getItem("token")) {
    //   props.history.push("/");
    // }
  }, []);

  // componentDidMount() {
  //   if (localStorage.getItem("token")) {
  //     this.props.history.push("/");
  //   }
  // }

  const handleOnChange = (e) => {
    let target = e.target;
    user[target.name] = target.value;
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };

  const login = (event) => {
    event.preventDefault();
    const { history } = props;
    history.push("/home");
    api
      .login(user)
      .then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        props.setCurrentUser(res.data);
        props.history.push("/home");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <React.Fragment>
      <section id="wrapper">
        <div
          className="login-register"
          style={{
            backgroundImage:
              "https://image.freepik.com/free-vector/workspace-cartoon-style_23-2147508020.jpg",
          }}
        >
          <div className="login-box card">
            <div className="card-body">
              <form
                className="form-horizontal form-material"
                id="loginform"
                onSubmit={login}
              >
                <h3 className="text-center m-b-20">Sign In</h3>
                <div className="form-group ">
                  <div className="col-xs-12">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-xs-12">
                    <input
                      className="form-control"
                      autoComplete="current-password"
                      type={showPassword.isShow ? "text" : "password"}
                      required
                      name="password"
                      placeholder="Password"
                      onChange={handleOnChange}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-12">
                    <div className="d-flex no-block align-items-center">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                        <label className="custom-control-label">
                          Remember me
                        </label>
                      </div>
                      <div className="ml-auto">
                        <Link
                          to="forgot/password"
                          id="to-recover"
                          className="text-muted"
                        >
                          <i className="fas fa-lock m-r-5"></i> Forgot pwd?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-group text-center">
                  <div className="col-xs-12 p-b-20">
                    <button
                      className="btn btn-block btn-lg btn-info btn-rounded"
                      type="submit"
                    >
                      Log In
                    </button>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 m-t-10 text-center">
                    <div className="social">
                      <button
                        className="btn  btn-facebook"
                        data-toggle="tooltip"
                        title="Login with Facebook"
                      >
                        {" "}
                        <i
                          aria-hidden="true"
                          className="fab fa-facebook-f"
                        ></i>{" "}
                      </button>
                      <button
                        className="btn btn-googleplus m-l-5"
                        data-toggle="tooltip"
                        title="Login with Google"
                      >
                        {" "}
                        <i
                          aria-hidden="true"
                          className="fab fa-google-plus-g"
                        ></i>{" "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form-group m-b-0">
                  <div className="col-sm-12 text-center">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-info m-l-5">
                      <b>Sign Up</b>
                    </Link>
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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (props) => dispatch(actions.setCurrentUser(props)),
});

export default connect(null, mapDispatchToProps)(withRouter(Login));
