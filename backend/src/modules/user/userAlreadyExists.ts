import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Repository } from 'typeorm';
import { isNullOrUndefined } from 'is-what';
// import { isNullOrUndefined } from 'util';

import { User } from './entities/user.entity';

@ValidatorConstraint({ name: 'userAlreadyExists', async: true })
@Injectable()
export class UserAlreadyExists implements ValidatorConstraintInterface {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async validate(email: string) {
    const user = await this.userRepository.findOne({ where: { email } });

    return isNullOrUndefined(user);
  }

  defaultMessage() {
    return 'The email «$value» is already registered.';
  }
}
