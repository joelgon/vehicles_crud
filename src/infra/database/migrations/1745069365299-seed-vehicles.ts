import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedVehicles1745069365299 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "public"."tb_vehicles"
        ("id", "license_plate", "chassi", "renavam", "model", "brand", "year", "created_at", "updated_at")
      VALUES
        (gen_random_uuid(), 'ABC1234', '9BWZZZ377VT000001', '10000000001', UPPER('Civic'), UPPER('Honda'), 2020, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1235', '9BWZZZ377VT000002', '10000000002', UPPER('Corolla'), UPPER('Toyota'), 2021, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1236', '9BWZZZ377VT000003', '10000000003', UPPER('Onix'), UPPER('Chevrolet'), 2019, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1237', '9BWZZZ377VT000004', '10000000004', UPPER('HB20'), UPPER('Hyundai'), 2018, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1238', '9BWZZZ377VT000005', '10000000005', UPPER('Gol'), UPPER('Volkswagen'), 2017, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1239', '9BWZZZ377VT000006', '10000000006', UPPER('T-Cross'), UPPER('Volkswagen'), 2020, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1240', '9BWZZZ377VT000007', '10000000007', UPPER('Compass'), UPPER('Jeep'), 2021, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1241', '9BWZZZ377VT000008', '10000000008', UPPER('Creta'), UPPER('Hyundai'), 2022, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1242', '9BWZZZ377VT000009', '10000000009', UPPER('Ka'), UPPER('Ford'), 2016, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1243', '9BWZZZ377VT000010', '10000000010', UPPER('Argo'), UPPER('Fiat'), 2020, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1244', '9BWZZZ377VT000011', '10000000011', UPPER('Fit'), UPPER('Honda'), 2019, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1245', '9BWZZZ377VT000012', '10000000012', UPPER('HR-V'), UPPER('Honda'), 2020, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1246', '9BWZZZ377VT000013', '10000000013', UPPER('Yaris'), UPPER('Toyota'), 2021, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1247', '9BWZZZ377VT000014', '10000000014', UPPER('Spin'), UPPER('Chevrolet'), 2018, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1248', '9BWZZZ377VT000015', '10000000015', UPPER('Tracker'), UPPER('Chevrolet'), 2022, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1249', '9BWZZZ377VT000016', '10000000016', UPPER('Tiggo 5X'), UPPER('Caoa Chery'), 2021, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1250', '9BWZZZ377VT000017', '10000000017', UPPER('Mobi'), UPPER('Fiat'), 2020, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1251', '9BWZZZ377VT000018', '10000000018', UPPER('Pulse'), UPPER('Fiat'), 2022, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1252', '9BWZZZ377VT000019', '10000000019', UPPER('Toro'), UPPER('Fiat'), 2019, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1253', '9BWZZZ377VT000020', '10000000020', UPPER('Ranger'), UPPER('Ford'), 2020, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1254', '9BWZZZ377VT000021', '10000000021', UPPER('EcoSport'), UPPER('Ford'), 2018, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1255', '9BWZZZ377VT000022', '10000000022', UPPER('Fusion'), UPPER('Ford'), 2017, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1256', '9BWZZZ377VT000023', '10000000023', UPPER('Polo'), UPPER('Volkswagen'), 2020, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1257', '9BWZZZ377VT000024', '10000000024', UPPER('Virtus'), UPPER('Volkswagen'), 2020, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1258', '9BWZZZ377VT000025', '10000000025', UPPER('Jetta'), UPPER('Volkswagen'), 2021, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1259', '9BWZZZ377VT000026', '10000000026', UPPER('Kicks'), UPPER('Nissan'), 2022, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1260', '9BWZZZ377VT000027', '10000000027', UPPER('Versa'), UPPER('Nissan'), 2021, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1261', '9BWZZZ377VT000028', '10000000028', UPPER('March'), UPPER('Nissan'), 2020, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1262', '9BWZZZ377VT000029', '10000000029', UPPER('Renegade'), UPPER('Jeep'), 2021, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1263', '9BWZZZ377VT000030', '10000000030', UPPER('Wrangler'), UPPER('Jeep'), 2022, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1264', '9BWZZZ377VT000031', '10000000031', UPPER('A3'), UPPER('Audi'), 2020, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1265', '9BWZZZ377VT000032', '10000000032', UPPER('A4'), UPPER('Audi'), 2021, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1266', '9BWZZZ377VT000033', '10000000033', UPPER('Q3'), UPPER('Audi'), 2022, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1267', '9BWZZZ377VT000034', '10000000034', UPPER('C3'), UPPER('Citroën'), 2020, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1268', '9BWZZZ377VT000035', '10000000035', UPPER('C4 Cactus'), UPPER('Citroën'), 2021, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1269', '9BWZZZ377VT000036', '10000000036', UPPER('208'), UPPER('Peugeot'), 2022, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1270', '9BWZZZ377VT000037', '10000000037', UPPER('2008'), UPPER('Peugeot'), 2020, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1271', '9BWZZZ377VT000038', '10000000038', UPPER('S10'), UPPER('Chevrolet'), 2021, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1272', '9BWZZZ377VT000039', '10000000039', UPPER('Hilux'), UPPER('Toyota'), 2022, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1273', '9BWZZZ377VT000040', '10000000040', UPPER('SW4'), UPPER('Toyota'), 2021, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1274', '9BWZZZ377VT000041', '10000000041', UPPER('Duster'), UPPER('Renault'), 2021, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1275', '9BWZZZ377VT000042', '10000000042', UPPER('Sandero'), UPPER('Renault'), 2020, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1276', '9BWZZZ377VT000043', '10000000043', UPPER('Kwid'), UPPER('Renault'), 2022, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1277', '9BWZZZ377VT000044', '10000000044', UPPER('City'), UPPER('Honda'), 2022, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1278', '9BWZZZ377VT000045', '10000000045', UPPER('Nivus'), UPPER('Volkswagen'), 2022, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1279', '9BWZZZ377VT000046', '10000000046', UPPER('Tiguan'), UPPER('Volkswagen'), 2021, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1280', '9BWZZZ377VT000047', '10000000047', UPPER('Camry'), UPPER('Toyota'), 2021, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1281', '9BWZZZ377VT000048', '10000000048', UPPER('Fusion Hybrid'), UPPER('Ford'), 2020, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1282', '9BWZZZ377VT000049', '10000000049', UPPER('Celta'), UPPER('Chevrolet'), 2016, NOW(), NOW()),
        (gen_random_uuid(), 'ABC1283', '9BWZZZ377VT000050', '10000000050', UPPER('Palio'), UPPER('Fiat'), 2017, NOW(), NOW());
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM "public"."tb_vehicles";`);
  }
}
