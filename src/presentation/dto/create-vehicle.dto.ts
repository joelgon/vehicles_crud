import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDefined, IsInt, IsString, Max, MaxLength, Min } from 'class-validator';

const CURRENT_YEAR = new Date().getFullYear();

export class CreateVehicleDto {
  @IsDefined({ message: 'License plate is required' })
  @IsString({ message: 'License plate must be a string' })
  @MaxLength(7, { message: 'License plate must be at most 7 characters long' })
  @ApiProperty({
    example: 'ABC-1234',
    description: 'License plate',
    required: true,
    maxLength: 7,
    type: 'string',
    format: 'string',
  })
  @Transform(({ value }) => value.replace(/-/g, '').toUpperCase())
  licensePlate: string;

  @IsDefined({ message: 'Chassi is required' })
  @IsString({ message: 'Chassi must be a string' })
  @MaxLength(17, { message: 'Chassi must be at most 17 characters long' })
  @ApiProperty({
    example: '12345678901234567',
    description: 'Chassi',
    required: true,
    maxLength: 17,
    type: 'string',
    format: 'string',
  })
  @Transform(({ value }) => value.toUpperCase())
  chassi: string;

  @IsDefined({ message: 'Renavam is required' })
  @IsString({ message: 'Renavam must be a string' })
  @MaxLength(11, { message: 'Renavam must be at most 11 characters long' })
  @ApiProperty({
    example: '12345678901',
    description: 'Renavam',
    required: true,
    maxLength: 11,
    type: 'string',
    format: 'string',
  })
  @Transform(({ value }) => value.toUpperCase())
  renavam: string;

  @IsDefined({ message: 'Model is required' })
  @IsString({ message: 'Model must be a string' })
  @MaxLength(50, { message: 'Model must be at most 50 characters long' })
  @ApiProperty({
    example: 'Gol',
    description: 'Model',
    required: true,
    maxLength: 50,
    type: 'string',
    format: 'string',
  })
  @Transform(({ value }) => value.toUpperCase())
  model: string;

  @IsDefined({ message: 'Brand is required' })
  @IsString({ message: 'Brand must be a string' })
  @MaxLength(50, { message: 'Brand must be at most 50 characters long' })
  @ApiProperty({
    example: 'VW',
    description: 'Brand',
    required: true,
    maxLength: 50,
    type: 'string',
    format: 'string',
  })
  @Transform(({ value }) => value.toUpperCase())
  brand: string;

  @ApiProperty({
    example: 2010,
    description: 'Year',
    required: true,
    type: 'number',
    format: 'number',
  })
  @IsDefined({ message: 'Year is required' })
  @IsInt({ message: 'Year must be an integer' })
  @Min(1900, { message: 'Year must be at least 1900' })
  @Max(CURRENT_YEAR + 1, { message: `Year cannot exceed ${CURRENT_YEAR + 1}` })
  year: number;
}
