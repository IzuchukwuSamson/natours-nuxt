import { Body, Get, Res, Controller, Post } from '@nestjs/common';
import { InjectStripe } from 'nestjs-stripe';
import { PaymentService } from './payment.service';

@Controller('paystack')
export class PaymentController {
  constructor(
    @InjectStripe() private readonly paymentService: PaymentService,
  ) {}

  @Get()
  getHello() {
    return this.paymentService.getSession();
  }

  @Get('pay/success/checkout/session')
  paymentSuccess(@Res({ passthrough: true }) res) {
    return this.paymentService.SuccessSession(res);
  }
}
