import { JwtService } from '@nestjs/jwt';
import { Queue } from 'bull';
import { Signup } from './dto/signup.dto';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly emailQueue;
    constructor(userService: UserService, jwtService: JwtService, emailQueue: Queue<Signup>);
    register(newUser: Signup): Promise<User>;
    login(email: string, password: string): Promise<User>;
    verifyPayload(payload: JwtPayload): Promise<User>;
    signToken(user: User): string;
}
