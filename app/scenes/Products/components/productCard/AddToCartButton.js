// @flow
import React from 'react';
import { Button } from '../../../../components';

export default function AddToCartButton({ cartItem, product, addToCart, ...rest }) {
    return (
        <Button {...rest} onClick={() => addToCart(product)}>
            Add to cart ({(cartItem && cartItem.quantity) || 0})
        </Button>
    );
}
