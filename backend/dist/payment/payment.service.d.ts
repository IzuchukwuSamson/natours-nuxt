import Stripe from 'stripe';
export declare class PaymentService {
    private readonly stripeClient;
    constructor(stripeClient: Stripe);
}
