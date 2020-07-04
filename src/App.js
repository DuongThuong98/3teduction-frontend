import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import {
  Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
} from "react-router-dom";
import Menu from "./common-components/Menu/Menu";
import routes from "./routes";
import Header from "./common-components/Header/Header";
import Rightbar from "./common-components/Rightbar/Rightbar";
import Login from "./components/Login/Login";
import { history } from './helpers/index';
import jwt_decode from "jwt-decode";

class App extends Component {
  if (pageTitle) {
    window.document.title = pageTitle;
  }

  render () {
    // localStorage.setItem('token', "aaaaaaaaaaaaaaaaaaaaaa");
    var token = localStorage.getItem("token") || true;
    return (
      <div className="App">
        <Router history={history}>
          <Switch>{this.renderRoutes(routes)}</Switch>
        </Router>
      </div>
    );
  }

  renderRoutes = (routes) => {
    var token = localStorage.getItem("token");

    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        const { auth } = route;
        if (!auth) {
          if (token) {

            var decoded = jwt_decode(token)
            var role = decoded.role;

            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={() => <div id="main-wrapper">
                  <Header />
                  <Menu role={{ role }} />
                  <div className="page-wrapper">
                    <div className="container-fluid">
                      {React.createElement(route.main)}
                      <Rightbar />
                    </div>
                  </div>
                  <footer className="footer"> © 2019 Eliteadmin by themedesigner.in</footer>
                </div>}
              />

            );
          } else {
            return <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={() => <Redirect key={index} to="/login" />}
            />
          }
        }

        return <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      });
    }

    return result;
  };
}
// import ForgotPassword from './components/ForgotPassword';
// import AddTeacher from './components/AddTeacher';

// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <AddTeacher/>
//     </div>
//   );
// }

export default App;
