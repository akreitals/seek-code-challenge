import React from 'react';
import { Currency, Text, Image, Heading, Card } from '../../../../components';
import AddToCartButton from './AddToCartButton';
import RemoveFromCartButton from './RemoveFromCartButton';

export default function ProductListItem({
    product,
    addToCart,
    cartItem,
    removeFromCart
}) {
    return (
        <Card m={10} minWidth={250} boxShadowSize="sm">
            <Image mb={2}
                height={100}
                title={product.name}
                src={product.image}
                alt={product.name}
            />
            <Heading.h2 mb={2}>{product.name}</Heading.h2>
            <Text mb={2}>{product.description}</Text>
            <Currency mb={2} value={product.price / 100} />
            <AddToCartButton mb={2}
                cartItem={cartItem}
                product={product}
                addToCart={addToCart}
            />

             {cartItem ? (
                <RemoveFromCartButton
                    product={product}
                    removeFromCart={removeFromCart}
                />
             ) : null}
        </Card>
    );
}
