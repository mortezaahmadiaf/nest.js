import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';

export class CreateTopicDto {
  @IsString()
  title: string;
  @IsString()
  description: string;
}

export class UpdateTopicDto extends PartialType(CreateTopicDto) {
  @IsNumber()
  id: number;
}
