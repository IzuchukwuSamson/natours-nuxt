import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { BullModule } from '@nestjs/bull';
import { UserService } from '../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { LocalStrategy } from './strategies/local.strategy';
import { SessionSerializer } from './session.serializer';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { jwtConstants } from './guards/constants';
// import { jwtConstants } from './strategies/jwt.constants';
// import { EMAIL_QUEUE_NAME } from '../mail/mail.constant';

dotenv.config();

@Module({
  imports: [
    UserModule,
    // JwtModule,
    PassportModule.register({ defaultStrategy: 'jwt', session: true }),
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
    // TypeOrmModule.forFeature([User]),
    // BullModule.registerQueue({ name: EMAIL_QUEUE_NAME }),
    // JwtModule.register({
    //   global: true,
    //   secret: jwtConstants.secret,
    //   signOptions: { expiresIn: '60s' },
    // }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    // UserService,
    LocalStrategy,
    JwtStrategy,
    SessionSerializer,
  ],
})
export class AuthModule {}

// https://stackoverflow.com/questions/58673430/error-secretorprivatekey-must-have-a-value
