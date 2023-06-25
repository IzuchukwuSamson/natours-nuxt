import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly usersService;
    constructor(usersService: UserService);
    findAll(): Promise<import("./entities/user.entity").User[]>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./entities/user.entity").User>;
}
