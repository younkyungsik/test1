/*
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

*/
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // express json body parser 명시적 등록
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  await app.listen(3000);
}
bootstrap();