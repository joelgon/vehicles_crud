import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Index('IDX_vehicle_license_plate', ['licensePlate'], { unique: true })
@Index('IDX_vehicle_chassis', ['chassis'], { unique: true })
@Index('IDX_vehicle_renavam', ['renavam'], { unique: true })
@Entity({ name: 'tb_vehicles', schema: 'public' })
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 7, name: 'license_plate' })
  licensePlate: string;

  @Column({ type: 'varchar', length: 17, name: 'chassi' })
  chassi: string;

  @Column({ type: 'varchar', length: 11, name: 'renavam' })
  renavam: string;

  @Column({ type: 'varchar', length: 50, name: 'model' })
  model: string;

  @Column({ type: 'varchar', length: 50, name: 'brand' })
  brand: string;

  @Column({ type: 'int', name: 'year' })
  year: number;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
