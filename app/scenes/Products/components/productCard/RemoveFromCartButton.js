// @flow
import React from 'react';
import { Button } from '../../../../components';

export default function RemoveFromCartButton({ product, removeFromCart }) {
    return <Button onClick={() => removeFromCart(product)}>Remove</Button>;
}
