// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { cartOperations } from '../../state/cart';
import WithCart from '../../containers/withCart';
import Checkout from './components/Checkout';
import type CartItemModel from '../../modules/checkout/CartItemModel';

type Props = {
    cartItems: Array<CartItemModel>,
    total: number,
    addToCart: func,
    removeFromCart: func
};

type State = {};

class CartScene extends Component<Props, State> {
    render() {
        const { cartItems, total, addToCart, removeFromCart } = this.props;
        return (
            <Checkout
                cartItems={cartItems}
                total={total}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
        );
    }
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
    total: state.cart.total
});

const mapDispatchToProps = {
    addToCart: cartOperations.addToCart,
    removeFromCart: cartOperations.removeFromCart
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    WithCart
)(CartScene);
