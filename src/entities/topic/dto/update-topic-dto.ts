import { IsEmail, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateTopicDto {
  @IsNumber()
  id: number;
  @IsString()
  title: string;
  @IsString()
  description: string;
}
