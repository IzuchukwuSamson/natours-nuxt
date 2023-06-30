import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-google-oauth20';
import { AuthService } from '../auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authService: AuthService,
  ) {
    super({
      clientID:
        '736822316608-u1vq1uvoksd5pqa24ssv6kivcoacs06v.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:8000/api/auth/google/redirect',
      scope: ['profile', 'email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    // console.log(accessToken);
    // console.log(refreshToken);
    // console.log(profile);
    const user = await this.authService.signinwithgoogle({
      email: profile.emails[0].value,
      // displayName: profile.displayName,
      firstname: profile.name.givenName,
      lastname: profile.name.familyName,
      image: profile.photos[0].value,
    });
    // console.log('Validate');
    // console.log(user);
    return user || null;
  }
}
