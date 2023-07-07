"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setup = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const MySQLStore = require("express-mysql-session");
const treblle_1 = require("treblle");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
function setup(app) {
    var _a, _b;
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        errorHttpStatusCode: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
    }));
    app.setGlobalPrefix('api');
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('THE API DOCUMENTATION')
        .setVersion('1.0.0')
        .setDescription('The Natours Project')
        .addTag('nestjs')
        .build();
    const swaggerOptions = {
        operationIdFactory: (controllerKey, methodKey) => methodKey,
    };
    const swaggerDoc = swagger_1.SwaggerModule.createDocument(app, swaggerConfig, swaggerOptions);
    swagger_1.SwaggerModule.setup('api', app, swaggerDoc);
    app.use(cookieParser(process.env.JWT_SECRET));
    app.enableCors({
        origin: (_b = (_a = process.env.ALLOWED_ORIGINS) === null || _a === void 0 ? void 0 : _a.split(/\s*,\s*/)) !== null && _b !== void 0 ? _b : '*',
        credentials: true,
        exposedHeaders: ['Authorization'],
        allowedHeaders: ['content-type'],
    });
    const options = {
        host: process.env.DB_HOST,
        port: parseInt(process.env.PORT),
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    };
    app.use(session({
        secret: process.env.JWT_SECRET,
        resave: false,
        saveUninitialized: false,
        store: process.env.NODE_ENV === 'production'
            ? new (MySQLStore(session))(options)
            : new session.MemoryStore(),
        cookie: {
            httpOnly: true,
            maxAge: 3600000,
            signed: true,
            sameSite: 'strict',
            secure: process.env.NODE_ENV === 'production',
        },
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    const expressInstance = app.getHttpAdapter().getInstance();
    (0, treblle_1.useNestTreblle)(expressInstance, {
        apiKey: 'ExHcu4MRNHE079Gdh1Egz06P3cixPhpD',
        projectId: 'dsQ5ANUH3CYL3Qb3',
    });
    return app;
}
exports.setup = setup;
//# sourceMappingURL=setup.js.map