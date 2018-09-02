import React from 'react';
import { Text, Image, Heading, Card } from '../../../../components';
import AddToCartButton from '../productList/AddToCartButton';
import RemoveFromCartButton from '../productList/RemoveFromCartButton';

export default function ProductListItem({
    product,
    addToCart,
    cartItem,
    removeFromCart
}) {
    return (
        <Card m={10} width={300} boxShadowSize="sm">
            <Heading.h3>{product.name}</Heading.h3>
            <Image
                height={100}
                title={product.name}
                src={product.image}
                alt={product.name}
            />
            <Text>{product.description}</Text>
            <Text>${product.price}</Text>
            <AddToCartButton
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
