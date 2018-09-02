// @flow
import React from 'react';
import { connect } from 'react-redux';
import ProductListItem from '../productCard/ProductCard';
import { Flex } from '../../../../components';
import { cartOperations } from '../../../../state/cart';

function ProductList(props) {
    return (
        <Flex>
            {props.products.map(product => (
                <ProductListItem
                    key={product.id}
                    product={product}
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFromCart}
                    cartItem={
                        props.cart.cartItems.filter(
                            cartItem => cartItem.id === product.id
                        )[0]
                    }
                />
            ))}
        </Flex>
    );
}

const mapStateToProps = state => ({ cart: state.cart });

const mapDispatchToProps = {
    addToCart: cartOperations.addToCart,
    removeFromCart: cartOperations.removeFromCart
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductList);
