// @flow
import customerListJson from '../data/customers.json';

export default class CustomerController {
    async index(req: any, res: any): Promise<void> {
        try {
            const { customerId = null } = req.params;

            const customerJson = customerListJson.data.find(
                customer => customer.id === customerId
            );

            if (customerJson) {
                res.json({
                    data: customerJson
                });
            } else {
                res.status(404).send('Not Found');
            }
        } catch (error) {
            res.json({ error });
        }
    }
}
