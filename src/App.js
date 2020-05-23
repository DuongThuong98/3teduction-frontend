import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";
import Menu from "./common-components/Menu/Menu";
import routes from "./routes";
import Header from "./common-components/Header/Header";
import Rightbar from "./common-components/Rightbar/Rightbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div id="main-wrapper">
            <Header></Header>
            <Menu></Menu>
            <div class="page-wrapper">
              <div class="container-fluid">
                <Switch>{this.showContentMenu(routes)}</Switch>
                <Rightbar></Rightbar>
              </div>
            </div>
            <footer class="footer">
              © 2019 Eliteadmin by themedesigner.in
            </footer>
          </div>
        </div>
      </Router>
    );
  }

  showContentMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          ></Route>
        );
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
