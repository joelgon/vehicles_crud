import { Inject, Injectable, Logger, PreconditionFailedException } from '@nestjs/common';

import { Vehicle } from '@src/domain/entities/vehicle.entity';
import { CreateVehicleRepository } from '@src/domain/repositories/vehicle.repository';
import { CreateVehicleDto } from '@src/presentation/dto/create-vehicle.dto';
import { VEHICLES_REPOSITORY } from '@src/shared/constant/infra.constant';

@Injectable()
export class CreateVehicleUseCase {
  private readonly _logger = new Logger(CreateVehicleUseCase.name);
  private readonly uniqueProperties = ['licensePlate', 'chassi', 'renavam'];

  constructor(@Inject(VEHICLES_REPOSITORY) private readonly vehicleRepository: CreateVehicleRepository) {}

  async execute(createVehicleDto: CreateVehicleDto): Promise<Vehicle> {
    const existingVehicle = await this.vehicleRepository.findOne({
      where: {
        licensePlate: createVehicleDto.licensePlate,
        chassi: createVehicleDto.chassi,
        renavam: createVehicleDto.renavam,
      },
    });

    if (existingVehicle) {
      for (const property of this.uniqueProperties) {
        if (createVehicleDto[property] !== existingVehicle[property]) {
          throw new PreconditionFailedException({ property, message: 'Vehicle already exists' });
        }
      }
    }

    return this.vehicleRepository.save(createVehicleDto);
  }
}
