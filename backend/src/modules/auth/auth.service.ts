import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Signup } from './dto/signup.dto';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { promisify } from 'util';
import { randomBytes, scrypt as _scrypt } from 'crypto';

const scrypt = promisify(_scrypt);

// import JwtPayload from './interfaces/jwt-payload.interface'
// import { EMAIL_QUEUE_NAME, WELCOME_JOB_NAME } from '../mail/mail.constant';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async register(newUser: Signup): Promise<User> {
    const user = this.userService.create(newUser);

    delete newUser.password;
    // await this.emailQueue.add(WELCOME_JOB_NAME, user);
    return user;
  }

  async login(email: string, password: string): Promise<User> {
    let user: User;

    try {
      user = await this.userService.findOne({ where: { email } });
    } catch (err) {
      throw new UnauthorizedException(
        `There isn't any user with email: ${email}`,
      );
    }

    if (!(await user.checkPassword(password))) {
      throw new UnauthorizedException(
        `Wrong password for user with email: ${email}`,
      );
    }
    delete user.password;

    return user;
  }

  async verifyPayload(payload: JwtPayload): Promise<User> {
    let user: User;

    try {
      user = await this.userService.findOne({ where: { email: payload.sub } });
    } catch (error) {
      throw new UnauthorizedException(
        `There isn't any user with email: ${payload.sub}`,
      );
    }
    delete user.password;

    return user;
  }

  signToken(user: User) {
    const payload = {
      sub: user.email,
    };

    return this.jwtService.sign(payload);
  }
}
