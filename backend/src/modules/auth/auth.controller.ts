import {
  Controller,
  Get,
  Post,
  Body,
  Session,
  UseGuards,
  HttpCode,
  HttpStatus,
  Res,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Signup } from './dto/signup.dto';
import { SessionAuthGuard } from './guards/session-auth.guard';
import { Response } from 'express';
import { CurrentUser } from '../user/decorators/current-user.decorator';
import { Login } from './dto/login.dto';
import { User } from '../user/entities/user.entity';
import { LocalAuthGuard } from './guards/local-auth.guard copy';
import { JWTAuthGuard } from './guards/jwt-guard.guard';
import { GoogleAuthGuard } from './guards/google.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async signup(@Body() signup: Signup, @Res() resp: Response) {
    try {
      const user = await this.authService.register(signup);
      const token = this.authService.signToken(user);

      resp.setHeader('Authorization', `Bearer ${token}`);
      resp.cookie('token', token, {
        httpOnly: true,
        signed: true,
        sameSite: 'strict',
        secure: true,
        // secure: process.env.NODE_ENV === 'production',
      });
      resp.send(user);

      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  async login(@CurrentUser() @Body() login: Login, @Res() resp: Response) {
    try {
      const user = await this.authService.login(login.email, login.password);
      const token = this.authService.signToken(user);
      resp.setHeader('Authorization', `Bearer ${token}`);
      resp.cookie('token', token, {
        httpOnly: true,
        signed: true,
        sameSite: 'strict',
        // secure: process.env.NODE_ENV === 'production',
        secure: true,
      });

      resp.send(user);

      return resp;
    } catch (error) {
      console.log(error);
    }
  }

  // @Get('confirm?token')
  // async verifiedAccount(@Body() body) {
  //   const verified = await this.authService.verifyAccount(body);

  //   return verified;
  // }

  @Post('/verify')
  async Verify(@Body() body) {
    return await this.authService.verifyAccount(
      body.code,
      body.authConfirmToken,
      body.updateUser,
    );
  }

  @Get('me')
  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  me(@CurrentUser() user: User) {
    return user;
  }

  @Post('logout')
  logout(@Session() session: any) {
    session.userId = null;
  }

  // GOOGLE AUTH
  @Get('/google/login')
  @UseGuards(GoogleAuthGuard)
  handleLogin() {
    return { msg: 'Google Authentication' };
  }

  // api/auth/google/redirect
  @Get('google/redirect')
  @UseGuards(GoogleAuthGuard)
  handleRedirect() {
    return { msg: 'OK' };
  }

  // @Get('status')
  // user(@Req() request: Request) {
  //   console.log(request.user);
  //   if (request.user) {
  //     return { msg: 'Authenticated' };
  //   } else {
  //     return { msg: 'Not Authenticated' };
  //   }
  // }
}
