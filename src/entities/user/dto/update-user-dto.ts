import { IsEmail, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsNumber()
  id: number;
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsPhoneNumber()
  phone: string;
}
