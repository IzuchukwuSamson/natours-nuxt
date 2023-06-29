import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { User } from 'src/modules/user/entities/user.entity';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: User, token: string) {
    const url = `example.com/auth/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to: user.email,
      from: '"Support Team" <support@natours.io>',
      subject: 'Welcome to Natours - Confirm your Email',
      template: './confirmation',
      context: {
        name: user.firstname,
        url,
      },
    });
  }
}
