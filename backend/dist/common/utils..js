"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = exports.hashPassword = void 0;
const bcrypt = require("bcrypt");
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
};
exports.hashPassword = hashPassword;
const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};
exports.comparePassword = comparePassword;
//# sourceMappingURL=utils..js.map