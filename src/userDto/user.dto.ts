import {
  IsAlphanumeric,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty({ message: 'Username is required' })
  @MaxLength(20, { message: 'Username must be less than 20 characters' })
  readonly name!: string;

  @IsAlphanumeric()
  @IsNotEmpty({ message: 'Password is required' })
  @MaxLength(8, { message: 'Password must be less than 8 characters' })
  readonly password!: string;

  createdAt?: string;
}
