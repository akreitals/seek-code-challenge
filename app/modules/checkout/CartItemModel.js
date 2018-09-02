// @flow
import ProductModel from '../products/ProductModel';

export default class CartItemModel {
    id: string;

    quantity: number;

    originalPricePerItem: number;

    totalPrice: number;

    totalDiscount: number;

    constructor(product: ProductModel) {
        this.id = product.id;
        this.originalPricePerItem = product.price;
        this.name = product.name;
        this.quantity = 1;
        this.totalPrice = product.price;
        this.totalDiscount = 0;
    }

    addItem(): void {
        this.quantity = this.quantity + 1;
        this.setTotalPrice(this.totalPrice + this.originalPricePerItem);
    }

    removeItem(): void {
        if (this.quantity > 0) {
            this.quantity = this.quantity - 1;
            this.setTotalPrice(this.totalPrice - this.originalPricePerItem);
        }
    }

    setTotalPrice(price: number) {
        this.totalPrice = price;
        this.totalDiscount =
            this.quantity * this.originalPricePerItem - this.totalPrice;
    }
}
