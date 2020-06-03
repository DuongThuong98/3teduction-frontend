import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
export const PrivateRoute = ({ component: Component, ...rest }) => (
   <Route {...rest} render={props => (
       localStorage.getItem('auth') 
       ? <Component {...props} /> 
       : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
   )} />
)