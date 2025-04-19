import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { CreateVehicleUseCase } from '@src/application/vehicles/create-vehicle.use-case';
import { DeleteVehicleUseCase } from '@src/application/vehicles/delete-vehicle.use-case';
import { ListVehicleUseCase } from '@src/application/vehicles/list-vehicle.use-case';
import { UpdateVehicleUseCase } from '@src/application/vehicles/update-vehicle.use-case';
import { paginatedResponse } from '@src/domain/entities/paginate.entity';
import { Vehicle } from '@src/domain/entities/vehicle.entity';

import { CreateVehicleDto } from '../dto/create-vehicle.dto';
import { ListVehicleDto } from '../dto/list-vehicle.dto';
import { UpdateVehicleDto } from '../dto/update-vehicle.dto';

@ApiTags('vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(
    private readonly createVehicleUseCase: CreateVehicleUseCase,
    private readonly updateVehicleUseCase: UpdateVehicleUseCase,
    private readonly listVehicleUseCase: ListVehicleUseCase,
    private readonly deleteVehicleUseCase: DeleteVehicleUseCase
  ) {}

  @Post()
  @ApiCreatedResponse({ type: Vehicle })
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.createVehicleUseCase.execute(createVehicleDto);
  }

  @Patch(':id')
  @ApiOkResponse({ type: Vehicle })
  update(@Body() updateVehicleDto: UpdateVehicleDto, @Param('id', ParseUUIDPipe) id: string) {
    return this.updateVehicleUseCase.execute(id, updateVehicleDto);
  }

  @Get()
  @ApiOkResponse({ schema: paginatedResponse(Vehicle) })
  findAll(@Query() listVehicleDto: ListVehicleDto) {
    return this.listVehicleUseCase.execute(listVehicleDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.deleteVehicleUseCase.execute(id);
  }
}
