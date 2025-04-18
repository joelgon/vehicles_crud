import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Vehicles API')
  .setDescription('CRUD de veículos')
  .setVersion('1.0')
  .addTag('vehicles')
  .build();
