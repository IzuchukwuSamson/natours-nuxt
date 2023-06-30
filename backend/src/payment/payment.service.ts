import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
const stripe = require('stripe')(process.env.PAYMENT_ID);

@Injectable()
export class PaymentService {
  constructor(private readonly configService: ConfigService) {}
  async getSession() {
    const session = await stripe.checkout.sessions.create({
      line_items: [{ price: process.env.PAYMENT_PRICE, quantity: 3 }],
      mode: 'payment',
      payment_intent_data: {
        setup_future_usage: 'on_session',
      },
      customer: process.env.PAYMENT_CUSTOMER,
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
