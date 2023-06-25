import { Role } from 'src/common/enum/role.enum';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    constructor(data?: Partial<User>);
    setPassword(password: string): Promise<void>;
    checkPassword(plainPassword: string): Promise<boolean>;
    logInsert(): void;
}
