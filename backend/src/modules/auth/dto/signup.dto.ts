import {
  IsDefined,
  IsNotEmpty,
  IsEmail,
  MinLength,
  Validate,
} from 'class-validator';
import { UserAlreadyExists } from 'src/modules/user/userAlreadyExists';

export class Signup {
  @IsDefined()
  @IsEmail()
  @Validate(UserAlreadyExists)
  email: string;

  @IsDefined()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
