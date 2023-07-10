import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TourModule } from './modules/tour/tour.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ReviewModule } from './modules/review/review.module';
import { User } from './modules/user/entities/user.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tour } from './modules/tour/entities/tour.entity';
import { Review } from './modules/review/entities/review.entity';
import { BullModule } from '@nestjs/bull';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailModule } from './mail/mail.module';
import { PaymentModule } from './payment/payment.module';
import { PassportModule } from '@nestjs/passport';
import { StorageModule } from './storage/storage.module';
// import bull from './config/bull.config';
// import mail from './config/mail.config';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [],
      envFilePath: ['.env', '.env.production'],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'mysql',
          host: config.get<string>('DB_HOST'),
          port: config.get<number>('DB_PORT'),
          username: process.env.DB_USERNAME,
          password: config.get<string>('DB_PASSWORD'),
          database: config.get<string>('DB_DATABASE'),
          entities: [Tour, Review, User],
          synchronize: true, //should not be used in production or else you will lose the data
        };
      },
    }),

    // BullModule.registerQueueAsync({
    //   inject: [ConfigService],
    //   useFactory(config: ConfigService) {
    //     return config.get('bull');
    //   },
    // }),

    // MailerModule.forRootAsync({
    //   inject: [ConfigService],
    //   useFactory(config: ConfigService) {
    //     return config.get('mailer');
    //   },
    // }),

    TourModule,
    UserModule,
    AuthModule,
    ReviewModule,
    MailModule,
    PaymentModule,

    PassportModule.register({ session: true }),

    StorageModule,
  ],
})
export class AppModule {}
