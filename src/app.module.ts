import { Module } from '@nestjs/common';
import { LoggerModule, Params } from 'nestjs-pino';
import { DataSourceOptions } from 'typeorm';

import { CreateVehicleUseCase } from '@src/application/vehicles/create-vehicle.use-case';
import { ListVehiclesUseCase } from '@src/application/vehicles/list-vehicles.use-case';
import { UpdateVehicleUseCase } from '@src/application/vehicles/update-vehicle.use-case';
import { DatabaseModule } from '@src/infra/database/database.module';
import { ParamterStoreModule } from '@src/infra/paramter-store/paramter-store.module';
import { VehiclesController } from '@src/presentation/http/vehicles.controller';
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
  controllers: [VehiclesController],
  providers: [CreateVehicleUseCase, UpdateVehicleUseCase, ListVehiclesUseCase],
})
export class AppModule {}
