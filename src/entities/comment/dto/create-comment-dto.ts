import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsPhoneNumber()
  phone: string;
}
