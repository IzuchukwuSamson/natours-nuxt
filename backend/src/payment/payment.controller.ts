import { Get, Res, Controller } from '@nestjs/common';
import { PaymentService } from './payment.service';

@Controller('paystack')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Get()
  getHello() {
    return this.paymentService.getSession();
  }

  @Get('pay/success/checkout/session')
  paymentSuccess(@Res({ passthrough: true }) res) {
    return this.paymentService.SuccessSession(res);
  }
}
