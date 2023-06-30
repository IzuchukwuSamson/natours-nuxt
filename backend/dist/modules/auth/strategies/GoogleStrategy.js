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
exports.GoogleStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_google_oauth20_1 = require("passport-google-oauth20");
const auth_service_1 = require("../auth.service");
let GoogleStrategy = class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy) {
    constructor(authService) {
        super({
            clientID: '736822316608-u1vq1uvoksd5pqa24ssv6kivcoacs06v.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:8000/api/auth/google/redirect',
            scope: ['profile', 'email'],
        });
        this.authService = authService;
    }
    async validate(accessToken, refreshToken, profile) {
        const user = await this.authService.signinwithgoogle({
            email: profile.emails[0].value,
            firstname: profile.name.givenName,
            lastname: profile.name.familyName,
            image: profile.photos[0].value,
        });
        return user || null;
    }
};
GoogleStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('AUTH_SERVICE')),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], GoogleStrategy);
exports.GoogleStrategy = GoogleStrategy;
//# sourceMappingURL=GoogleStrategy.js.map