import { Processor, Process } from '@nestjs/bull';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { Job } from 'bull';
import { EMAIL, WELCOME } from './mail.constant';
import { Signup } from 'src/modules/auth/dto/signup.dto';
import { MailOptions } from './mail-options.interface';

@Processor(EMAIL)
export class mailConsumer {
  constructor(
    private readonly mail: MailerService,
    private readonly config: ConfigService,
  ) {}

  @Process(WELCOME)
  welcome(job: Job<Signup>) {
    const {
      productName,
      loginUrl: actionUrl,
      fromName,
      companyName,
      from,
    } = this.config.get<MailOptions>('mail');
    const { firstname, lastname, email: to } = job.data;

    return this.mail.sendMail({
      to,
      from,
      subject: `Welcome to ${productName}`,
      template: 'welcome',
      context: {
        productName,
        firstname,
        lastname,
        actionUrl,
        fromName,
        companyName,
      },
    });
  }
}
