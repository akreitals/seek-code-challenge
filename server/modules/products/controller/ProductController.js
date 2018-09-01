// @flow
import productListJson from '../data/productList.json';

export default class ProductController {
    async index(req: any, res: any): Promise<void> {
        try {
            res.json(productListJson);
        } catch (error) {
            res.json({ error });
        }
    }
}
