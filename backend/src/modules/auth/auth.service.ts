import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';
import { Signup } from './dto/signup.dto';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { MailService } from 'src/mail/mail.service';
// import { EMAIL, WELCOME } from 'src/mail/mail.constant';
import { UserDetails } from 'src/common/enum/googleUserDetails.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private mailService: MailService,
  ) {}

  async register(newUser: Signup): Promise<User> {
    const token = Math.floor(1000 + Math.random() * 9000).toString();
    const user = await this.userService.create(newUser);

    delete newUser.password;
    await this.mailService.sendUserConfirmation(user, token);
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
