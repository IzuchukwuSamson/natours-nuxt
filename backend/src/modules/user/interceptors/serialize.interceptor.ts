import {
  UseInterceptors,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToInstance } from 'class-transformer';
// import { serialize } from 'v8';

interface ClassConstructor {
  new (...args: any[]): {};
}

// ClassConstructor is for catching errors in the controller

export function Serialize(dto: ClassConstructor) {
  return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor {
  constructor(private dto: any) {}
  // | Promise<Observable<any>>
  intercept(
    context: ExecutionContext,
    handler: CallHandler<any>,
  ): Observable<any> {
    // Run Something before a request is handled by the request handler
    // console.log('I am running before the handler', context);
    return handler.handle().pipe(
      map((data: any) => {
        // Run Something before the response is sent out
        // console.log('I am running before reponse is sent out', data);
        return plainToInstance(this.dto, data, {
          excludeExtraneousValues: true,
        });
      }),
    );
  }
}
