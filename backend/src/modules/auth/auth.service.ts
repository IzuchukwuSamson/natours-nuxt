import {
  HttpException,
  HttpStatus,
  Injectable,
  // NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
// import { InjectQueue } from '@nestjs/bull';
// import { Queue } from 'bull';
import { Signup } from './dto/signup.dto';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { MailService } from 'src/mail/mail.service';
// import { EMAIL, WELCOME } from 'src/mail/mail.constant';
import { UserDetails } from 'src/common/enum/googleUserDetails.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateUserDto } from '../user/dto/update-user.dto';

@Injectable()
export class AuthService {
  private code: number;
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private mailService: MailService,
  ) {
    this.code = Math.floor(1000 + Math.random() * 90000);
    // this.code = Math.floor(1000 + Math.random() * 90000).toString
  }

  async register(newUser: Signup): Promise<User> {
    // const token = Math.floor(1000 + Math.random() * 90000).toString();
    const req = {
      firstname: newUser.firstname,
      lastname: newUser.lastname,
      email: newUser.email,
      password: newUser.password,
      authConfirmToken: this.code,
    };
    const user = await this.userService.create(req);

    delete newUser.password;
    await this.mailService.sendUserConfirmation(user);
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

  async verifyAccount(
    code: string,
    authConfirmToken: number,
    updateUser: UpdateUserDto,
  ): Promise<any> {
    try {
      const user = await this.repo.findOne({
        where: { authConfirmToken: this.code },
      });
      if (!user) {
        return new HttpException('Invalid Token', HttpStatus.UNAUTHORIZED);
        // throw new NotFoundException('Invalid Token');
        // new HttpException('message', 400, { cause: new Error('Some Error') });
      } else {
        await this.repo.update(
          {
            authConfirmToken: user.authConfirmToken,
            emailVerified: user.emailVerified,
          },
          { emailVerified: true, authConfirmToken: undefined },
        );
        await this.mailService.sendUserConfirmed(user);

        return true;
      }
    } catch (error) {
      return new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
      // new HttpException('message', 400, { cause: new Error('Some Error') });
    }
  }

  // SIGN WITH GOOGLE
  async signinwithgoogle(details: UserDetails) {
    console.log('AuthService');
    console.log(details);
    const user = await this.repo.findOneBy({ email: details.email });
    // console.log(user);
    if (user) return user;
    console.log('User not found. Creating...');
    const newUser = this.repo.create(details);
    return this.repo.save(newUser);
  }

  async findUser(id: number) {
    const user = await this.repo.findOneBy({ id });
    return user;
  }
}
