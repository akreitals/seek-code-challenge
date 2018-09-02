// @flow
/* eslint-disable no-unused-vars, no-shadow */
import React from 'react';
import type { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { authService } from '../../modules/auth/AuthServiceFactory';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={props =>
            authService.isAuthenticated() === true ? (
                <Component {...props} />
            ) : (
                <Redirect to="/login" />
            )
        }
    />
);

export default PrivateRoute;
