/* eslint-disable @typescript-eslint/no-require-imports */
import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';

import { PaginationLinks, PaginationMeta } from '@src/domain/entities/paginate.entity';

import { swaggerConfig } from './doc.config';

export async function setupSwagger(app: INestApplication): Promise<void> {
  const document = SwaggerModule.createDocument(app, swaggerConfig, {
    extraModels: [PaginationMeta, PaginationLinks],
  });

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

  SwaggerModule.setup('/api-doc', app, document);
}
