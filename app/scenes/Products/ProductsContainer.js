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
import { sessionOperations } from '../../state/session';

class ProductsContainer extends Component {
    async componentDidMount() {
        if (this.props.products.length === 0) {
            this.props.fetchProducts();
        }
    }

    render() {
        const { products, loading, error, logout } = this.props;
        return (
            <Container>
                <Button onClick={() => logout()}>Logout</Button>
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
    fetchProducts: productOperations.fetchList,
    logout: sessionOperations.logout
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsContainer);
