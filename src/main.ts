// import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors();
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT || 3000;

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Findy API')
    .setDescription(
      'API gerenciamento de candidatos voluntários e projetos voluntários.',
    )
    .setVersion('0.0.1')
    .addTag('authentication')
    .addTag('candidate_users')
    .addTag('candidate_profile')
    .addTag('candidate_projects')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}

bootstrap();
