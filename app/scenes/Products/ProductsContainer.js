import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Box,
    Container,
    Heading,
    Loader,
    Text,
    Button
} from '../../components';
import ProductList from './components/productList/ProductList';
import { productOperations } from '../../state/products';
import { cartOperations } from '../../state/cart';
import { customerRepository } from '../../modules/customers/repository/CustomerRespoistoryFactory';

class ProductsContainer extends Component {
    async componentDidMount() {
        if (this.props.products.length === 0) {
            this.props.fetchProducts();
        }

        const customer = await customerRepository.findById(1);
        this.props.newCart(customer.discountRules);
    }

    render() {
        const { products, loading, error } = this.props;
        return (
            <Container>
                <Heading.h1>Products</Heading.h1>
                {loading && <Loader />}

                {error && <Text color="warning">Could not load Products</Text>}

                {products && (
                    <Box>
                        <ProductList products={products} />
                        <Link to="/checkout">
                            <Button>View Cart</Button>
                        </Link>
                    </Box>
                )}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.products,
    loading: state.products.loading,
    error: state.products.error
});

const mapDispatchToProps = {
    newCart: cartOperations.createCart,
    fetchProducts: productOperations.fetchList
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);
