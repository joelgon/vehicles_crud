import { Inject, Injectable, Logger, PreconditionFailedException } from '@nestjs/common';

import { DeleteVehicleRepository } from '@src/domain/repositories/vehicle.repository';
import { VEHICLES_REPOSITORY } from '@src/shared/constant/infra.constant';

@Injectable()
export class DeleteVehicleUseCase {
  private readonly _logger = new Logger(DeleteVehicleUseCase.name);

  constructor(
    @Inject(VEHICLES_REPOSITORY)
    private readonly vehicleRepository: DeleteVehicleRepository
  ) {}

  async execute(id: string): Promise<void> {
    const existingVehicle = await this.vehicleRepository.findOne({
      where: {
        id,
      },
    });

    if (!existingVehicle) {
      throw new PreconditionFailedException({ property: 'id', message: 'Vehicle not found' });
    }

    await this.vehicleRepository.delete(id);
  }
}
