import { randomUUID } from 'crypto';

import { CallHandler, ExecutionContext, Injectable } from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req: FastifyRequest = context.switchToHttp().getRequest();

    if (!req.headers['x-request-id']) {
      req.headers['x-request-id'] = randomUUID();
    }

    return next.handle();
  }
}
