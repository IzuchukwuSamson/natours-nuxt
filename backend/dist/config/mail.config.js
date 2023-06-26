"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    var _a, _b, _c, _d, _e;
    const baseUrl = (_a = process.env.CLIENT_BASE_URL) !== null && _a !== void 0 ? _a : 'http://localhost:3001';
    const author = ((_b = process.env.author) !== null && _b !== void 0 ? _b : 'Author').replace(/\s*<\w+>$/, '');
    return {
        mail: {
            from: (_c = process.env.MAIL_FROM) !== null && _c !== void 0 ? _c : 'no-reply@example.com',
            productName: (_d = process.env.PRODUCT_NAME) !== null && _d !== void 0 ? _d : 'Natours',
            loginUrl: `${baseUrl}/auth/login`,
            fromName: author,
            companyName: (_e = process.env.COMPANY_NAME) !== null && _e !== void 0 ? _e : 'Natours Company.',
        },
    };
};
//# sourceMappingURL=mail.config.js.map