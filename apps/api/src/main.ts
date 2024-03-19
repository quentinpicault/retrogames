import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import helmet from 'helmet';
import session from 'express-session';
import passport from 'passport';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { TypeormStore } from 'connect-typeorm';
import { Session } from './auth/sessions/session.entity';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const sessionsRepository = app.get(DataSource).getRepository(Session);

  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'", 'data:'],
        },
      },
      referrerPolicy: {
        policy: ['no-referrer'],
      },
      permittedCrossDomainPolicies: {
        permittedPolicies: 'none',
      },
    }),
  );

  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      store: new TypeormStore({
        cleanupLimit: 2,
        ttl: 86400,
      }).connect(sessionsRepository),
      secret: process.env.AUTH_SECRET || "secret",
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  const config = new DocumentBuilder()
  .setTitle('RetroGames API')
  .setDescription('RetroGames Backend REST API')
  .setVersion(process.env.RETROGAMES_VERSION || "0.0.0")
  .build();
  
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, document);

  await app.listen(8000);
}

bootstrap();
