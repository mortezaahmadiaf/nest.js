import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './entities/user/user.module';
import { CommentModule } from './entities/comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicModule } from './entities/topic/topic.module';
import { AuthModule } from './entities/auth/auth.module';
import { ProducerModule } from './entities/producer/producer.module';
import config from 'ormconfig';
@Module({
  imports: [
    UserModule,
    CommentModule,
    TypeOrmModule.forRoot(config),
    TopicModule,
    AuthModule,
    ProducerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
