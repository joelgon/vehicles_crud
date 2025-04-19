import { Inject, Injectable, Logger, PreconditionFailedException } from '@nestjs/common';

import { UpdateVehicle, Vehicle } from '@src/domain/entities/vehicle.entity';
import { UpdateVehicleRepository } from '@src/domain/repositories/vehicle.repository';
import { VEHICLES_REPOSITORY } from '@src/shared/constant/infra.constant';

@Injectable()
export class UpdateVehicleUseCase {
  private readonly _logger = new Logger(UpdateVehicleUseCase.name);

  constructor(
    @Inject(VEHICLES_REPOSITORY)
    private readonly vehicleRepository: UpdateVehicleRepository
  ) {}

  async execute(id: string, updateVehicleDto: UpdateVehicle): Promise<Vehicle> {
    const existingVehicle = await this.vehicleRepository.findOne({
      where: {
        id,
      },
    });

    if (!existingVehicle) {
      throw new PreconditionFailedException({ property: 'id', message: 'Vehicle not found' });
    }

    await this.vehicleRepository.update(id, updateVehicleDto);

    return { ...existingVehicle, ...updateVehicleDto };
  }
}
