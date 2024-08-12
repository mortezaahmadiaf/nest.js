import { IsEmail, IsNumber, IsPhoneNumber, IsString } from 'class-validator';

export class UpdateCommentDto {
  @IsNumber()
  id: number;
  @IsString()
  text: string;

  @IsNumber()
  userId: number;

  @IsNumber()
  topicId: number;
}
