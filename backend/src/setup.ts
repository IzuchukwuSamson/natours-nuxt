import { ValidationPipe, HttpStatus, INestApplication } from '@nestjs/common';
import { useContainer } from 'class-validator';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
import * as passport from 'passport';
import * as MySQLStore from 'express-mysql-session';
import { useNestTreblle } from 'treblle';

import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';

export function setup(app: INestApplication): INestApplication {
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
    }),
  );

  app.setGlobalPrefix('api');
  // app.enableCors(); //

  const swaggerConfig = new DocumentBuilder()
    .setTitle('THE API DOCUMENTATION')
    .setVersion('1.0.0')
    .setDescription('The Natours Project')
    .addTag('nestjs')
    .build();

  const swaggerOptions: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const swaggerDoc = SwaggerModule.createDocument(
    app,
    swaggerConfig,
    swaggerOptions,
  );

  SwaggerModule.setup('api', app, swaggerDoc);

  app.use(cookieParser(process.env.JWT_SECRET));

  app.enableCors({
    origin: process.env.ALLOWED_ORIGINS?.split(/\s*,\s*/) ?? '*',
    credentials: true,
    exposedHeaders: ['Authorization'],
    allowedHeaders: ['content-type'],
  });

  const options = {
    //Use REDIS FOR SESSIONS
    host: process.env.DB_HOST,
    port: parseInt(process.env.PORT),
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  };

  app.use(
    session({
      secret: process.env.JWT_SECRET as string,
      resave: false,
      saveUninitialized: false,
      store:
        process.env.NODE_ENV === 'production'
          ? new (MySQLStore(session))(options)
          : new session.MemoryStore(),
      cookie: {
        httpOnly: true,
        maxAge: 3600000,
        signed: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV === 'production',
      },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  const expressInstance = app.getHttpAdapter().getInstance();

  useNestTreblle(expressInstance, {
    apiKey: process.env.TREBLLE_API_KEY,
    projectId: process.env.TREBLLE_PROJECT_ID,
  });

  return app;
}
