import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import routes from "./RouterConfig";
import AuthenRoute from "./AuthenRoute";
import App from "./../App";

function Routers(props) {
  const { clients, componentProps } = props;
  const position = {
    position: "absolute",
    right: "6rem",
    top: "10rem"
  };

  return (
    <Router>
      <App>
        <React.Fragment>
          <Switch>
            {routes.map((route, i) => {
              const RenderComponent = route.auth ? (
                <AuthenRoute
                  key={i}
                  component={route.component}
                  exact={route.exact}
                  path={route.path}
                  pageTitle={route.pageTitle}
                  componentProps={route.componentProps}
                />
              ) : (
                <Route
                  exact={route.exact}
                  path={route.path}
                  render={props => (
                    <route.component
                      {...props}
                      {...route.componentProps}
                      pageTitle={route.pageTitle}
                    />
                  )}
                  key={i}
                />
              );
              return RenderComponent;
            })}
          </Switch>
        </React.Fragment>
      </App>
    </Router>
  );
}

const mapStateToProps = state => {
  const { clients } = state;
  return { alert };
};

export default connect(mapStateToProps, null)(Routers);
