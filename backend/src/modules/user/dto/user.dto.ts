import { Expose, Exclude } from 'class-transformer';

export class UserDto {
  @Expose()
  id: number;

  @Expose()
  email: string;

  @Expose()
  firstname: string;

  @Expose()
  lastname: string;

  @Exclude()
  password: string;

  @Expose()
  emailVerified: boolean;

  @Expose()
  image: string;
}
