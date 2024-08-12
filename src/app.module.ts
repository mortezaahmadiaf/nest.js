import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './entities/user/user.module';
import { CommentModule } from './entities/comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
@Module({
  imports: [UserModule, CommentModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
