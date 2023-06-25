import { ValidatorConstraintInterface } from 'class-validator';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UserAlreadyExists implements ValidatorConstraintInterface {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    validate(email: string): Promise<boolean>;
    defaultMessage(): string;
}
