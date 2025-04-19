import { PreconditionFailedException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { expect } from 'chai';
import sinon from 'sinon';

import { VEHICLES_REPOSITORY } from '@src/shared/constant/infra.constant';

import { DeleteVehiclesUseCase } from './delete-vehicle.use-case';

describe('DeleteVehiclesUseCase (unit)', () => {
  let useCase: DeleteVehiclesUseCase;
  let vehicleRepository: {
    findOne: sinon.SinonStub;
    delete: sinon.SinonStub;
  };

  const mockId = '123e4567-e89b-12d3-a456-426614174000';

  const existingVehicle = {
    id: mockId,
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
      delete: sinon.stub(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteVehiclesUseCase,
        {
          provide: VEHICLES_REPOSITORY,
          useValue: vehicleRepository,
        },
      ],
    }).compile();

    useCase = module.get(DeleteVehiclesUseCase);
  });

  afterEach(() => sinon.restore());

  it('should delete the vehicle when it exists', async () => {
    vehicleRepository.findOne.resolves(existingVehicle);
    vehicleRepository.delete.resolves();

    await useCase.execute(mockId);

    expect(vehicleRepository.findOne.calledOnceWithExactly({ where: { id: mockId } })).to.equal(true);
    expect(vehicleRepository.delete.calledOnceWithExactly(mockId)).to.equal(true);
  });

  it('should throw PreconditionFailedException if vehicle does not exist', async () => {
    vehicleRepository.findOne.resolves(null);

    try {
      await useCase.execute(mockId);
    } catch (err) {
      expect(err).to.be.instanceOf(PreconditionFailedException);
      expect(err.getResponse()).to.deep.equal({ property: 'id', message: 'Vehicle not found' });
    }
  });
});
