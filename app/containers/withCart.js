// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Flex, Loader } from '../components';
import { authService } from '../modules/auth/AuthServiceFactory';
import { customerRepository } from '../modules/customers/repository/CustomerRespoistoryFactory';
import { checkoutProvider } from '../modules/checkout/CheckoutProviderFactory';
import { cookies } from '../modules/utils/session/SessionCookiesFactory';

const Root = styled(Flex)`
    min-height: 100vh;
`;

const WithCart = WrappedComponent =>
    class Cart extends Component {
        constructor() {
            super();
            this.state = {
                isLoading: true
            };
        }

        async componentDidMount() {
            this.setState({ isLoading: true });

            // // if we are logged in but don't have a customer then fetch and create new checkout
            // // TODO: restructure API (no time to do now)
            const customer = authService.getCustomer();

            if (!customer) {
                await this._createCheckout();
            }

            this.setState({ isLoading: false });
        }

        render() {
            if (this.props.loading) {
                return (
                    <Root justifyContent="center" alignItems="center">
                        <Loader />
                    </Root>
                );
            }

            return <WrappedComponent {...this.props} />;
        }

        /**
         * Create a new checkout for the customer if one does not exist
         * @private
         */
        async _createCheckout() {
            const user = cookies.getItem('user');
            const customerData = await customerRepository.findById(user.id);
            authService.setCustomer(customerData);
            checkoutProvider.createInstance(customerData.discountRules);
        }
    };

export default WithCart;
