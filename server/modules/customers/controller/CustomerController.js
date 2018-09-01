// @flow
import customerListJson from '../data/customers.json';

export default class CustomerController {
    async index(req: any, res: any): Promise<void> {
        try {
            const { customerId = null } = req.params;

            const customer = customerListJson.data[3];

            res.json({ data: customer });
        } catch (error) {
            console.log(error);
            res.json({ error });
        }
    }
}
