// @flow
import React from 'react';
import { Box, Link, Container, Flex, Text } from '..';
import { Link as RouteLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { sessionOperations } from '../../state/session';
import theme, { colors } from '../theme';

const Root = Flex.withComponent('header').extend`
    text-align: right;
    border-bottom: 6px solid ${colors.blueDark};
    max-width: 100%;
    margin-bottom: ${theme.space[3]}px;
`;

Root.defaultProps = {
    py: [5, 6],
    align: 'right',
    justify: 'right'
};

const Wrapper = Container.withComponent(Flex);
Wrapper.defaultProps = {
    flexDirection: 'column',
    width: 1,
    py: [2]
};

type Props = {
    logout: func
};

const Header = ({ logout }: Props) => (
    <Root>
        <Wrapper>
            <Box py={2}>
                <Flex justifyContent="flex-end">
                    <Link onClick={() => logout()}>Logout</Link>
                    <Text mx={3}>|</Text>
                    <RouteLink to="/checkout">Cart</RouteLink>
                </Flex>
            </Box>
        </Wrapper>
    </Root>
);

const mapStateToProps = state => ({
    cartItems: state.cart.cartItems
});

const mapDispatchToProps = {
    logout: sessionOperations.logout
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(Header);
