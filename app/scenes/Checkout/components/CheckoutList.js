// @flow
import React from 'react';
import styled from 'styled-components';
import { Link as RouteLink } from 'react-router-dom';
import { Button, Text, Link, Box } from '../../../components';
import CartItemModel from '../../../modules/checkout/CartItemModel';
import theme from '../../../components/theme';

type Props = {
    cartItems: Array<CartItemModel>,
    removeFromCart: func,
    addToCart: func
};

const sort = items => items.sort((a, b) => a.id > b.id);

const CheckoutTable = styled('table')`
    width: 100%;
    margin-bottom: ${theme.space[4]}px;
    tr {
        text-align: left;
    }
`;

const CheckoutList = ({ cartItems, removeFromCart, addToCart }: Props) => {
    if (cartItems.length < 1) {
        return (
            <Box>
                <Text textAlign="center" color="midGray" my={5}>
                    You dont have any product in your cart.
                    <RouteLink to="/">
                        <Link ml="4px" mb={[2, 0]} width={[1, 1 / 3]}>
                            Browse products
                        </Link>
                    </RouteLink>
                </Text>
            </Box>
        );
    }
    return (
        <CheckoutTable>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th />
                    <th />
                </tr>
            </thead>
            <tbody>
                {sort(cartItems).map(item => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.quantity}</td>
                        <td>
                            <Button onClick={() => addToCart(item)}>+</Button>
                        </td>
                        <td>
                            <Button onClick={() => removeFromCart(item)}>
                                -
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </CheckoutTable>
    );
};

export default CheckoutList;
