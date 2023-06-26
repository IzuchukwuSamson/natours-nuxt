import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { setup } from './setup';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);

  setup(app);

  const port = process.env.APP_PORT;
  await app.listen(port);
  logger.log(`Application is running on port ${port}`);
}
bootstrap();
