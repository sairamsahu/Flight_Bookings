import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDTO {
  @IsNotEmpty({ message: 'email should not be empty' })
  @IsEmail({ message: 'enter valid email id' })
  emailId: string;

  @IsNotEmpty({ message: 'password should not be empty' })
  password: string;
}
