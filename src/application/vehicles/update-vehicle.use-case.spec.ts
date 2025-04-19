import { PreconditionFailedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { expect } from 'chai';
import sinon from 'sinon';

import { UpdateVehicle, Vehicle } from '@src/domain/entities/vehicle.entity';
import { VEHICLES_REPOSITORY } from '@src/shared/constant/infra.constant';

import { UpdateVehicleUseCase } from './update-vehicle.use-case';

describe('UpdateVehicleUseCase (unit)', () => {
  let useCase: UpdateVehicleUseCase;
  let vehicleRepository: {
    findOne: sinon.SinonStub;
    update: sinon.SinonStub;
  };

  const id = 'uuid';
  const existingVehicle: Vehicle = {
    id,
    licensePlate: 'ABC1234',
    chassi: '9BWZZZ377VT000001',
    renavam: '10000000001',
    model: 'CIVIC',
    brand: 'HONDA',
    year: 2020,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const updateVehicleDto: UpdateVehicle = {
    model: 'CITY',
    brand: 'HONDA',
    year: 2021,
  };

  beforeEach(async () => {
    vehicleRepository = {
      findOne: sinon.stub(),
      update: sinon.stub(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateVehicleUseCase,
        {
          provide: VEHICLES_REPOSITORY,
          useValue: vehicleRepository,
        },
      ],
    }).compile();

    useCase = module.get(UpdateVehicleUseCase);
  });

  afterEach(() => sinon.restore());

  it('should update an existing vehicle successfully', async () => {
    vehicleRepository.findOne.resolves(existingVehicle);
    vehicleRepository.update.resolves();

    const result = await useCase.execute(id, updateVehicleDto);

    expect(result).to.deep.equal({ ...existingVehicle, ...updateVehicleDto });
    expect(vehicleRepository.findOne.calledOnceWithExactly({ where: { id } })).to.equals(true);
    expect(vehicleRepository.update.calledOnceWithExactly(id, updateVehicleDto)).to.equals(true);
  });

  it('should throw PreconditionFailedException if the vehicle does not exist', async () => {
    vehicleRepository.findOne.resolves(null);

    try {
      await useCase.execute(id, updateVehicleDto);
    } catch (err) {
      expect(err).to.be.instanceOf(PreconditionFailedException);
      expect(err.getResponse()).to.deep.equal({ property: 'id', message: 'Vehicle not found' });
    }
  });
});
