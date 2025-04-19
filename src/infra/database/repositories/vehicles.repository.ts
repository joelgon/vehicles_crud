import { Injectable, Logger } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { CreateVehicleDto } from '@src/presentation/dto/create-vehicle.dto';

import { Vehicle } from '../entities/vehicles.entity';

@Injectable()
export class VehicleRepository extends Repository<Vehicle> {
  private readonly _logger = new Logger(VehicleRepository.name);

  constructor(private readonly _dataSource: DataSource) {
    super(Vehicle, _dataSource.createEntityManager());
  }
}
