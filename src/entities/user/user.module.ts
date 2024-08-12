import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CommentService } from '../comment/comment.service';
@Module({
  controllers: [UserController],
  providers: [UserService, CommentService],
})
export class UserModule {}
