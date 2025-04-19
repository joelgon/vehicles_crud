import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsEnum, IsInt, IsNumberString, IsOptional, Min, ValidateNested } from 'class-validator';

import { SORT_ENUM } from '@src/shared/enum/sort.enum';

import { CreateVehicleDto } from './create-vehicle.dto';

class VehicleSortDto {
  @ApiPropertyOptional({ enum: SORT_ENUM })
  @IsOptional()
  @IsEnum(SORT_ENUM)
  licensePlate?: SORT_ENUM;

  @ApiPropertyOptional({ enum: SORT_ENUM })
  @IsOptional()
  @IsEnum(SORT_ENUM)
  chassi?: SORT_ENUM;

  @ApiPropertyOptional({ enum: SORT_ENUM })
  @IsOptional()
  @IsEnum(SORT_ENUM)
  renavam?: SORT_ENUM;

  @ApiPropertyOptional({ enum: SORT_ENUM })
  @IsOptional()
  @IsEnum(SORT_ENUM)
  model?: SORT_ENUM;

  @ApiPropertyOptional({ enum: SORT_ENUM })
  @IsOptional()
  @IsEnum(SORT_ENUM)
  brand?: SORT_ENUM;

  @ApiPropertyOptional({ enum: SORT_ENUM })
  @IsOptional()
  @IsEnum(SORT_ENUM)
  year?: SORT_ENUM;
}

export class VehicleFilterDto extends PartialType(CreateVehicleDto) {}

export class ListVehicleDto {
  @ApiPropertyOptional({ type: () => VehicleFilterDto })
  @ValidateNested()
  @Type(() => VehicleFilterDto)
  @IsOptional()
  filter?: VehicleFilterDto;

  @ApiPropertyOptional({ type: () => VehicleSortDto })
  @ValidateNested()
  @Type(() => VehicleSortDto)
  @IsOptional()
  sort?: VehicleSortDto;

  @ApiPropertyOptional({ default: 1 })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  @Min(1)
  page: number = 1;

  @ApiPropertyOptional({ default: 10 })
  @IsOptional()
  @Transform(({ value }) => Number(value))
  @IsInt()
  @Min(1)
  limit: number = 10;
}
