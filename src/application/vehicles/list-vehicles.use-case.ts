import { Inject, Injectable, Logger } from '@nestjs/common';
import { FindOptionsWhere, Like } from 'typeorm';

import { Vehicle } from '@src/domain/entities/vehicle.entity';
import { ListVehiclesRepository } from '@src/domain/repositories/vehicle.repository';
import { ListVehicleDto } from '@src/presentation/dto/list-vehicle.dto';
import { VEHICLES_REPOSITORY } from '@src/shared/constant/infra.constant';
import { SORT_ENUM } from '@src/shared/enum/sort.enum';

@Injectable()
export class ListVehiclesUseCase {
  private readonly _logger = new Logger(ListVehiclesUseCase.name);

  constructor(
    @Inject(VEHICLES_REPOSITORY)
    private readonly vehicleRepository: ListVehiclesRepository
  ) {}

  async execute(listVehicleDto: ListVehicleDto) {
    const where: FindOptionsWhere<Vehicle> = {};
    if (listVehicleDto.filter) {
      for (const element of Object.keys(listVehicleDto.filter)) {
        if (listVehicleDto.filter[element]) {
          where[element] = Like(`%${listVehicleDto.filter[element]}%`);
        }
      }
    }

    const order: Record<string, SORT_ENUM> = {};
    if (listVehicleDto.sort) {
      for (const element of Object.keys(listVehicleDto.sort)) {
        if (listVehicleDto.sort[element]) {
          order[element] = listVehicleDto.sort[element];
        }
      }
    }
    return this.vehicleRepository.paginate({ page: listVehicleDto.page, limit: listVehicleDto.limit }, { where, order });
  }
}
