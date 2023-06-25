"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const tour_module_1 = require("./modules/tour/tour.module");
const user_module_1 = require("./modules/user/user.module");
const auth_module_1 = require("./modules/auth/auth.module");
const review_module_1 = require("./modules/review/review.module");
const user_entity_1 = require("./modules/user/entities/user.entity");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const tour_entity_1 = require("./modules/tour/entities/tour.entity");
const review_entity_1 = require("./modules/review/entities/review.entity");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: ['.env', '.env.production'],
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (config) => {
                    return {
                        type: 'mysql',
                        host: config.get('DB_HOST'),
                        port: config.get('DB_PORT'),
                        username: process.env.DB_USERNAME,
                        password: config.get('DB_PASSWORD'),
                        database: config.get('DB_DATABASE'),
                        entities: [tour_entity_1.Tour, review_entity_1.Review, user_entity_1.User],
                        synchronize: true,
                    };
                },
            }),
            tour_module_1.TourModule,
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            review_module_1.ReviewModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map