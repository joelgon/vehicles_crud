import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm';

export class InitialMigration1745017319165 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'tb_vehicles',
        schema: 'public',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'gen_random_uuid()',
          },
          {
            name: 'license_plate',
            type: 'varchar',
            length: '7',
            isNullable: false,
          },
          {
            name: 'chassi',
            type: 'varchar',
            length: '17',
            isNullable: false,
          },
          {
            name: 'renavam',
            type: 'varchar',
            length: '11',
            isNullable: false,
          },
          {
            name: 'model',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'brand',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'year',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
      true
    );

    await queryRunner.createIndex(
      'tb_vehicles',
      new TableIndex({
        name: 'IDX_vehicle_license_plate',
        columnNames: ['license_plate'],
        isUnique: true,
      })
    );

    await queryRunner.createIndex(
      'tb_vehicles',
      new TableIndex({
        name: 'IDX_vehicle_chassis',
        columnNames: ['chassi'],
        isUnique: true,
      })
    );

    await queryRunner.createIndex(
      'tb_vehicles',
      new TableIndex({
        name: 'IDX_vehicle_renavam',
        columnNames: ['renavam'],
        isUnique: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropIndex('tb_vehicles', 'IDX_vehicle_renavam');
    await queryRunner.dropIndex('tb_vehicles', 'IDX_vehicle_chassis');
    await queryRunner.dropIndex('tb_vehicles', 'IDX_vehicle_license_plate');
    await queryRunner.dropTable('tb_vehicles', true);
  }
}
