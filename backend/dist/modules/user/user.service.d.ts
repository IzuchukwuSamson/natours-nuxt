import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository, FindOneOptions } from 'typeorm';
export declare class UserService {
    private repo;
    constructor(repo: Repository<User>);
    find(email: string): Promise<User[]>;
    create(data: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(where: FindOneOptions<User>): Promise<User>;
    update(id: any | FindOneOptions<User>, updateUser: UpdateUserDto): Promise<User>;
    remove(id: number): string;
}
