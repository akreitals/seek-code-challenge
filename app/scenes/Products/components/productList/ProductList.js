// @flow
import React from 'react';
import { connect } from 'react-redux';
import ProductListItem from '../productCard/ProductCard';
import { Flex } from '../../../../components';
import { cartOperations } from '../../../../state/cart';
import type ProductModel from '../../../../modules/products/ProductModel';
import type { Cart } from '../../../../modules/checkout/Checkout';

type Props = {
    products: Array<ProductModel>,
    addToCart: func,
    removeFromCart: func,
    cart: Cart
};

function ProductList({ products, addToCart, removeFromCart, cart }: Props) {
    return (
        <Flex flexWrap="wrap" justifyContent="center">
            {products.map(product => (
                <ProductListItem
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                    cartItem={
                        cart.cartItems.filter(
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
