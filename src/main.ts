import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './main/modules/app.module';
import { json, urlencoded } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ limit: '50mb', extended: true }));
  await app.listen(8080);
}
bootstrap();
