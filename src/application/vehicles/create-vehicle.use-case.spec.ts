import { PreconditionFailedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { expect } from 'chai';
import sinon from 'sinon';

import { Vehicle } from '@src/domain/entities/vehicle.entity';
import { CreateVehicleDto } from '@src/presentation/dto/create-vehicle.dto';
import { VEHICLES_REPOSITORY } from '@src/shared/constant/infra.constant';

import { CreateVehicleUseCase } from './create-vehicle.use-case';

describe('CreateVehicleUseCase (unit)', () => {
  let useCase: CreateVehicleUseCase;
  let vehicleRepository: {
    findOne: sinon.SinonStub;
    save: sinon.SinonStub;
  };

  const dto: CreateVehicleDto = {
    licensePlate: 'ABC1234',
    chassi: '9BWZZZ377VT000001',
    renavam: '10000000001',
    model: 'CIVIC',
    brand: 'HONDA',
    year: 2020,
  };

  const vehicle: Vehicle = {
    id: 'uuid',
    licensePlate: 'ABC1234',
    chassi: '9BWZZZ377VT000001',
    renavam: '10000000001',
    model: 'CIVIC',
    brand: 'HONDA',
    year: 2020,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    vehicleRepository = {
      findOne: sinon.stub(),
      save: sinon.stub(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateVehicleUseCase,
        {
          provide: VEHICLES_REPOSITORY,
          useValue: vehicleRepository,
        },
      ],
    }).compile();

    useCase = module.get(CreateVehicleUseCase);
  });

  afterEach(() => sinon.restore());

  it('should create a new vehicle when no duplicate is found', async () => {
    vehicleRepository.findOne.resolves(null);
    vehicleRepository.save.resolves(vehicle);

    const result = await useCase.execute(dto);

    expect(result).to.deep.equal(vehicle);
    expect(vehicleRepository.findOne.calledOnce).to.equal(true);
    expect(vehicleRepository.save.calledOnceWithExactly(dto)).to.equal(true);
  });

  it('should throw PreconditionFailedException if a duplicate vehicle is found', async () => {
    vehicleRepository.findOne.resolves(vehicle);

    try {
      await useCase.execute(dto);
    } catch (err) {
      expect(err).to.be.instanceOf(PreconditionFailedException);
      expect(err.getResponse()).to.have.property('property');
      expect(err.getResponse()).to.have.property('message', 'Vehicle already exists');
    }
  });

  it('should throw error for mismatched unique property', async () => {
    const alteredDto = { ...dto, chassi: 'DIFFERENT' };
    vehicleRepository.findOne.resolves(vehicle);

    try {
      await useCase.execute(alteredDto);
      throw new Error('Expected exception was not thrown');
    } catch (err) {
      expect(err).to.be.instanceOf(PreconditionFailedException);
      expect(err.getResponse()).to.deep.equal({ property: 'chassi', message: 'Vehicle already exists' });
    }
  });
});
