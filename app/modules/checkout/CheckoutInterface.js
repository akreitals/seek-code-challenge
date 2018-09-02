// @flow
import type ProductModel from '../products/ProductModel';
import type CartItemModel from './CartItemModel';

export type Cart = Array<CartItemModel>;

export interface CheckoutInterface {
    /**
     * Add item to cart
     * @param {ProductModel} product
     * @return Cart
     */
    addItem(product: ProductModel): Cart;

    /**
     * Remove item from cart
     * @param {ProductModel} product:
     * @return Cart
     */
    removeItem(product: ProductModel): Cart;

    /**
     * Remove all items of products type from cart
     * @param {ProductModel} product
     * @return Cart
     */
    removeAllItems(product: ProductModel): Cart;

    /**
     * Get the total price of the cart including discounts
     * @return {Number}
     */
    total(): number;

    /**
     * Get array of cart items from the cart
     * @return {Array.<CartItemModel>}
     */
    getCartItems(): Array<CartItemModel>;
}
