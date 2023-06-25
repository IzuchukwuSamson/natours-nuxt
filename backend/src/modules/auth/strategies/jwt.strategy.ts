import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { User } from 'src/modules/user/entities/user.entity';
// import { jwtConstants } from '../guards/constants';
dotenv.config();

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly authService: AuthService,
    configService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // secretOrKey: jwtConstants.secret,
      // secretOrKey: process.env.APP_SECRET
      secretOrKey: configService.get<string>('JWT_SECRET'),
      ignoreExpiration: false,
      passReqToCallback: false,
    });
  }

  // async validate(payload: JwtPayload): Promise<User> {
  //   return this.authService.verifyPayload(payload);
  // }
}
