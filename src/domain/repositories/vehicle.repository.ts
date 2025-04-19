import { IPaginationMeta, IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { FindManyOptions, FindOptionsWhere } from 'typeorm';

import { CreateVehicle, UniqueVehicle, UpdateVehicle, Vehicle } from '../entities/vehicle.entity';

export interface CreateVehicleRepository {
  findOne(where: { where: UniqueVehicle }): Promise<Vehicle | null>;
  save(createVehicleDto: CreateVehicle): Promise<Vehicle>;
}

export interface UpdateVehicleRepository {
  findOne(where: { where: { id: string } }): Promise<Vehicle | null>;
  update(id: string, updateVehicleDto: UpdateVehicle): Promise<Vehicle>;
}

export interface ListVehiclesRepository {
  paginate(
    options: IPaginationOptions<IPaginationMeta>,
    searchOptions?: FindOptionsWhere<Vehicle> | FindManyOptions<Vehicle>
  ): Promise<Pagination<Vehicle>>;
}

export interface DeleteVehicleRepository {
  findOne(where: { where: { id: string } }): Promise<Vehicle | null>;
  delete(id: string): Promise<void>;
}
