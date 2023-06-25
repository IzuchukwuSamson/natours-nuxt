import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TourModule } from './tour/tour.module';
import { TourModule } from './modules/tour/tour.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { ReviewModule } from './modules/review/review.module';

@Module({
  imports: [TourModule, UserModule, AuthModule, ReviewModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
