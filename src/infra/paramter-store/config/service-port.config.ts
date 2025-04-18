import { Injectable } from '@nestjs/common';

@Injectable()
export class ServicePortConfig {
  get execute(): number {
    return Number(process.env.SERVICE_PORT ?? 3000);
  }
}
