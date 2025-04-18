import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DATABASE_CONNECTION } from '@src/shared/constant/infra.constant';

import { DatabaseConfig } from './config/database.config';

@Module({})
export class ParamterStoreModule {
  static forRoot(): DynamicModule {
    return {
      module: ParamterStoreModule,
      global: true,
      imports: [ConfigModule.forRoot({ envFilePath: '.env' })],
      providers: [
        DatabaseConfig,
        {
          provide: DATABASE_CONNECTION,
          useFactory: (config: DatabaseConfig) => config.execute,
          inject: [DatabaseConfig],
        },
      ],
      exports: [DATABASE_CONNECTION],
    };
  }
}
