import { Injectable, Logger } from '@nestjs/common';
import { IPaginationMeta, IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { DataSource, FindManyOptions, FindOptionsWhere, Repository } from 'typeorm';

import { Vehicle } from '../entities/vehicles.entity';

@Injectable()
export class VehicleRepository extends Repository<Vehicle> {
  private readonly _logger = new Logger(VehicleRepository.name);

  constructor(private readonly _dataSource: DataSource) {
    super(Vehicle, _dataSource.createEntityManager());
  }

  async paginate(options: IPaginationOptions<IPaginationMeta>, searchOptions?: FindOptionsWhere<Vehicle> | FindManyOptions<Vehicle>) {
    return paginate<Vehicle>(this, options, searchOptions);
  }
}
