import Stripe from 'stripe';
export declare class PaymentController {
    private readonly stripeClient;
    constructor(stripeClient: Stripe);
}
