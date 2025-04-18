import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DATABASE_CONNECTION, LOGGER, SERVICE_PORT } from '@src/shared/constant/infra.constant';

import { DatabaseConfig } from './config/database.config';
import { LoggerConfig } from './config/logger.config';
import { ServicePortConfig } from './config/service-port.config';

@Module({})
export class ParamterStoreModule {
  static forRoot(): DynamicModule {
    return {
      module: ParamterStoreModule,
      global: true,
      imports: [ConfigModule.forRoot({ envFilePath: '.env' })],
      providers: [
        DatabaseConfig,
        ServicePortConfig,
        LoggerConfig,
        {
          provide: DATABASE_CONNECTION,
          useFactory: (config: DatabaseConfig) => config.execute,
          inject: [DatabaseConfig],
        },
        {
          provide: SERVICE_PORT,
          useFactory: (config: ServicePortConfig) => config.execute,
          inject: [ServicePortConfig],
        },
        {
          provide: LOGGER,
          useFactory: (config: LoggerConfig) => config.execute,
          inject: [LoggerConfig],
        },
      ],
      exports: [DATABASE_CONNECTION, SERVICE_PORT, LOGGER],
    };
  }
}
