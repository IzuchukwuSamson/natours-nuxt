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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const user_entity_1 = require("../user/entities/user.entity");
const mail_service_1 = require("../../mail/mail.service");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AuthService = class AuthService {
    constructor(repo, userService, jwtService, mailService) {
        this.repo = repo;
        this.userService = userService;
        this.jwtService = jwtService;
        this.mailService = mailService;
        this.code = Math.floor(1000 + Math.random() * 90000);
    }
    async register(newUser) {
        const req = {
            firstname: newUser.firstname,
            lastname: newUser.lastname,
            email: newUser.email,
            password: newUser.password,
            authConfirmToken: this.code,
        };
        const user = await this.userService.create(req);
        delete newUser.password;
        await this.mailService.sendUserConfirmation(user);
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
    async verifyAccount(code, authConfirmToken, updateUser) {
        try {
            const user = await this.repo.findOne({
                where: { authConfirmToken: this.code },
            });
            if (!user) {
                return new common_1.HttpException('Invalid Token', common_1.HttpStatus.UNAUTHORIZED);
            }
            else {
                await this.repo.update({
                    authConfirmToken: user.authConfirmToken,
                    emailVerified: user.emailVerified,
                }, { emailVerified: true, authConfirmToken: undefined });
                await this.mailService.sendUserConfirmed(user);
                return true;
            }
        }
        catch (error) {
            return new common_1.HttpException(error, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async signinwithgoogle(details) {
        console.log('AuthService');
        console.log(details);
        const user = await this.repo.findOneBy({ email: details.email });
        if (user)
            return user;
        console.log('User not found. Creating...');
        const newUser = this.repo.create(details);
        return this.repo.save(newUser);
    }
    async findUser(id) {
        const user = await this.repo.findOneBy({ id });
        return user;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        user_service_1.UserService,
        jwt_1.JwtService,
        mail_service_1.MailService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map