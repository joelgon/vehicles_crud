import { Body, Controller, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { CreateVehicleUseCase } from '@src/application/vehicles/create-vehicle.use-case';
import { UpdateVehicleUseCase } from '@src/application/vehicles/update-vehicle.use-case';
import { Vehicle } from '@src/domain/entities/vehicle.entity';

import { CreateVehicleDto } from '../dto/create-vehicle.dto';
import { UpdateVehicleDto } from '../dto/update-vehicle.dto';

@ApiTags('vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(
    private readonly createVehicleUseCase: CreateVehicleUseCase,
    private readonly updateVehicleUseCase: UpdateVehicleUseCase
  ) {}

  @Post()
  @ApiCreatedResponse({ type: Vehicle })
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.createVehicleUseCase.execute(createVehicleDto);
  }

  @Patch(':id')
  @ApiOkResponse({ type: Vehicle })
  update(@Body() updateVehicleDto: UpdateVehicleDto, @Param('id') id: string) {
    return this.updateVehicleUseCase.execute(id, updateVehicleDto);
  }
}
