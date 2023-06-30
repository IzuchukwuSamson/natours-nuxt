import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';

import { User } from '../../user/entities/user.entity';
import { UserService } from '../../user/user.service';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  userService: UserService;
  serializeUser(user: User, done: (err: Error | null, id?: any) => void) {
    done(null, user);
    // done(null, {id: user.id}); // if you dont want to expose too much info about the user
  }

  async deserializeUser(
    payload: any,
    done: (err: Error | null, payload?: User) => void,
  ) {
    const user = this.userService.findOne(payload.id);
    done(null, await user);
  }

  // deserializeUser(id: any, done: (err: Error | null, payload?: User) => void) {
  //   done(null, id);
  // }
}

/// Remember to read about what this file does
