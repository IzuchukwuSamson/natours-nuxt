import { Role } from '../enum/role.enum';
export interface INormalResponse {
    message: string;
    status: number;
}
export interface IRegisterResponse {
    id: string;
    email: string;
    role: Role;
}
