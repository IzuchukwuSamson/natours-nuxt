import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';
import { Job } from 'bull';
import { Signup } from 'src/modules/auth/dto/signup.dto';
export declare class mailConsumer {
    private readonly mail;
    private readonly config;
    constructor(mail: MailerService, config: ConfigService);
    welcome(job: Job<Signup>): Promise<any>;
}
