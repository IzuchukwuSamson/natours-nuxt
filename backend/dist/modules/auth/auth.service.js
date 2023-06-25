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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const util_1 = require("util");
const crypto_1 = require("crypto");
const scrypt = (0, util_1.promisify)(crypto_1.scrypt);
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async register(newUser) {
        const user = this.userService.create(newUser);
        delete newUser.password;
        return user;
    }
    async login(email, password) {
        let user;
        try {
            user = await this.userService.findOne({ where: { email } });
        }
        catch (err) {
            throw new common_1.UnauthorizedException(`There isn't any user with email: ${email}`);
        }
        if (!(await user.checkPassword(password))) {
            throw new common_1.UnauthorizedException(`Wrong password for user with email: ${email}`);
        }
        delete user.password;
        return user;
    }
    async verifyPayload(payload) {
        let user;
        try {
            user = await this.userService.findOne({ where: { email: payload.sub } });
        }
        catch (error) {
            throw new common_1.UnauthorizedException(`There isn't any user with email: ${payload.sub}`);
        }
        delete user.password;
        return user;
    }
    signToken(user) {
        const payload = {
            sub: user.email,
        };
        return this.jwtService.sign(payload);
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map