// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { productOperations } from '../../state/products';
import { cartOperations } from '../../state/cart';
import WithCart from '../../containers/withCart';
import type ProductModel from '../../modules/products/ProductModel';
import Products from './components/Products';

type Props = {
    products: Array<ProductModel>,
    fetchProducts: func,
    loading: boolean,
    error: Object
};

type State = {};

class ProductsContainer extends Component<Props, State> {
    async componentDidMount() {
        if (this.props.products.length === 0) {
            this.props.fetchProducts();
        }
    }

    render() {
        const { products, loading, error } = this.props;
        return <Products products={products} loading={loading} error={error} />;
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

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    WithCart
)(ProductsContainer);
