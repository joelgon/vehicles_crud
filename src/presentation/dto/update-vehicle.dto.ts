import { PartialType, PickType } from '@nestjs/swagger';

import { CreateVehicleDto } from './create-vehicle.dto';

export class UpdateVehicleDto extends PartialType(PickType(CreateVehicleDto, ['model', 'brand', 'year'] as const)) {}
