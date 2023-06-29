import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SessionSerializer } from 'src/modules/auth/session.serializer';

@Module({
  imports: [
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: configService.get<string>('JWT_EXPIRES_IN'),
          },
        };
      },
    }),
  ],
  controllers: [PaymentController],

  providers: [PaymentService, SessionSerializer],
})
export class PaymentModule {}
