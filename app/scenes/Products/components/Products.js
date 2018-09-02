// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Container,
    Heading,
    Loader,
    Text,
    Button,
    Header,
    Flex
} from '../../../components';
import ProductList from './productList/ProductList';
import type ProductModel from '../../../modules/products/ProductModel';

type Props = {
    error: Object,
    products: Array<ProductModel>,
    loading: boolean
};

function Products({ error, products, loading }: Props) {
    return (
        <Box>
            <Header />
            <Container mb={5}>
                <Heading.h1>Products</Heading.h1>
                {loading && <Loader />}

                {error && <Text color="error">Could not load Products</Text>}

                {products && (
                    <Box mt={[3, 4]}>
                        <ProductList products={products} />
                        <Flex justifyContent="center">
                            <Link to="/checkout">
                                <Button.secondary
                                    mt={3}
                                    width={[1, 300]}
                                    px={4}
                                    py={2}
                                >
                                    View Cart
                                </Button.secondary>
                            </Link>
                        </Flex>
                    </Box>
                )}
            </Container>
        </Box>
    );
}

export default Products;
