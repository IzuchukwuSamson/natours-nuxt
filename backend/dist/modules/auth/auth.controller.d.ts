import { AuthService } from './auth.service';
import { Signup } from './dto/signup.dto';
import { Response } from 'express';
import { Login } from './dto/login.dto';
import { User } from '../user/entities/user.entity';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(signup: Signup, resp: Response): Promise<Response<any, Record<string, any>>>;
    login(login: Login, resp: Response): Promise<Response<any, Record<string, any>>>;
    me(user: User): User;
    logout(session: any): void;
    handleLogin(): {
        msg: string;
    };
    handleRedirect(): {
        msg: string;
    };
}
