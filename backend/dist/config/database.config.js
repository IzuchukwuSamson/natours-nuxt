"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = (0, config_1.registerAs)('database', () => ({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT) || 8000,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    db: process.env.DB_DATABASE,
}));
//# sourceMappingURL=database.config.js.map