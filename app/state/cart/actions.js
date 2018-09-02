// @flow
import * as types from './types';
import type AbstractDiscountRuleModel from '../../modules/discountRules/models/AbstractDiscountRuleModel';
import type ProductModel from '../../modules/products/ProductModel';

export const createCart = (
    discountRules: Array<AbstractDiscountRuleModel> = []
) => ({
    type: types.CREATE_CART,
    payload: {
        discountRules
    }
});

export const addToCart = (product: ProductModel) => ({
    type: types.ADD_ITEM,
    payload: {
        product
    }
});

export const removeFromCart = (product: ProductModel) => ({
    type: types.REMOVE_ITEM,
    payload: {
        product
    }
});

export const clearCart = () => ({ type: types.CLEAR_CART });
