import { PassportSerializer } from '@nestjs/passport';
import { User } from '../../user/entities/user.entity';
import { UserService } from '../../user/user.service';
export declare class SessionSerializer extends PassportSerializer {
    userService: UserService;
    serializeUser(user: User, done: (err: Error | null, id?: any) => void): void;
    deserializeUser(payload: any, done: (err: Error | null, payload?: User) => void): Promise<void>;
}
