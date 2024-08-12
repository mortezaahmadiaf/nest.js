import { Injectable } from '@nestjs/common';
import { CommentEntity } from './entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepo: Repository<CommentEntity>,
  ) {}
  findUserComment(id: string) {}
}
