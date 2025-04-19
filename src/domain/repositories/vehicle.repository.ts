import { CreateVehicle, UniqueVehicle, UpdateVehicle, Vehicle } from '../entities/vehicle.entity';

export interface CreateVehicleRepository {
  findOne(where: { where: UniqueVehicle }): Promise<Vehicle | null>;
  save(createVehicleDto: CreateVehicle): Promise<Vehicle>;
}

export interface UpdateVehicleRepository {
  findOne(where: { where: { id: string } }): Promise<Vehicle | null>;
  update(id: string, updateVehicleDto: UpdateVehicle): Promise<Vehicle>;
}
