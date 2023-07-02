import { JwtService } from '@nestjs/jwt';
import { Signup } from './dto/signup.dto';
import { UserService } from '../user/user.service';
import { User } from '../user/entities/user.entity';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { MailService } from 'src/mail/mail.service';
import { UserDetails } from 'src/common/enum/googleUserDetails.enum';
import { Repository } from 'typeorm';
export declare class AuthService {
    private readonly repo;
    private readonly userService;
    private readonly jwtService;
    private mailService;
    private code;
    constructor(repo: Repository<User>, userService: UserService, jwtService: JwtService, mailService: MailService);
    register(newUser: Signup): Promise<User>;
    login(email: string, password: string): Promise<User>;
    verifyPayload(payload: JwtPayload): Promise<User>;
    signToken(user: User): string;
    verifyAccount(code: string): Promise<any>;
    signinwithgoogle(details: UserDetails): Promise<User>;
    findUser(id: number): Promise<User>;
}
