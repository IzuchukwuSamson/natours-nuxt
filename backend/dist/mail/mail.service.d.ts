import { MailerService } from '@nestjs-modules/mailer';
import { User } from 'src/modules/user/entities/user.entity';
export declare class MailService {
    private mailerService;
    constructor(mailerService: MailerService);
    sendUserConfirmation(user: User): Promise<void>;
    sendUserConfirmed(user: User): Promise<void>;
}
