import React from 'react';
import { connect } from 'react-redux';
import { Button, Container, Currency, Heading } from '../../components';
import { cartOperations } from '../../state/cart';

function sort(items) {
    return items.sort((a, b) => a.id > b.id);
}

function CartScene(props) {
    return (
        <Container>
            <Heading.h1>Checkout</Heading.h1>

            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {sort(props.cartItems).map(item => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <Button onClick={() => props.addToCart(item)}>
                                    +
                                </Button>
                            </td>
                            <td>
                                <Button
                                    onClick={() => props.removeFromCart(item)}
                                >
                                    -
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Currency value={props.total / 100} />
        </Container>
    );
}

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems,
    total: state.cart.total
});

const mapDispatchToProps = {
    addToCart: cartOperations.addToCart,
    removeFromCart: cartOperations.removeFromCart
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartScene);
