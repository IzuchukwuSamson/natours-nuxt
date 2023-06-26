"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const mail_constant_1 = require("../mail/mail.constant");
exports.default = (0, config_1.registerAs)('bull', () => ({
    name: mail_constant_1.EMAIL,
    redis: process.env.REDIS_URL,
}));
//# sourceMappingURL=bull.config.js.map