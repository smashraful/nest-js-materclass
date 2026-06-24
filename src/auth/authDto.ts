import { IsAlphanumeric, IsEmail, IsNotEmpty } from 'class-validator';

export class AuthDto {
  @IsEmail()
  email!: string;

  @IsAlphanumeric()
  password!: string;

  @IsNotEmpty()
  phone!: number;
}
