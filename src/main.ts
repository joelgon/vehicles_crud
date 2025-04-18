import cors from '@fastify/cors';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { Logger } from 'nestjs-pino';

import { setupSwagger } from '@src/infra/docs/doc.setup';
import { SERVICE_PORT } from '@src/shared/constant/infra.constant';
import { RequestInterceptor } from '@src/shared/interceptor/request.interceptor';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), { bufferLogs: true });

  app.useLogger(app.get(Logger));

  app.useGlobalInterceptors(new RequestInterceptor());

  await setupSwagger(app);

  await app.register(cors, {
    origin: '*',
  });

  const PORT = app.get(SERVICE_PORT);
  await app.listen(PORT, '0.0.0.0');
}
bootstrap();
