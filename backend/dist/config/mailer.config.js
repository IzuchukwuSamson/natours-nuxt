"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const ejs_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/ejs.adapter");
exports.default = (0, config_1.registerAs)('mailer', () => {
    var _a;
    const host = (_a = process.env.MAIL_HOST) !== null && _a !== void 0 ? _a : 'localhost';
    const port = Number(process.env.MAIL_PORT) || 0;
    const secure = ['true', '1', 1].includes(process.env.MAIL_SECURE);
    const user = process.env.MAIL_USERNAME || 'username';
    const pass = process.env.MAIL_PASSWORD || 'password';
    return {
        transport: {
            host,
            port,
            secure,
            ignoreTLS: !secure,
            auth: {
                user,
                pass,
            },
        },
        template: {
            dir: process.cwd() + '/templates/',
            adapter: new ejs_adapter_1.EjsAdapter(),
        },
    };
});
//# sourceMappingURL=mailer.config.js.map