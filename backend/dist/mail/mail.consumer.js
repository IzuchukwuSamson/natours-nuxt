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
exports.mailConsumer = void 0;
const bull_1 = require("@nestjs/bull");
const mailer_1 = require("@nestjs-modules/mailer");
const config_1 = require("@nestjs/config");
const mail_constant_1 = require("./mail.constant");
let mailConsumer = class mailConsumer {
    constructor(mail, config) {
        this.mail = mail;
        this.config = config;
    }
    welcome(job) {
        const { productName, loginUrl: actionUrl, fromName, companyName, from, } = this.config.get('mail');
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
};
__decorate([
    (0, bull_1.Process)(mail_constant_1.WELCOME),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], mailConsumer.prototype, "welcome", null);
mailConsumer = __decorate([
    (0, bull_1.Processor)(mail_constant_1.EMAIL),
    __metadata("design:paramtypes", [mailer_1.MailerService,
        config_1.ConfigService])
], mailConsumer);
exports.mailConsumer = mailConsumer;
//# sourceMappingURL=mail.consumer.js.map