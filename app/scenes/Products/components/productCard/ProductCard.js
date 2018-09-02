// @flow
import React from 'react';
import {
    Box,
    Currency,
    Text,
    Image,
    Heading,
    Card
} from '../../../../components';
import AddToCartButton from './AddToCartButton';
import RemoveFromCartButton from './RemoveFromCartButton';
import type ProductModel from '../../../../modules/products/ProductModel';
import type CartItemModel from '../../../../modules/checkout/CartItemModel';

type Props = {
    product: ProductModel,
    addToCart: func,
    cartItem: CartItemModel,
    removeFromCart: func
};

export default function ProductListItem({
    product,
    addToCart,
    cartItem,
    removeFromCart
}: Props) {
    return (
        <Card m={10} width={[300, 280]} boxShadowSize="sm">
            <Image
                mb={2}
                height={100}
                title={product.name}
                src={product.image}
                alt={product.name}
            />

            <Box p={2}>
                <Heading.h2 textAlign="center" mb={2}>
                    {product.name}
                </Heading.h2>

                <Text mb={2}>{product.description}</Text>

                <Currency
                    textAlign="center"
                    fontSize={4}
                    mb={2}
                    value={product.price / 100}
                />

                <AddToCartButton
                    mb={2}
                    mr={2}
                    width={4 / 5}
                    cartItem={cartItem}
                    product={product}
                    addToCart={addToCart}
                />

                <RemoveFromCartButton
                    mb={2}
                    width={1 / 6}
                    product={product}
                    removeFromCart={removeFromCart}
                    cartItem={cartItem}
                />
            </Box>
        </Card>
    );
}
