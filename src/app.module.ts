import { Module } from '@nestjs/common';
import { DataSourceOptions } from 'typeorm';

import { DatabaseModule } from '@src/infra/database/database.module';
import { ParamterStoreModule } from '@src/infra/paramter-store/paramter-store.module';
import { DATABASE_CONNECTION } from '@src/shared/constant/infra.constant';

@Module({
  imports: [
    ParamterStoreModule.forRoot(),
    DatabaseModule.forRootAsync({
      inject: [DATABASE_CONNECTION],
      useFactory: (config: DataSourceOptions) => config,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
