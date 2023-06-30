import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository, FindOneOptions } from 'typeorm';
import { Signup } from '../auth/dto/signup.dto';
export declare class UserService {
    private repo;
    constructor(repo: Repository<User>);
    find(email: string): Promise<User[]>;
    create(createUserDto: Signup): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(where: FindOneOptions<User>): Promise<User>;
    update(id: any | FindOneOptions<User>, updateUser: UpdateUserDto): Promise<User>;
    remove(id: number): string;
}
