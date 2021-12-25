import { IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @Matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, {
    message: 'Email is not valid',
  })
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(15)
  password: string;
}
