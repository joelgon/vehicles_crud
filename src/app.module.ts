import { Module } from '@nestjs/common';
import { LoggerModule, Params } from 'nestjs-pino';
import { DataSourceOptions } from 'typeorm';

import { DatabaseModule } from '@src/infra/database/database.module';
import { ParamterStoreModule } from '@src/infra/paramter-store/paramter-store.module';
import { DATABASE_CONNECTION, LOGGER } from '@src/shared/constant/infra.constant';

@Module({
  imports: [
    ParamterStoreModule.forRoot(),
    LoggerModule.forRootAsync({
      inject: [LOGGER],
      useFactory: (config: Params) => config,
    }),
    DatabaseModule.forRootAsync({
      inject: [DATABASE_CONNECTION],
      useFactory: (config: DataSourceOptions) => config,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
