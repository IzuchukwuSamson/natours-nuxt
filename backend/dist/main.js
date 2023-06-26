"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const setup_1 = require("./setup");
async function bootstrap() {
    const logger = new common_1.Logger();
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    (0, setup_1.setup)(app);
    const port = process.env.APP_PORT;
    await app.listen(port);
    logger.log(`Application is running on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map