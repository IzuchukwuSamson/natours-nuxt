import { ConfigService } from '@nestjs/config';
export declare class PaymentService {
    private readonly configService;
    constructor(configService: ConfigService);
    getSession(): Promise<any>;
    SuccessSession(Session: any): Promise<void>;
}
