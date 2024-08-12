import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  text: string;

  @IsNumber()
  userId: number;

  @IsNumber()
  topicId: number;
}

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  @IsNumber()
  id: number;
}
