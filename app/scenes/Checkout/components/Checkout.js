// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    Flex,
    Currency,
    Header,
    Heading,
    Text
} from '../../../components';
import CartItemModel from '../../../modules/checkout/CartItemModel';
import CheckoutList from './CheckoutList';

type CheckoutProps = {
    cartItems: Array<CartItemModel>,
    total: number,
    removeFromCart: func,
    addToCart: func
};

const Checkout = ({
    cartItems,
    total,
    removeFromCart,
    addToCart
}: CheckoutProps) => (
    <Container mb={5}>
        <Header />
        <Heading.h1 mb={2}>Checkout</Heading.h1>

        <CheckoutList
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
        />

        <Flex alignItems="center" justifyContent="flex-end">
            <Text fontSize={5} color="charcoal">
                Total:{' '}
            </Text>
            <Box ml={2} minWidth={150}>
                <Currency
                    textAlign="right"
                    color="primary"
                    fontSize={5}
                    value={total / 100}
                />
            </Box>
        </Flex>

        <Box mt={3} textAlign="right">
            <Link to="/">
                <Button.secondary mb={[2, 0]} width={[1, 1 / 3]}>
                    Keep Shopping
                </Button.secondary>
            </Link>
            <Button ml={[0, 2]} width={[1, 1 / 3]} disabled>
                Purchase
            </Button>
        </Box>
    </Container>
);

export default Checkout;
