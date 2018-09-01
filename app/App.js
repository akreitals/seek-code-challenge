import React, { Component } from 'react';
import { Text, Heading } from './components';
import { productRepository } from './modules/products/repository/ProductRepositoryFactory';
import { customerRepository } from './modules/customers/repository/CustomerRespoistoryFactory';
import { checkoutProvider } from './modules/checkout/CheckoutProviderFactory';

export default class App extends Component {
    async componentDidMount() {
        const products = await productRepository.getAll();
        console.log(products);
        const customer = await customerRepository.findById('1');
        console.log(customer);

        const checkout = checkoutProvider.createInstance(
            customer.discountRules
        );

        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        checkout.addItem(products[0]);
        checkout.addItem(products[2]);
        checkout.addItem(products[2]);

        console.log(checkout);
    }

    render() {
        return (
            <div>
                <Heading.h1>React app now running</Heading.h1>
                <Text color="primary">Some styled text</Text>
            </div>
        );
    }
}
