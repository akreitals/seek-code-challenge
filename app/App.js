import React, { Component } from 'react';
import { Text, Heading } from './components';
import { productRepository } from './modules/product/repository/ProductRepositoryFactory';

export default class App extends Component {
    async componentDidMount() {
        const products = await productRepository.getAll();
        console.log(products);
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
