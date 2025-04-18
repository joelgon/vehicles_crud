import { DynamicModule, InjectionToken, Module } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';

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
      imports: [],
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
      ],
      exports: [DataSource],
    };
  }
}
