import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsEmail,
  MinLength,
  Validate,
  IsOptional,
} from 'class-validator';
import { UserAlreadyExists } from 'src/modules/user/userAlreadyExists';

export class Signup {
  @IsDefined()
  @IsEmail()
  @ApiProperty()
  @Validate(UserAlreadyExists)
  email: string;

  @ApiProperty()
  @IsOptional()
  firstname: string;

  @ApiProperty()
  @IsOptional()
  lastname: string;

  @IsDefined()
  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty()
  password: string;
}
