import * as cors from '@fastify/cors';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { SERVICE_PORT } from './shared/constant/infra.constant';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  await app.register(cors, {
    origin: '*',
  });

  const PORT = app.get(SERVICE_PORT);
  await app.listen(PORT, '0.0.0.0');
}
bootstrap();
