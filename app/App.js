import React, { Component } from 'react';
import { Text, Heading } from './components';
import { productRepository } from './modules/products/repository/ProductRepositoryFactory';
import { customerRepository } from './modules/customers/repository/CustomerRespoistoryFactory';

export default class App extends Component {
    async componentDidMount() {
        const products = await productRepository.getAll();
        console.log(products);
        const customer = await customerRepository.findById('1');
        console.log(customer);
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
