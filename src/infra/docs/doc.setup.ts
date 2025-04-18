/* eslint-disable @typescript-eslint/no-require-imports */
import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';

import { swaggerConfig } from './doc.config';

export async function setupSwagger(app: INestApplication): Promise<void> {
  const document = SwaggerModule.createDocument(app, swaggerConfig);

  const fastifyInstance = app.getHttpAdapter().getInstance();

  await fastifyInstance.register(require('@fastify/swagger'), {
    swagger: {
      info: {
        title: 'Vehicles API',
        description: 'CRUD de veículos',
        version: '1.0',
      },
    },
    staticCSP: true,
    transformStaticCSP: (header: string) => header,
    uiConfig: {
      docExpansion: 'list',
      deepLinking: false,
    },
  });

  SwaggerModule.setup('/api', app, document);
}
