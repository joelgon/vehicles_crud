import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';

import { CreateVehicleUseCase } from '@src/application/vehicles/create-vehicle.use-case';
import { Vehicle } from '@src/domain/entities/vehicle.entity';

import { CreateVehicleDto } from '../dto/create-vehicle.dto';

@ApiTags('vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly createVehicleUseCase: CreateVehicleUseCase) {}

  @Post()
  @ApiCreatedResponse({ type: Vehicle })
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.createVehicleUseCase.execute(createVehicleDto);
  }
}
