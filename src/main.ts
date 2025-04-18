import cors from '@fastify/cors';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Logger } from 'nestjs-pino';

import { AppModule } from './app.module';
import { SERVICE_PORT } from './shared/constant/infra.constant';
import { RequestInterceptor } from './shared/interceptor/request.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), { bufferLogs: true });

  app.useLogger(app.get(Logger));

  app.useGlobalInterceptors(new RequestInterceptor());

  await app.register(cors, {
    origin: '*',
  });

  const PORT = app.get(SERVICE_PORT);
  await app.listen(PORT, '0.0.0.0');
}
bootstrap();
