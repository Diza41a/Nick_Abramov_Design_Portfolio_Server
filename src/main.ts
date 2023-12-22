import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './main/modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(8080);
}
bootstrap();
