// @flow
import type AbstractDiscountRuleModel from '../discountRules/models/AbstractDiscountRuleModel';
import type ProductModel from '../products/ProductModel';
import CartItemModel from './CartItemModel';

export type Cart = Array<CartItemModel>;

export default class Checkout {
    _discountRules: Array<AbstractDiscountRuleModel>;

    _cart: Cart;

    _total: number;

    constructor(discountRules: Array<AbstractDiscountRuleModel> = []) {
        this._discountRules = discountRules;
        this._cart = {};
        this._total = 0;
    }

    addItem(product: ProductModel): Cart {
        const cartItem = this._cart[product.id];
        if (!cartItem) {
            this._cart[product.id] = new CartItemModel(product);
        } else {
            cartItem.addItem();
        }

        this._updateDiscount();
        return this._cart;
    }

    removeItem(product: ProductModel): Cart {
        const cartItem = this._cart[product.id];
        if (cartItem) {
            cartItem.removeItem();
        }

        this._updateDiscount();
        return this._cart;
    }

    removeAllItems(product: ProductModel): Cart {
        const cartItem = this._cart[product.id];
        if (cartItem) delete this._cart[product.id];

        this._updateDiscount();
    }

    total(): number {
        return this._total;
    }

    _updateDiscount(): void {
        this._discountRules.forEach((discountRule: AbstractDiscountRuleModel) =>
            discountRule.applyDiscount(this._cart)
        );
        this._total = Object.keys(this._cart).reduce(
            (acc, key) => acc + this._cart[key].totalPrice,
            0
        );
    }
}
