import {
  IsDefined,
  IsNotEmpty,
  IsEmail,
  MinLength,
  Validate,
} from 'class-validator';

export class Login {
  @IsDefined()
  @IsEmail()
  email: string;

  @IsDefined()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}
