import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/user/entities/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: User) {
    // const url = `localhost:8000/api/auth/confirm?token=${user.authConfirmToken}`;
    const url = user.authConfirmToken;

    await this.mailerService.sendMail({
      to: user.email,
      from: '"Support Team" <support@natours.io>',
      subject: 'Welcome to Natours - Confirm your Email',
      template: './confirmation',
      context: {
        name: `${user.firstname}`,
        // url: user.authConfirmToken,
        url,
      },
    });
  }

  async confirmed(user: User) {
    await this.mailerService.sendMail({
      to: user.email,
      from: '"Support Team" <support@natours.io>',
      subject: 'Natours - Account Verified',
      template: './confirmed',
      context: {
        name: `${user.firstname}`,
        email: user.email,
      },
    });
  }
}
