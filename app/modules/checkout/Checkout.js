// @flow
import type AbstractDiscountRuleModel from '../discountRules/models/AbstractDiscountRuleModel';
import type ProductModel from '../products/ProductModel';
import CartItemModel from './CartItemModel';
import type { Cart } from './CheckoutInterface';
import { CheckoutInterface } from './CheckoutInterface';

export default class Checkout implements CheckoutInterface {
    _discountRules: Array<AbstractDiscountRuleModel>;

    _cart: Cart;

    _total: number;

    constructor(discountRules: Array<AbstractDiscountRuleModel> = []) {
        this._discountRules = discountRules;
        this._cart = {};
        this._total = 0;
    }

    /**
     * @inheritDoc
     */
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

    /**
     * @inheritDoc
     */
    removeItem(product: ProductModel): Cart {
        const cartItem = this._cart[product.id];
        if (cartItem) {
            cartItem.removeItem();

            if (cartItem.quantity < 1) {
                delete this._cart[product.id];
            }
        }

        this._updateDiscount();
        return this._cart;
    }

    /**
     * @inheritDoc
     */
    removeAllItems(product: ProductModel): Cart {
        const cartItem = this._cart[product.id];
        if (cartItem) delete this._cart[product.id];

        this._updateDiscount();
    }

    /**
     * @inheritDoc
     */
    total(): number {
        return this._total;
    }

    /**
     * @inheritDoc
     */
    getCartItems() {
        return Object.values(this._cart);
    }

    /**
     * Update the total price based on discounts applied to the current cart
     * @private
     */
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
