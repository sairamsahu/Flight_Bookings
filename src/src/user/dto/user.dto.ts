import { IsEmail, IsNotEmpty, Length } from 'class-validator';
/**
 * To declare  properties for user and to perform validations
 */
export class UserDTO {
  @IsNotEmpty({ message: 'name should not be empty' })
  @Length(3, 8, { message:'name should be minimum of 3 characters and maximum of 8 characters '})
  name: string;

  @IsNotEmpty({ message: 'emailId should not be empty' })
  @IsEmail()
  emailId: string;

  @IsNotEmpty({ message: 'password should not be empty' })
  @Length(4, 8, {message: 'Length of password should be minimum of 4 and maximum of 8'})
   password: string;
   
  @IsNotEmpty({ message: 'phonenumber should not be empty' })
  @Length(10, 11, {message: 'Length of phonenumber should be minimum of 10 and maximum of 11'})
  phoneNumber: string;
   @IsNotEmpty({message:'age should not be empty'})
  age:number;

  userId: number;

}
