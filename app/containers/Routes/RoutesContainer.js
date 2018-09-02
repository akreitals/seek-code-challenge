import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from '../../scenes/Products/ProductsSceneContainer';
import Checkout from '../../scenes/Checkout/CheckoutSceneContainer';
import Login from '../../scenes/Login/LoginSceneContainer';
import PrivateRoute from './PrivateRoute';

const Router = () => (
    <Switch>
        <PrivateRoute exact path="/" component={Products} />
        <PrivateRoute path="/checkout" component={Checkout} />
        <Route path="/login" component={Login} />
    </Switch>
);

export default Router;
