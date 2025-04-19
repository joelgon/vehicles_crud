import { ApiProperty, PartialType, PickType } from '@nestjs/swagger';

export class Vehicle {
  @ApiProperty({
    example: '1a2b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6',
    description: 'Unique identifier for the vehicle',
  })
  id: string;

  @ApiProperty({
    example: 'ABC1234',
    description: 'Vehicle license plate (format may vary: ABC1234 or ABC1D23)',
  })
  licensePlate: string;

  @ApiProperty({
    example: '9BWZZZ377VT004251',
    description: 'Chassis (VIN) number of the vehicle',
  })
  chassi: string;

  @ApiProperty({
    example: '12345678901',
    description: 'RENAVAM code (national vehicle registration number)',
  })
  renavam: string;

  @ApiProperty({
    example: 'Civic',
    description: 'Model name of the vehicle',
  })
  model: string;

  @ApiProperty({
    example: 'Honda',
    description: 'Brand/manufacturer of the vehicle',
  })
  brand: string;

  @ApiProperty({
    example: 2023,
    description: 'Manufacturing year of the vehicle',
  })
  year: number;

  @ApiProperty({
    example: '2024-01-15T12:34:56.000Z',
    description: 'Timestamp when the vehicle was created',
  })
  createdAt: Date;

  @ApiProperty({
    example: '2024-03-01T10:20:30.000Z',
    description: 'Timestamp of the last update',
  })
  updatedAt: Date;
}

export class CreateVehicle extends PickType(Vehicle, ['licensePlate', 'chassi', 'renavam', 'model', 'brand', 'year'] as const) {}

export class UpdateVehicle extends PartialType(PickType(Vehicle, ['model', 'brand', 'year'] as const)) {}

export class UniqueVehicle extends PickType(Vehicle, ['licensePlate', 'chassi', 'renavam'] as const) {}
