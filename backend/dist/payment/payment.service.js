"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const stripe = require('stripe')(process.env.PAYMENT_ID);
let PaymentService = class PaymentService {
    constructor(configService) {
        this.configService = configService;
    }
    async getSession() {
        const session = await stripe.checkout.sessions.create({
            line_items: [{ price: process.env.PAYMENT_PRICE, quantity: 3 }],
            mode: 'payment',
            payment_intent_data: {
                setup_future_usage: 'on_session',
            },
            customer: process.env.PAYMENT_CUSTOMER,
            success_url: 'http://localhost:8000' +
                '/api/payment/pay/success/checkout/session?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'http://localhost:8000' + '/api/payment/pay/failed/checkout/session',
        });
        return session;
    }
    async SuccessSession(Session) {
        console.log(Session);
    }
};
PaymentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map