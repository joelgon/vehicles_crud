import { CreateVehicle, UniqueVehicle, Vehicle } from '../entities/vehicle.entity';

export interface CreateVehicleRepository {
  findOne(where: { where: UniqueVehicle }): Promise<Vehicle | null>;
  save(createVehicleDto: CreateVehicle): Promise<Vehicle>;
}
