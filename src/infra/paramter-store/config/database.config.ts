import path from 'path';

import { Injectable } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';

@Injectable()
export class DatabaseConfig {
  get execute(): DataSourceOptions {
    const DATABASE_PATH = path.resolve(__dirname, '..', '..', 'database');

    return {
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [DATABASE_PATH + '/entities/*.{ts,js}'],
      migrations: [DATABASE_PATH + '/migrations/*.{ts,js}'],
      migrationsRun: true,
    };
  }
}
