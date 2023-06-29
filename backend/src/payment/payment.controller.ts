import { Body, Controller, Post } from '@nestjs/common';
import { InjectStripe } from 'nestjs-stripe';
import Stripe from 'stripe';

@Controller('paystack')
export class PaymentController {
  constructor(@InjectStripe() private readonly stripeClient: Stripe) {}
}
