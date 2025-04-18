import { randomUUID } from 'crypto';

import { Injectable } from '@nestjs/common';
import { Params } from 'nestjs-pino';

import { name as serviceName } from '../../../../package.json';

@Injectable()
export class LoggerConfig {
  get execute(): Params {
    const isDev = process.env.ENVIRONMENT !== 'production';

    return {
      pinoHttp: {
        level: isDev ? 'debug' : 'info',
        transport: isDev
          ? {
              target: 'pino-pretty',
              options: {
                colorize: true,
                singleLine: true,
                translateTime: 'yyyy-mm-dd HH:MM:ss.l o',
                ignore: 'pid,hostname',
              },
            }
          : undefined,
        redact: ['req.headers.authorization', 'req.headers.cookie', 'req.body.password'],
        genReqId: (req) => req.headers['x-request-id']?.toString() ?? randomUUID(),
        customProps: (req) => ({
          request_id: req.id,
          user_agent: req.headers['user-agent'],
          service_name: serviceName,
        }),
      },
    };
  }
}
