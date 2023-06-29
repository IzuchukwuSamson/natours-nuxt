import { Get, Res, Controller, UseGuards } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { AuthGuard } from 'src/modules/auth/guards/auth.guard';

@Controller('payment')
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  // @UseGuards(AuthGuard)
  @Get()
  getHello() {
    return this.paymentService.getSession();
  }

  // @UseGuards(AuthGuard)
  @Get('pay/success/checkout/session')
  paymentSuccess(@Res({ passthrough: true }) res) {
    return this.paymentService.SuccessSession(res);
  }
}
