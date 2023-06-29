import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { StripeModule } from 'nestjs-stripe';

@Module({
  imports: [
    StripeModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        apiKey: configService.get('STRIPE_KEY'),
        apiVersion: '2020-08-27',
      }),
    }),
  ],
})
export class PaymentModule {}
