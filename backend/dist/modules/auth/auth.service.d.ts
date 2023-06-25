import { JwtService } from '@nestjs/jwt';
import { Signup } from './dto/signup.dto';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(newUser: Signup): Promise<User>;
    login(email: string, password: string): Promise<User>;
    verifyPayload(payload: JwtPayload): Promise<User>;
    signToken(user: User): string;
}
