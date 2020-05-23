import React, { Component } from "react";
import {
  HashRouter as Router,
  Link,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
// import { connect } from 'react-redux';

class ForgotPassword extends Component {
  render() {
    return (
      <div>
        <div className="preloader">
          <div className="loader">
            <div className="loader__figure" />
            <p className="loader__label">Elite admin</p>
          </div>
        </div>
        <section id="wrapper">
          <div className="login-register" style={{backgroundImage: 'url(../assets/images/background/login-register.jpg)'}}>
            <div className="login-box card">
              <div className="card-body">
                <form className="form-horizontal form-material" id="loginform" action="index.html">
                  <h3 className="text-center m-b-20">Forgot Password</h3>
                  <div className="form-group ">
                    <div className="col-xs-12">
                      <label className="control-label">Nhập email để khôi phục mật khẩu</label>
                      <input className="form-control" type="email" required placeholder="Email" />
                    </div>
                  </div>
                  <div className="form-group text-center">
                    <div className="col-xs-12">
                      <button className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light" type="submit">Submit</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* Bootstrap tether Core JavaScript */}
      </div>
    );
  }
}

// export default withRouter(Home);
export default ForgotPassword;
