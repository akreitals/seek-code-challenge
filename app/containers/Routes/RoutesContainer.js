import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from '../../scenes/Products/ProductsContainer';
import Checkout from '../../scenes/Checkout/Checkout';
import Login from '../../scenes/Login/Login';
import PrivateRoute from './PrivateRoute';

const Router = () => (
    <Switch>
        <PrivateRoute exact path="/" component={Products} />
        <PrivateRoute path="/checkout" component={Checkout} />
        <Route path="/login" component={Login} />
    </Switch>
);

export default Router;
