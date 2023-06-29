import { Injectable } from '@nestjs/common';
const stripe = require('stripe')(
  'sk_test_51MaQrRL3G1kDbS86JCWcD6NPiWfHOsyCym1mkzV5kIRkDdw6Qc85gX5O32K5JL8GhSzc5N36K8fNeOVsFpXzzip800niu8bEpy',
);

@Injectable()
export class PaymentService {
  async getSession() {
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: 'price_1NOGrGL3G1kDbS86ZMpJjfqA', quantity: 3 }],
      mode: 'payment',
      payment_intent_data: {
        setup_future_usage: 'on_session',
      },
      customer: 'cus_OAc7VHvnxCo4Ch',
      success_url:
        'http://localhost:8000' +
        '/api/payment/pay/success/checkout/session?session_id={CHECKOUT_SESSION_ID}',
      cancel_url:
        'http://localhost:8000' + '/api/payment/pay/failed/checkout/session',
    });

    return session;
  }

  async SuccessSession(Session: any) {
    console.log(Session);
  }
}
