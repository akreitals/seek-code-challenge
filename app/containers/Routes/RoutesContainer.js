import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from '../../scenes/Products/ProductsContainer';
import Checkout from '../../scenes/Checkout/Checkout';

const Router = () => (
    <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/checkout" component={Checkout} />
    </Switch>
);

export default Router;
