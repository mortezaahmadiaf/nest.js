import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { CommentService } from '../comment/comment.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity';
import { CommentEntity } from '../comment/entity';
@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, CommentEntity])],
  controllers: [UserController],
  providers: [UserService, CommentService],
})
export class UserModule {}
