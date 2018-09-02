// @flow
import React from 'react';
import { Button } from '../../../../components';

export default function RemoveFromCartButton({
    cartItem,
    product,
    removeFromCart,
    ...rest
}) {
    return (
        <Button
            {...rest}
            disabled={!cartItem}
            onClick={() => removeFromCart(product)}
        >
            -
        </Button>
    );
}
