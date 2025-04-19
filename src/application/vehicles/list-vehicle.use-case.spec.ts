import { Test, TestingModule } from '@nestjs/testing';
import { expect } from 'chai';
import sinon from 'sinon';
import { Like } from 'typeorm';

import { Vehicle } from '@src/domain/entities/vehicle.entity';
import { ListVehicleDto } from '@src/presentation/dto/list-vehicle.dto';
import { VEHICLES_REPOSITORY } from '@src/shared/constant/infra.constant';
import { SORT_ENUM } from '@src/shared/enum/sort.enum';

import { ListVehicleUseCase } from './list-vehicle.use-case';

describe('ListVehicleUseCase (unit)', () => {
  let useCase: ListVehicleUseCase;
  let vehicleRepository: {
    paginate: sinon.SinonStub;
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

  const listDto: ListVehicleDto = {
    filter: {
      licensePlate: 'ABC',
    },
    sort: {
      year: SORT_ENUM.DESC,
    },
    page: 1,
    limit: 10,
  };

  beforeEach(async () => {
    vehicleRepository = {
      paginate: sinon.stub(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ListVehicleUseCase,
        {
          provide: VEHICLES_REPOSITORY,
          useValue: vehicleRepository,
        },
      ],
    }).compile();

    useCase = module.get(ListVehicleUseCase);
  });

  afterEach(() => sinon.restore());

  it('should call paginate with correct filters and sorting', async () => {
    const expectedResult = {
      items: [vehicle],
      meta: {
        totalItems: 1,
        itemCount: 1,
        itemsPerPage: 10,
        totalPages: 1,
        currentPage: 1,
      },
      links: {},
    };

    vehicleRepository.paginate.resolves(expectedResult);

    const result = await useCase.execute(listDto);

    expect(vehicleRepository.paginate.calledOnce).to.equal(true);
    expect(vehicleRepository.paginate.firstCall.args[0]).to.deep.equal({
      page: 1,
      limit: 10,
      route: '/vehicles',
    });
    expect(vehicleRepository.paginate.firstCall.args[1]).to.deep.equal({
      where: { licensePlate: Like('%ABC%') },
      order: { year: SORT_ENUM.DESC },
    });

    expect(result).to.deep.equal(expectedResult);
  });

  it('should handle empty filter and sort gracefully', async () => {
    const dto: ListVehicleDto = { page: 1, limit: 10 };
    vehicleRepository.paginate.resolves({ items: [], meta: {}, links: {} });

    const result = await useCase.execute(dto);

    expect(vehicleRepository.paginate.calledOnce).to.equal(true);
    expect(result.items).to.deep.equal([]);
  });
});
