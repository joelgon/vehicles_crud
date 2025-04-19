import { DynamicModule, InjectionToken, Module } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';

import { VEHICLES_REPOSITORY } from '@src/shared/constant/infra.constant';

import { VehicleRepository } from './repositories/vehicles.repository';

@Module({})
export class DatabaseModule {
  static forRootAsync({
    inject = [],
    useFactory,
  }: {
    inject: InjectionToken<DataSourceOptions>[];
    useFactory: (...args: any[]) => DataSourceOptions | Promise<DataSourceOptions>;
  }): DynamicModule {
    return {
      module: DatabaseModule,
      global: true,
      providers: [
        {
          provide: 'DATA_SOURCE_OPTIONS',
          inject,
          useFactory,
        },
        {
          provide: DataSource,
          useFactory: async (options: DataSourceOptions) => {
            const dataSource = new DataSource(options);
            return dataSource.initialize();
          },
          inject: ['DATA_SOURCE_OPTIONS'],
        },
        {
          provide: VEHICLES_REPOSITORY,
          useClass: VehicleRepository,
        },
      ],
      exports: [VEHICLES_REPOSITORY],
    };
  }
}
