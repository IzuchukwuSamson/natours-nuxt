import { PaymentService } from './payment.service';
export declare class PaymentController {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    getHello(): Promise<any>;
    paymentSuccess(res: any): Promise<void>;
}
