import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { Request } from 'express';
import { User } from '../entities/user.entity';

export const CurrentUser = createParamDecorator(
  (data: keyof User, ctx: ExecutionContext) => {
    const user = ctx.switchToHttp().getRequest<Request>() as any as User;

    return data ? user && user[data] : user;
  },
);

// export const CurrentUser = createParamDecorator(
//   (data: never, context: ExecutionContext) => {
//     const request = context.switchToHttp().getRequest();
//     console.log(request.session.userId);
//     return request.currentUser;
//   },
// );
