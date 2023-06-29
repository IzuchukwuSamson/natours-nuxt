"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const common_1 = require("@nestjs/common");
const stripe = require('stripe')('sk_test_51M6xsMSGQlxq8EadTBFdHldKvFMwhpZSerARXb8qLIZW3AUQFBo6SyIgpkwy1g7NDDes6iNyU2XWG6yaDzjTVrxY00FKXNtQyx');
let PaymentService = class PaymentService {
    async getSession() {
        const session = await stripe.checkout.sessions.create({
            line_items: [{ price: 'price_1MIT3ZSGQlxq8EadT0j9QNMc', quantity: 3 }],
            mode: 'payment',
            payment_intent_data: {
                setup_future_usage: 'on_session',
            },
            customer: 'cus_N2YAmRC6YKWslj',
            success_url: 'http://localhost:3000' +
                '/pay/success/checkout/session?session_id={CHECKOUT_SESSION_ID}',
            cancel_url: 'http://localhost:3000' + '/pay/failed/checkout/session',
        });
        return session;
    }
    async SuccessSession(Session) {
        console.log(Session);
    }
};
PaymentService = __decorate([
    (0, common_1.Injectable)()
], PaymentService);
exports.PaymentService = PaymentService;
//# sourceMappingURL=payment.service.js.map